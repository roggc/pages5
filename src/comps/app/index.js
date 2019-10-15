import React from 'react'
import {Div,Container,Fade,FloatL,FloatR,Container2,Abs} from './styled'
import Header from '../header/index'
import Footer from '../footer/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../home/index'
import About from '../about/index'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import About2 from '../about2/index'
import Home2 from '../home2/index'
import Invisible from '../invisible/index'

export default
()=>
{
  const el=
  <Div>
  <Router>
    <Container>
      <Header/>
    </Container>
    <Container2>
        <Route render=
        {
          ({location})=>
          <Fade><TransitionGroup><CSSTransition
            timeout={450}
            key={location.key}
            classNames='fade'
            appear={true}>
            <Switch location={location}>
              <Route path='/' exact render={()=><Abs><Home/></Abs>}/>
              <Route path='/about' render={()=><Abs><About/></Abs>}/>
            </Switch>
          </CSSTransition></TransitionGroup></Fade>
        }/>
    </Container2>
    <Container>
      <Footer/>
    </Container>
    </Router>
  </Div>

  return el
}
