import React,{useReducer} from 'react'
import {Div} from './styled'
import SubCounter from '../subcounter/index'

export default
()=>
{
  const initialState={count:0}
  const reducer=
  (val,act)=>
  {
    switch(act.type)
    {
      case 'INCREMENT':
        val=
        {
          ...val
          ,count:val.count+1
        }
        return val
      case 'DECREMENT':
        val=
        {
          ...val
          ,count:val.count-1
        }
        return val
      default:
        return val
    }
  }
  const [state,dispatch]=useReducer(reducer,initialState)
  const incrementCounter=
  ()=>
  dispatch({type:'INCREMENT'})
  const decrementCounter=
  ()=>
  dispatch({type:'DECREMENT'})
  const el=
  <Div>
    <div>{state.count}</div>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
    <SubCounter dispatch={dispatch}/>
  </Div>
  return el
}
