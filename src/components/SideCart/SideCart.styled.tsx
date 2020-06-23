import styled from 'styled-components'
import {
  header_height, 
  border_color,
  main_color
} from '../../global/variables'

export const MySideCart = styled.div`
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  position: fixed;
  z-index: 100;
  background-color: #fff;
  border-left: 1px solid ${border_color};
  transition: transform 0.5s ease-in-out;
  transform: ${(props: { open: boolean }) => (props.open ? "translateX(0)" : "translateX(+100%)")};

  @media screen and (max-width: 769px) {
    
  }
  @media screen and (max-width: 375px) {
    top:0;
    width: 100%;
  }
`
export const MySideCartTitle = styled.div`
  border-bottom: 1px solid ${border_color};
  background-color: #fff;
  height: ${header_height}px;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  .cart-title{
    height: 100%;
    width: 100%;
    font-size: 20px;
    text-align: center;
    align-items: center;
    p{
      padding: 5px 0;
    }
  }
`
export const MySideCartOrder = styled.div`
  width: 100%;
  background: #fff;
  max-height: 740px;
  overflow-y: auto;
  overflow-x: hidden;
  
  ::-webkit-scrollbar { 
    width: 4px; 
  }
  ::-webkit-scrollbar-thumb { 
    height: 50px; 
    background-color: ${main_color}; 
    border-radius: 3px;
  }
`
export const MySideCartFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top: 1px solid ${border_color};
  .price-result{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
    align-items: center;
    p:last-child{
      color: ${main_color};
      font-size: 24px;
      font-weight: 500;
    }
  }
`
export const MySideCartEmpty = styled.p`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: 24px;
`

export const MySideCartButton = styled.button`
  padding: 10px 20px;
  border-radius: 24px;
  font-size: 18px;
  font-weight: 600;
  background: ${main_color};
  outline: none;
  border: 2px solid pink;
  cursor: pointer;
  transition: all .3s linear;

  :hover{
    border: 2px solid #c3c3c3;
    background: rgba(255, 99, 71, .7);
  }
`