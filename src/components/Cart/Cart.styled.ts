import styled from 'styled-components'

export const MyCart = styled.div`
  width: 100%;
  min-height: 130px;
  padding: 10px;
  color: #828282;
  transition: all 0.3s ease-in;
  border-bottom: 1px solid #e6e6e6;
  :hover{
    background: rgba(0, 0, 0, .1);
  }
`
export const MyCartTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
`
export const MyCartDelete = styled.button`
  height: 30px;
  width: 30px;
  border: 1px solid #e6e6e6;
  border-radius: 100px;
  span{
    padding-top: 2px;
  }
  :hover{
    span{
      color: tomato;
    }
  }
`

export const MyCartDescription = styled.div`
  font-size: 12px;
  margin: 8px 0;
  p{
    margin-bottom: 10px;
  }
  span{
    font-weight: 800;
    
  }
`
export const MyCartFooter = styled.div`
  display: flex;justify-content: space-between;
  justify-content: space-between;
  .btn-wrap{
    
    height: 100%;
    padding: 2px;
    text-align: center;
    align-items: center;
    display: grid;
    grid-template-columns: 30px 25px 30px;
    .quantity-control{
      width: 100%;
      height: 100%;
      border: 1px solid rgba(0,0,0,.08);
      border-radius: 100px;
      background: #E6E7E8;
      outline: none;
      font-size: 24px;
      :hover{
        background: rgba(0,0,0,.2);
        cursor: pointer;
        color: tomato;
      }
      
    }
  }
`