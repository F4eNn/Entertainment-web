'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,::after,::before{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
:root{
  --red: #fc4747;
  --dark-blue: #10141e;
  --greyish-blue: #5a698f;
  --white: #ffff;
  --semi-dark-blue: #161d2f;
  --radius-sm: 5px;
  --radius-md: 10px;
  --radius-xl: 15px;


} 
body{
  height: 100vh;
  background-color: var(--dark-blue);
}
`
