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

export default
()=>
{
  const reducer=
  (val,act)=>
  {
    switch(act.type)
    {
      case 'SHOW_NEW_TODO':
        val=
        {
          ...val
          ,showNewTodo:true
        }
        return val
      case 'NOT_SHOW_NEW_TODO':
        val=
        {
          ...val
          ,showNewTodo:false
        }
        return val
      case 'SET_DONE':
        val=
        {
          ...val
        }
        val.todos.some
        (
          (todo,i)=>
          {
            if(i===act.val)
            {
              todo.done=true
            }
          }
        )
        return val
      case 'ADD_TODO':
        val=
        {
          ...val
          ,todos:
          [
            ...val.todos
            ,{text:act.text,done:false}
          ]
        }
        return val
      default:
        return val
    }
  }
  const initialState={todos:[],showNewTodo:false}
  const [state,dispatch]=useReducer(reducer,initialState)
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
              <Route path='/counters' render={()=><Abs><PageCounter/></Abs>}/>
              <Route path='/todo' render={()=><Abs><Todo state={state} dispatch={dispatch}/></Abs>}/>
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
