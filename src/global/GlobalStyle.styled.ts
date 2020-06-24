import { createGlobalStyle } from 'styled-components'
import {header_height} from './variables'

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body{
    font-family: 'Roboto', sans-serif;
    background: #F2F4F6;
  }
  .container{
    display: flex;
    flex-direction: column;
    padding: ${header_height + 20}px 10% 20px 10%;
  }
  @media screen and (max-width: 1024px){
    .container{
      padding: ${header_height * 2 + 20}px 5% 20px 5%;
    }
  }
  @media screen and (max-width: 375px){
    .container{
      padding: ${header_height * 2 + 20}px 2% 20px 2%;
    }
  }
`