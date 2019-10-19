import React from 'react'
import {Div} from './styled'
import graphql from '../../graphql/index'
import Spinner from '../spinner/index'

const query=
`
mutation ($email:String!,$psswrd:String!)
{
  login(email:$email,psswrd:$psswrd)
  {
    errors
    {
      name
      message
      function
    }
    error
    {
      name
      message
      function
    }
    res
    {
      name
      email
      id
    }
  }
}
`
const url='http://localhost:5000'

export default
({redux:{state:{login},dispatch}})=>
{
  const cb=
  json=>
  {
    dispatch({type:'LOGIN_SET_FETCHING_FALSE'})
    console.log(json)
  }
  const loginClick=
  e=>
  {
    dispatch({type:'LOGIN_SET_FETCHING_TRUE'})
    graphql(query)(login)(url)(cb)
  }
  const emailChange=
  e=>
  dispatch
  (
    {
      type:'LOGIN_SET_EMAIL'
      ,val:e.target.value
    }
  )
  const psswrdChange=
  e=>
  dispatch
  (
    {
      type:'LOGIN_SET_PSSWRD'
      ,val:e.target.value
    }
  )
  const el=
  <Div>
    {
      login.fetching?
      <div className='modal'>
        <div className='center'>
          <Spinner/>
        </div>
      </div>:
      ''
    }
    <div className='center'>
      <div className='center2'>
          <div className='row'>
            <div>email</div>
            <div><input value={login.email} onChange={emailChange}/></div>
          </div>
          <div className='row'>
            <div>password</div>
            <div><input value={login.psswrd} onChange={psswrdChange}/></div>
          </div>
          <div className='row'>
            <button onClick={loginClick}>login</button>
          </div>
       </div>
    </div>
  </Div>
  return el
}
