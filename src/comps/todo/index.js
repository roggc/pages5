import React,{useReducer,useRef,useEffect} from 'react'
import {Div} from './styled'
import check from '../../img/check.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export default
({redux:{state:{todo},dispatch}})=>
{
  const addTodo=
  ()=>
  dispatch({type:'TODO_SHOW_NEW_TODO'})
  const confirmAdd=
  e=>
  {
    const value=inputRef.current.value
    if(value!=='')
    {
      dispatch({type:'TODO_ADD_TODO',text:value})
    }
  }
  const cancelAdd=
  ()=>
  {
    dispatch({type:'TODO_NOT_SHOW_NEW_TODO'})
    dispatch({type:'TODO_SET_INPUT_VALUE',val:''})
  }
  const allowFocus=
  e=>
  e.stopPropagation()
  const keyDown=
  e=>
  {
    if(e.key==='Enter')
    {
      confirmAdd(e)
      cancelAdd()
    }
  }
  const setDone=
  i=>e=>
  dispatch({type:'TODO_SET_DONE_TODO',val:i})
  const clearTodos=
  ()=>
  dispatch({type:'TODO_SHOW_CLEAR_TODOS'})
  const confirmClear=
  e=>
  {
    dispatch({type:'TODO_CLEAR_TODOS'})
  }
  const cancelClear=
  ()=>
  dispatch({type:'TODO_NOT_SHOW_CLEAR_TODOS'})
  const inputChange=
  e=>
  dispatch({type:'TODO_SET_INPUT_VALUE',val:e.target.value.toUpperCase()})
  const deleteTodo=
  i=>e=>
  dispatch({type:'TODO_DELETE_TODO',val:i})
  const inputRef=useRef(null)
  useEffect
  (
    ()=>
    {
      if(inputRef.current)
      {
        inputRef.current.focus()
      }
    }
  )
  const el=
  <Div>
    {
      todo.showNewTodo?
      <div className='modal' onClick={cancelAdd} onKeyDown={keyDown}>
        <div className='center'>
          <input ref={inputRef} onClick={allowFocus} onChange={inputChange} value={todo.inputValue}/>
        </div>
        <div className='center'><button onClick={confirmAdd}>add</button></div>
      </div>:
      ''
    }
    {
      todo.showClearTodos?
      <div className='modal' onClick={cancelClear}>
        <div className='center'>CLEAR?</div>
        <div className='center'><button onClick={confirmClear}>clear</button></div>
      </div>:
      ''
    }
    <button onClick={addTodo}>add</button>&nbsp;
    <button onClick={clearTodos}>clear</button>
    <ul>
      {
        todo.todos.map
        (
          (todo,i)=>
          <li key={i}>
            {todo.text}&nbsp;
            {
              todo.done?
              <div className='inline'>
                <img src={check}/>&nbsp;
                <button onClick={deleteTodo(i)}><FontAwesomeIcon icon={faTrashAlt}/></button>
              </div>:
              <div className='inline'>
                <button onClick={setDone(i)}><img src={check}/></button>&nbsp;
                <button onClick={deleteTodo(i)}><FontAwesomeIcon icon={faTrashAlt}/></button>
              </div>
            }
          </li>
        )
      }
    </ul>
  </Div>
  return el
}
