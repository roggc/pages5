import React from 'react'
import {Div} from './styled'
import Counter from '../counter2/index'

export default
({state1,state2,dispatch1,dispatch2})=>
{
  const el=
  <Div>
    <Counter state={state1} dispatch={dispatch1}/>
    <Counter state={state2} dispatch={dispatch2}/>
  </Div>
  return el
}
