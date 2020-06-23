import styled from 'styled-components'

import {
  header_height, 
  border_color,
  main_color
} from '../../global/variables'

export const MyHeader = styled.div`
  position: fixed;
  height: ${header_height}px;
  z-index: 10;
  width: 100%;
  display: flex;
  padding: 0 40px;
  justify-content: center;
  align-items: center;
  background: #F0F0F0;
  border-bottom: 1px solid ${border_color};
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
    color: ${main_color};
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
        color: ${main_color};
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
    margin-right: 35px;
  }
  
  .cart{
    padding-top: 5px;
    height: 100%;
    color: ${main_color};
    font-size: 40px;
    :hover{
      cursor: pointer;
    }
  }
  .counter-qty{
    position: absolute;
    top: 2px;
    right: 2px;
    border-radius: 50%;
    background: #BCBEC0;
    width: 18px;
    height: 18px;
    text-align: center;
    font-size: 15px;
    text-align: center;
    padding: 2px 0;
  }
`