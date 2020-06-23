import styled from 'styled-components'
import {main_color} from '../../global/variables'

export const MyCard = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e0e0e0;
  position: relative;
  transition: all .3s ease;
  box-shadow: 0 0 15px rgba(0,0,0,.1);
  background: #fff;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  :hover{
    box-shadow: 0 0 15px rgba(0,0,0,.4);
  }
`

// Header
export const MyCardHeader = styled.div`
  position: relative;
  width: 100%;
`

export const MyCardHeaderImg = styled.img`
  width: 100%;
  height: 170px;
  min-height: 170px;
  border-radius: 10px;
`

export const MyCardHeaderWeight = styled.div`
  background: rgba(0, 0, 0, .3);
  color: #fff;
  padding: 4px;
  border-radius: 5px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
`
export const MyCardHeaderInCart = styled.div`
  background: rgba(0, 0, 0, .3);
  border-radius: 5px;
  padding: 2px;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 20px;
  height: 20px;
  span{
    color: #fff;
    font-size: 16px;
  }
`
// Description

export const MyCardDescription = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
`

export const MyCardDescriptionTitle = styled.div`
  p{
    font-weight: 500;
    font-size: 16px;
  }
`
export const MyCardDescriptionToppings = styled.div`
  height: 42px;
  span{
    font-size: 13px;
  }
`

export const MyCardDescriptionSelectorSize = styled.div`
  margin-top: 15px;
  height: 35px;
  width: 100%;
  display: flex;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 15px;
  background: #f8f8f8;
  
  .active-btn-size{
    background: #E6E7E8;
    color: ${main_color};
    font-size: 15px;
    font-weight: bold;
    border: 1px solid rgba(0,0,0,.08);
  }
`

export const MyCardDescriptionSizeButton = styled.button`
  width: 33.33%;
  background: #f8f8f8;
  color: #c3c3c3;
  margin: 0;
  flex-grow: 1;
  border-radius: 15px;
  border: none;
  transition: background .3s linear;
  outline: none;
  cursor: pointer;

  :hover{     
    color: ${main_color};
  }
`
export const MyCardFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 20px;
  width: 100%;
  height: 45px;
`
export const MyCardFooterCartButton = styled.button`
  border: transparent;
  width: 100%;
  border-radius: 24px;
  background: ${main_color};
  font-size: 18px;
  font-weight: bold;
  transition: all .3s linear;
  outline: none;
  cursor: pointer;
  
  :hover{
    border: 2px solid #c3c3c3;
    background: rgba(255, 99, 71, .7);
  }
`
export const MyCardFooterAddButton = styled.div`
  border-radius: 24px;
  width: 100%;
  background: #f8f8f8;
  border: 1px solid rgba(0,0,0,.08);
  .btn-wrap{
    width: 100%;
    height: 100%;
    padding: 2px;
    text-align: center;
    align-items: center;
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    .quantity-control{
      width: 100%;
      height: 100%;
      padding-top: 4px;
      border: 1px solid rgba(0,0,0,.08);
      border-radius: 50%;
      background: #E6E7E8;
      
      font-size: 24px;
      :hover{
        background: rgba(0,0,0,.2);
        cursor: pointer;
      }
    }
  }
`

export const MyCardFooterPrice = styled.div`
  text-align: right;
  align-self: center;
  color: #000;
  span:first-child{
    font-size: 22px;
  }
  span:last-child{
    font-size: 14px;
  }
`