import React,{useState,useRef} from 'react'
import {Row,Float,Modal} from './styled'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useOuterClick} from '../../hooks/index'

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
        <div onClick={toggleShow}><Link to='/'>home</Link></div>
        <div onClick={toggleShow}><Link to='/about'>about</Link></div>
        <div onClick={toggleShow}><Link to='/hits'>hits</Link></div>
        <div onClick={toggleShow}><Link to='/counter'>counter</Link></div>
      </Modal>
    </Float>
  </Row>
  return el
}
