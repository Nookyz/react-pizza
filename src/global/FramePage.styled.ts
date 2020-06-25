import styled from 'styled-components'

export const MyFrame = styled.div`
  margin: 20px 0;
  display: grid;  
  grid-template-columns: repeat(4,minmax(250px,350px));
  grid-gap: 20px;
  @media screen and (max-width: 1280px){ 
    grid-template-columns: repeat(3,minmax(250px,350px));
  }
  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(2,minmax(250px,450px));
  }
  @media screen and (max-width: 769px){
    grid-gap: 10px;
  }
  @media screen and (max-width: 600px){
    grid-template-columns: minmax(250px,100%);
  }
`