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
  const [state3,dispatch3]=useReducer(reducer,initialState)
  const [state4,dispatch4]=useReducer(reducer,initialState)
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
              <Route path='/counters1' render=
              {
                ()=>
                <Abs>
                  <PageCounter
                  redux1={{state:state1,dispatch:dispatch1}}
                  redux2={{state:state2,dispatch:dispatch2}}/>
                </Abs>
              }/>
              <Route path='/counters2' render=
              {
                ()=>
                <Abs>
                  <PageCounter
                  redux1={{state:state3,dispatch:dispatch3}}
                  redux2={{state:state4,dispatch:dispatch4}}/>
                </Abs>
              }/>
              <Route path='/todos1' render=
              {
                ()=>
                <Abs>
                  <Todo redux={{state:state1,dispatch:dispatch1}}/>
                </Abs>
              }/>
              <Route path='/todos2' render=
              {
                ()=>
                <Abs>
                  <Todo redux={{state:state2,dispatch:dispatch2}}/>
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
