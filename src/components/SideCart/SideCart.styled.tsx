import styled from 'styled-components'
import {header_height} from '../../global/variables'

export const MySideCart = styled.div`
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  position: fixed;
  z-index: 100;
  background-color: #fff;
  border-left: 1px solid #e6e6e6;
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
  border-bottom: 1px solid #e6e6e6;
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
  border-bottom: 1px solid #e6e6e6;
`

export const MySideCartPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  .price-result{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
  }
`
