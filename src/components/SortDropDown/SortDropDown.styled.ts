import styled from 'styled-components'

export const MyDropDown = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 250px;
  @media screen and (max-width: 600px){
    width: 200px;
  }
`
export const MySortDropDown = styled.button`
  
  height: 35px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 15px;
  background: ${(props: {disabled: boolean}) => (props.disabled ? '#f3f3f3': '#fff')};
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 25px;
  outline: none;
  :hover{
    border: 1px solid rgba(0, 0, 0, 0.6);
    cursor: pointer;
    .sort{
      color: rgba(0, 0, 0, 0.8);
    }
  }
  .text{
    font-weight: 400;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
  }
  .sort{
    color: rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 600px){
    width: 140px;
  }
`

export const MyPopup = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  margin-top: 38px;
  padding: 10px 0;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  
  .popup-item{
    padding: 10px 20px;
    text-align: center;
    span{
      font-size: 15px;
      font-weight: 400;
    }
  }
  .popup-item:hover{
    background: rgba(0,0,0,0.1);
    cursor: pointer;
  }
`