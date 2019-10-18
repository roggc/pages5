import React from 'react'
import {Div} from './styled'
import Counter from '../counter2/index'

export default
({redux1,redux2})=>
{
  const el=
  <Div>
    <Counter redux={redux1}/>
    <Counter redux={redux2}/>
  </Div>
  return el
}
