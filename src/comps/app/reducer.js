export default
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
