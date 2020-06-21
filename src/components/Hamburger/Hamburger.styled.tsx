import styled from "styled-components"

export const StyledHamburger = styled.button`

  
  

  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border: none;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 1024px) {
    
  }
  
  @media screen and (max-width: 768px) {
    
    
  }
  @media screen and (max-width: 375px) {
    
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.2s linear;
    transform-origin: 1px;
    background-color: tomato;

    :first-child {
      transform: ${(props: { open: boolean }) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${(props: { open: boolean }) => (props.open ? "0" : "1")};
      transform: ${(props: { open: boolean }) => (props.open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${(props: { open: boolean }) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }

    
  }
`;