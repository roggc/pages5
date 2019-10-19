export default
(val={},act)=>
{
  switch(act.type)
  {
    case 'LOGIN_SET_EMAIL':
      val=
      {
        ...val
        ,email:act.val
      }
      return val
    case 'LOGIN_SET_PSSWRD':
      val=
      {
        ...val
        ,psswrd:act.val
      }
      return val
    case 'LOGIN_SET_FETCHING_TRUE':
      val=
      {
        ...val
        ,fetching:true
      }
      return val
    case 'LOGIN_SET_FETCHING_FALSE':
      val=
      {
        ...val
        ,fetching:false
      }
      return val
    default:
      return val
  }
}
