import React,{useReducer,useRef,useEffect} from 'react'
import {Div} from './styled'
import check from '../../img/check.png'

export default
({state,dispatch})=>
{
  const addTodo=
  ()=>
  dispatch({type:'SHOW_NEW_TODO'})
  const confirmAdd=
  e=>
  {
    e.stopPropagation()
    const value=inputRef.current.value
    if(value!=='')
    {
      dispatch({type:'ADD_TODO',text:value})
      dispatch({type:'NOT_SHOW_NEW_TODO'})
    }
  }
  const cancelAdd=
  ()=>
  dispatch({type:'NOT_SHOW_NEW_TODO'})
  const inputRef=useRef(null)
  const allowFocus=
  e=>
  e.stopPropagation()
  const keyDown=
  e=>
  {
    if(e.key==='Enter')
    {
      confirmAdd(e)
    }
  }
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
  const setDone=
  i=>e=>
  dispatch({type:'SET_DONE',val:i})
  const el=
  <Div>
    {
      state.showNewTodo?
      <div className='modal' onClick={cancelAdd} onKeyDown={keyDown}>
        <div className='center'><input ref={inputRef} onClick={allowFocus}/></div>
        <div className='center'><button onClick={confirmAdd}>add</button></div>
      </div>:
      <div></div>
    }
    <button onClick={addTodo}>add</button>
    <ul>
      {
        state.todos.map
        (
          (todo,i)=>
          <li key={i}>
            {todo.text}&nbsp;
            {
              todo.done?
              <img src={check}/>:
              <button onClick={setDone(i)}>done</button>
            }
          </li>
        )
      }
    </ul>
  </Div>
  return el
}
