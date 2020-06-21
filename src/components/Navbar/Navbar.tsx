import React from 'react'
import { 
  MyHeader, 
  MyHeaderContent, 
  MyHeaderLogo,
  MyHeaderHamburger,
  MyHeaderNav,
  MyHeaderCart
} from './Navbar.styled'
import { Hamburger } from '../Hamburger/Hamburger'
import { NavLink } from 'react-router-dom'

interface INavbarProps {
  openSideNav: boolean
  openSideCart: boolean
  setOpenSideNav: (value: boolean) => void
  setOpenSideCart: (value: boolean) => void
}

export const Navbar: React.FC<INavbarProps> = (props) => {
  
  const {openSideNav, setOpenSideNav, openSideCart, setOpenSideCart} = props

  return (
    <React.Fragment>
      <MyHeader>
        <MyHeaderContent>

          <MyHeaderLogo>
            <span className='material-icons pizza'>
              local_pizza
            </span>
          </MyHeaderLogo>

          <MyHeaderHamburger>
            <Hamburger open={openSideNav} setOpen={setOpenSideNav} />
          </MyHeaderHamburger>

          <MyHeaderNav>
            <div className='navigation'>

              <div className='nav-link'>
                <NavLink to='/stocks'  activeClassName="active">Акции</NavLink>
              </div>
              <div className='nav-link'>
                <NavLink to='/' exact activeClassName="active">Пицца</NavLink>
              </div>
              <div className='nav-link'>
                <NavLink to='/drinks' activeClassName="active">Напитки</NavLink>
              </div>
              <div className='nav-link'>
                <NavLink to='/about' activeClassName="active">About</NavLink>
              </div>

            </div>
            
          </MyHeaderNav>

          <MyHeaderCart onClick={() => setOpenSideCart(!openSideCart)}>
            <span className="material-icons cart">
              shopping_cart
            </span>
            {0}
          </MyHeaderCart>

        </MyHeaderContent>
      </MyHeader>
    </React.Fragment>
  )
}