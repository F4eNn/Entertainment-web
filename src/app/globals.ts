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
  --bookmark-button: #2f3542;
  --gray: #9da0a7;
  --white: #ffff;
  --semi-dark-blue: #161d2f;
  --radius-sm: 5px;
  --radius-md: 10px;
  --radius-xl: 15px;
} 
h1,h2,h3,h4,p,span{
  color: var(--white);
}
html{
  font-size: 62.5%;
}
body{
  min-height: 100vh;
  background-color: var(--dark-blue);

  @media (min-width: 768px){
    padding-block-start: 2rem;
  }
  @media (min-width: 1024px){
    padding-block-start: 0;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    margin-inline: auto;
    /* max-width: 1440px; */
    width: 100%;
    
  }
}
`
