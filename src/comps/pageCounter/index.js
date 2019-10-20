import React,{useContext} from 'react'
import {Div} from './styled'
import Counter from '../counter2/index'
import {UserCtx} from '../../ctx/index'

export default
({redux1,redux2})=>
{
  const user=useContext(UserCtx)
  const el=
  <Div>
  {
    user?
    <div>
      <Counter redux={redux1}/>
      <Counter redux={redux2}/>
    </div>:
    <div>you must login</div>
  }
  </Div>
  return el
}
