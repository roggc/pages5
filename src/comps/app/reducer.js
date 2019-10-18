export default
(val,act)=>
{
  switch(act.type)
  {
    case 'TODO_SHOW_NEW_TODO':
      val=
      {
        ...val
        ,todo:
        {
          ...val.todo
          ,showNewTodo:true
        }
      }
      return val
    case 'TODO_NOT_SHOW_NEW_TODO':
      val=
      {
        ...val
        ,todo:
        {
          ...val.todo
          ,showNewTodo:false
        }
      }
      return val
    case 'TODO_ADD_TODO':
      val=
      {
        ...val
        ,todo:
        {
          ...val.todo
          ,todos:
          [
            ...val.todo.todos
            ,{text:act.text,done:false}
          ]
        }

      }
      return val
    case 'TODO_SET_DONE_TODO':
      val=
      {
        ...val
      }
      val.todo.todos.some
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
    case 'TODO_SHOW_CLEAR_TODOS':
      val=
      {
        ...val
        ,todo:
        {
          ...val.todo
          ,showClearTodos:true
        }
      }
      return val
    case 'TODO_NOT_SHOW_CLEAR_TODOS':
      val=
      {
        ...val
        ,todo:
        {
          ...val.todo
          ,showClearTodos:false
        }
      }
      return val
    case 'TODO_CLEAR_TODOS':
      val=
      {
        ...val
        ,todo:
        {
          ...val.todo
          ,todos:[]
        }
      }
      return val
    case 'TODO_SET_INPUT_VALUE':
      val=
      {
        ...val
        ,todo:
        {
          ...val.todo
          ,inputValue:act.val
        }
      }
      return val
    case 'TODO_DELETE_TODO':
      const todos=val.todo.todos.filter
      (
        (todo,i)=>
        {
          if(i!==act.val)
          {
            return true
          }
        }
      )
      val=
      {
        ...val
        ,todo:
        {
          ...val.todo
          ,todos:todos
        }
      }
      return val
    default:
      return val
  }
}
