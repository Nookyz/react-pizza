import React from 'react'
import { StyledHamburger } from './Hamburger.styled'

interface IHamburgerProps {
  open: boolean
  setOpen: (value: boolean) => void
}

export const Hamburger: React.FC<IHamburgerProps> = (props) => {
  const {open, setOpen} = props

  
  return (
    <StyledHamburger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledHamburger>
  )
}
