import styled from 'styled-components'

export const MyBlackout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background: ${(props: { open: boolean }) => (props.open ? "rgba(0,0,0, .4)" : null)};
`
