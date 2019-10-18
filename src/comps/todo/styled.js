import styled from 'styled-components'

export const Div=
styled.div
`
height:100%;
button
{
  border-radius: 5px;
  margin-bottom: 10px;
  cursor:pointer;
  font-size:.9em;
}
ul
{
  list-style-type:none;
  padding:0px;
  margin:0px;
  height:90%;
  overflow:auto;
  .inline
  {
    display:inline-block;
  }
}
li
{
  /*border:1px solid ghostwhite;
  border-radius:5px;
  padding:5px;
  float:left;*/
}
li img
{
  height:10px;
}
.modal
{
  background-color:rgba(0,0,0,0.4);
  padding-top:145px;
  overflow:auto;
  position:fixed;
  top:0px;
  left:0px;
  height:100%;
  width:100%;
  z-index:1;
  input
  {
    border-radius:5px;
    width:300px;
    height:40px;
    font-size:.9em;
  }
  .center
  {
    width:31%;
    margin:auto;
  }
  button
  {
    margin-top:10px;
  }
}
`
