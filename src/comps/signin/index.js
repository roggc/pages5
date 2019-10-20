import React from 'react'
import {Div} from './styled'

export default
({redux:{state:{signin},dispatch}})=>
{
  const signinClick=
  e=>{}
  const el=
  <Div>
    <div className='center'>
      <div className='square'>
        <div className='row'>
          <div>name</div>
          <div><input/></div>
        </div>
        <div  className='row'>
          <div>email</div>
          <div><input/></div>
        </div>
        <div  className='row'>
          <div>password</div>
          <div><input/></div>
        </div>
        <div  className='row last'>
          <div><button onClick={signinClick}>signin</button></div>
          <div></div>
        </div>
      </div>
    </div>
  </Div>
  return el
}
