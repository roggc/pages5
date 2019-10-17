import React,{useState,useEffect,useCallback} from 'react'
import {Div} from './styled'
import axios from 'axios'
import Spinner from '../spinner/index'

export default
()=>
{
  const [state,setState]=useState({hits: [],loaded:false})
  const fetch=
  useCallback
  (
    async ()=>
    {
      const result=await axios('https://hn.algolia.com/api/v1/search?query=redux')
      setState({...state,hits:result.data.hits,loaded:true})
    }
    ,[]
  )
  useEffect
  (
    ()=>{fetch()}
    ,[fetch]
  )
  const el=
  <Div>
  {
    state.loaded?
    <ul>
    {
      state.hits.map
      (
        item=>
        <li key={item.objectID}>
          <a
            href={item.url}
            onMouseOver=
            {
              ()=>setState({...state,hover:item.objectID})
            }
            className={state.hover===item.objectID?'hover':''}
            >{item.title}</a>
        </li>
      )
    }
    </ul>:
    <div className='centerC'><div className='centerR'><Spinner/></div></div>
  }

  </Div>
  return el
}
