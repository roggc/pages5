import combine from '../../redux/index'
import todo from '../todo/reducer'
import count from '../counter2/reducer'

export default
combine
(
  {
    todo
    ,count
  }
)
