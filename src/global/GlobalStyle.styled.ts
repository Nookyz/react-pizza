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
    margin: auto;
    padding-top: ${header_height + 20}px;
	  max-width: 70%;
  }
  @media screen and (max-width: 1480px){
    .container{
      margin: auto;
      max-width: 80%;
    }
  }
  @media screen and (max-width: 1280px){
    .container{
      margin: auto;
      max-width: 75%;
    }
  }
  @media screen and (max-width: 1024px){
    .container{
      margin: auto;
      padding-top: ${header_height * 2 + 20}px;
      max-width: 75%;
    }
  }
  @media screen and (max-width: 769px){
    
  }
  @media screen and (max-width: 600px) {
    
    .container{
      margin: auto;
      max-width: 90%;
    }
  }
`