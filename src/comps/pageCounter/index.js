import React from 'react'
import {Div} from './styled'
import Counter from '../counter2/index'

export default
()=>
{
  const el=
  <Div>
    <Counter/>
    <Counter/>
  </Div>
  return el
}
