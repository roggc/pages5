import React,{createContext} from 'react'
import {Div,Container,Fade,FloatL,FloatR,Container2,Abs} from './styled'
import Header from '../header/index'
import Footer from '../footer/index'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from '../login/index'
import About from '../about/index'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import Hits from '../hits/index'
import PageCounter from '../pageCounter/index'
import Todo from '../todo/index'
import reducer from './reducer'
import initialState from './state'
import useReducerWithKey from '../../hooks/useReducerWithKey'
import {UserCtx} from '../../ctx/index'
import Signin from '../signin/index'

export default
()=>
{
  const redux1=useReducerWithKey(reducer,initialState,'state1')
  const redux2=useReducerWithKey(reducer,initialState,'state2')
  const redux3=useReducerWithKey(reducer,initialState,'state3')
  const redux4=useReducerWithKey(reducer,initialState,'state4')
  const el=
  <Div>
  <UserCtx.Provider value={redux1.state.login.user}>
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
              <Route path='/' exact render=
              {
                ()=>
                <Abs><Signin redux={redux1}/></Abs>
              }/>
              <Route path='/login' render=
              {
                ()=>
                <Abs><Login redux={redux1}/></Abs>
              }/>
              <Route path='/about' render={()=><Abs><About/></Abs>}/>
              <Route path='/hits' render={()=><Abs><Hits/></Abs>}/>
              <Route path='/counters1' render=
              {
                ()=>
                <Abs>
                  <PageCounter
                  redux1={redux1}
                  redux2={redux2}/>
                </Abs>
              }/>
              <Route path='/counters2' render=
              {
                ()=>
                <Abs>
                  <PageCounter
                  redux1={redux3}
                  redux2={redux4}/>
                </Abs>
              }/>
              <Route path='/todos1' render=
              {
                ()=>
                <Abs>
                  <Todo redux={redux1}/>
                </Abs>
              }/>
              <Route path='/todos2' render=
              {
                ()=>
                <Abs>
                  <Todo redux={redux2}/>
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
    </UserCtx.Provider>
  </Div>
  return el
}
