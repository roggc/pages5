import React from 'react'
import {Div} from './styled'

export default
({state,dispatch})=>
{
  const incrementCounter=
  ()=>
  dispatch({type:'COUNT_INCREMENT'})
  const decrementCounter=
  ()=>
  dispatch({type:'COUNT_DECREMENT'})
  const el=
  <Div>
    <div>{state.count}</div>
    <button onClick={incrementCounter}>+</button>
    <button onClick={decrementCounter}>-</button>
  </Div>
  return el
}
