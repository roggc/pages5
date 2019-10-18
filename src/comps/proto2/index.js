import React,{useReducer} from 'react'
import {Div} from './styled'
import reducer from './reducer'

export default
()=>
{
  const initialState={}
  const [state,dispatch]=useReducer(reducer,initialState)
  const el=
  <Div>
  </Div>
  return el
}
