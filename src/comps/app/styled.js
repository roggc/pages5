import styled from 'styled-components'

export const Div=
styled.div
`
font-family:sans-serif;
color:ghostwhite;
`

export const Container=
styled.div
`
background-color:grey;
border-radius:5px;
padding:5px;
margin:5px;
`


export const Container2=
styled.div
`
background-color:grey;
border-radius:5px;
padding:5px;
margin:5px;
height:333px;
`

export const Fade=
styled.div
`
position:relative;
.fade-appear,
.fade-enter
{
    opacity: 0;
    z-index:1;
}
.fade-appear-active,
.fade-enter.fade-enter-active
{
    opacity: 1;
    transition: opacity 300ms ease-in 150ms;
}
.fade-exit {
    opacity: 1;
}

.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 150ms ease-in;
}
`

export const FloatL=
styled.div
`
float:left;
`

export const FloatR=
styled.div
`
float:right;
`

export const Abs=
styled.div
`
position:absolute;
`
