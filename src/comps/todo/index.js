import React,{useReducer} from 'react'
import {Div} from './styled'

export default
()=>
{
  const reducer=
  (val,act)=>
  {
    switch(act.type)
    {
      case 'WWW':
        val=
        {
          ...val
          ,kkk:act.val
        }
        return val
      default:
        return val
    }
  }
  const initialState={todos:[]}
  const [state,dispatch]=useReducer(reducer,initialState)
  const el=
  <Div>
    <ul>
      {
        state.todos.map
        (
          (todo,i)=>
          <li key={i}>{todo.text}</li>
        )
      }
    </ul>
  </Div>
  return el
}
