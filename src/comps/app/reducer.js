import combine from '../../redux/combineReducers'
import todo from '../todo/reducer'
import count from '../counter2/reducer'
import login from '../login/reducer'

export default
combine
(
  {
    todo
    ,count
    ,login
  }
)
