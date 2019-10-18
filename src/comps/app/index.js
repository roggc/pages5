import React,{useReducer} from 'react'
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
import Hits from '../hits/index'
import PageCounter from '../pageCounter/index'
import Todo from '../todo/index'
import reducer from './reducer'
import initialState from './state'

export default
()=>
{
  const [state1,dispatch1]=useReducer(reducer,initialState)
  const [state2,dispatch2]=useReducer(reducer,initialState)
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
              <Route path='/hits' render={()=><Abs><Hits/></Abs>}/>
              <Route path='/counters' render=
              {
                ()=>
                <Abs><PageCounter state1={state1.count} dispatch1={dispatch1}
                state2={state2.count} dispatch2={dispatch2}/></Abs>
              }/>
              <Route path='/todo1' render=
              {
                ()=>
                <Abs>
                  <Todo state={state1.todo} dispatch={dispatch1}/>
                </Abs>
              }/>
              <Route path='/todo2' render=
              {
                ()=>
                <Abs>
                  <Todo state={state2.todo} dispatch={dispatch2}/>
                </Abs>
              }/>
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
