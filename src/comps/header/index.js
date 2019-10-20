import React,{useState,useRef} from 'react'
import {Row,Float,Modal} from './styled'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import useOuterClick from '../../hooks/useOuterClick'

export default
()=>
{
  const [state,setState]=useState({showModal:false})
  const ref=useRef(null)
  useOuterClick(e=>setState({showModal:false}),ref)
  const toggleShow=
  e=>
  setState({showModal:!state.showModal})
  const modalClick=
  (e)=>
  e.stopPropagation()
  const el=
  <Row>
    <div>wellcome</div>
    <Float onClick={toggleShow} ref={ref}>
      <FontAwesomeIcon icon={faBars}/>
      <Modal className={state.showModal?'show':'notShow'} onClick={modalClick}>
        <div onClick={toggleShow}><Link to='/'>signin</Link></div>
        <div onClick={toggleShow}><Link to='/login'>login</Link></div>
        <div onClick={toggleShow}><Link to='/about'>about</Link></div>
        <div onClick={toggleShow}><Link to='/hits'>hits</Link></div>
        <div onClick={toggleShow}><Link to='/counters1'>counters1</Link></div>
        <div onClick={toggleShow}><Link to='/counters2'>counters2</Link></div>
        <div onClick={toggleShow}><Link to='/todos1'>todos1</Link></div>
        <div onClick={toggleShow}><Link to='/todos2'>todos2</Link></div>
      </Modal>
    </Float>
  </Row>
  return el
}
