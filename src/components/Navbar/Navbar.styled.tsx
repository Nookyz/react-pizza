import styled from 'styled-components'

import {header_height} from '../../global/variables'

export const MyHeader = styled.div`
  position: fixed;
  height: ${header_height}px;
  z-index: 10;
  width: 100%;
  display: flex;
  padding: 0 40px;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255, 0.9);
  border-bottom: 1px solid #e6e6e6;
  @media screen and (max-width: 1024px){
    height: ${header_height*2}px;
    padding: 0;
  }
  
`
export const MyHeaderContent = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "logo burger navigation navigation cart";
  grid-template-columns: 50px 50px 3fr 3fr 1fr;
  grid-gap: 0 20px;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1620px;
  
  @media screen and (max-width: 1024px){
    grid-template-areas: "burger logo cart" "navigation navigation navigation";
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media screen and (max-width: 769px){
    
  }
  
  @media screen and (max-width: 375px) {
    
    
  }
`
export const MyHeaderLogo = styled.div`
  display: flex;
  grid-area: logo;
  height: 50px;
  width: 100%;
  @media screen and (max-width: 1024px){
    justify-content: center;
  }
  @media screen and (max-width: 769px){
    
  }
  @media screen and (max-width: 375px) {
    
  }
  
  .pizza{
    color: tomato;
    font-size: 50px;
    :hover{
      cursor: pointer;
    }
  }
`
export const MyHeaderHamburger = styled.div`
  grid-area: burger;
  height: 100%;
  width: 100%;
  padding: 8px 10px;
  @media screen and (max-width: 1024px){
    padding-left: 35px;
  }
`
export const MyHeaderNav = styled.div`
  grid-area: navigation;
  .navigation{
    padding: 0 200px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1250px){
      padding: 0 120px;
    }
    @media screen and (max-width: 1024px){
      border-top: 1px solid #e6e6e6;
      padding: 0 100px; 
    }
    @media screen and (max-width: 769px){
      padding: 0 40px;
    }
    @media screen and (max-width: 460px) {
      padding: 0;
    }
    @media screen and (max-width: 375px) {
      
    }

    .nav-link{
      height: 100%;
      display: flex;
      justify-content: center;
      a{
        height: 100%;
        padding: 15px;
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
  }
`
export const MyHeaderCart = styled.div`
  grid-area: cart;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  position: relative;
  @media screen and (max-width: 1024px){
    padding-right: 35px;
  }
  
  .cart{
    padding-top: 5px;
    height: 100%;
    color: tomato;
    font-size: 40px;
    :hover{
      cursor: pointer;
    }
  }
  
`

///!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const MyNav = styled.header`

  .desktop-navbar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    height: ${header_height}px;
    width: 100%;
    padding: 0 40px;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255,255,255, 0.9);
    border-bottom: 1px solid #e6e6e6;
  } 
    
  
  span{
    height: 100%;
    font-size: 30px;
    display:flex;
    align-items: center;
    padding: 0 10px;
    
  }
  span:hover{
    cursor: pointer;    
  }
  
  /* ---TOGGLE--- */
  .header-toggle{
    display:flex;
    
    .toggle:hover{
      cursor: pointer;
    }
  }
  .pizza{
    color: tomato;
    font-size: 32px;
    margin-right: 30px;
  }
  
  
  /* ---NAVIGATION--- */
  .header-nav{
    display:flex;   
    height: 100%;

    .nav-link{
      height: 100%;
      display: flex;
      justify-content: center;
      width: calc(100% + 25px);
      a{
        height: 100%;
        padding: 15px;
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
  }
  
  
  /* ---CART--- */
  .header-cart{
    color: tomato;
    height: 100%;
    position: relative;
    :hover{
      cursor: pointer;
    }
    
  }        
  /* ---CART_DROP--- */

  /* ---MOBILE NAV--- */
  .mobile-nav{
    
    .top-nav{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 10;
      display: flex;
      height: ${header_height}px;
      width: 100%;
      padding: 0 40px;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(255,255,255, 0.9);
      border-bottom: 1px solid #e6e6e6;
    }
    .bottom-nav{
      position: fixed;
      top: ${header_height}px;
      left: 0;
      right: 0;
      z-index: 10;
      display: flex;
      height: ${header_height}px;
      width: 100%;
      padding: 0 40px;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(255,255,255, 0.9);
      border-bottom: 1px solid #e6e6e6;
    }
  }

  
  @media screen and (min-width: 769px) {
    
    
    .mobile-nav{
      display: none;
    } 
  } 

  @media screen and (max-width: 769px) {
    
    .pizza{
      margin: 0;
    }
    .desktop-navbar{
      display: none;
      
    } 
  }
  @media screen and (min-width: 375px){
    
  }
  @media screen and (max-width: 375px) {
      
    .mobile-nav{
      .top-nav{
        padding: 0 20px;
      }
      .bottom-nav{
        padding: 0;
        
      }
    }  
  }
`







