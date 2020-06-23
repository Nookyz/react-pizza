import styled from 'styled-components'

import {header_height, border_color} from '../../global/variables'

export const MySideMenu = styled.div`
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px; 
  position: fixed;
  z-index: 100;
  background-color: #fff;
  border-right: 1px solid ${border_color};
  transition: transform 0.5s ease-in-out;
  transform: ${(props: { open: boolean }) => (props.open ? "translateX(0)" : "translateX(-100%)")};

  @media screen and (max-width: 375px) {
    top:0;
    width: 100%;
  }
`
export const MySideMenuTitle = styled.div`
  border-bottom: 1px solid ${border_color};
  background-color: #fff;
  height: ${header_height}px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .pizza{
    color: tomato;
    font-size: 35px;
    :hover{
      cursor: pointer;
    }
  }
`
export const MySideMenuNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70%;
  border-bottom: 1px solid ${border_color};
  .nav-link{
    height: 50px;
    display: flex;
    justify-content: center;
    
    a{
      padding: 15px 0;
      width: 100%;
      height: 100%;
      text-align: center;
      text-decoration: none;    
      color: pink;
      cursor: pointer;
    }
    a:hover{
      background-color: rgba(0,0,0, 0.1); 
    }
    .active{
      color: black;
    }
  }
  
`
export const MySideMenuAbout = styled.div`
  display: flex;
  padding: 10px;
  a{
    color: blue;
  }
`