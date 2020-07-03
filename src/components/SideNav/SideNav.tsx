import React from 'react'
import { Hamburger } from '../Hamburger/Hamburger'
import { NavLink } from 'react-router-dom'
import { 
  MySideMenu,
  MySideMenuTitle,
  MySideMenuNav,
  MySideMenuAbout,
} from './SideNav.styled'

interface ISideNavProps {
  sideNavRef: React.RefObject<HTMLDivElement> | null
  openSideNav: boolean
  setOpenSideNav: (value: boolean) => void
}

export const SideNav: React.FC<ISideNavProps> = (props) => {
  
  const {sideNavRef, openSideNav, setOpenSideNav} = props 

  return (
    <div ref={sideNavRef}>
      <MySideMenu open={openSideNav}>
        <MySideMenuTitle >

          <span className='material-icons pizza'>
            local_pizza
          </span>
        
          <div className='humburger'>
            <Hamburger open={openSideNav} setOpen={setOpenSideNav}/>
          </div>

        </MySideMenuTitle>
        
        <MySideMenuNav>

          <div className='nav-link'>
            <NavLink to='/' exact activeClassName="active">Пицца</NavLink>
          </div>
          <div className='nav-link'>
            <NavLink to='/drinks' activeClassName="active">Напитки</NavLink>
          </div>

        </MySideMenuNav>

        <MySideMenuAbout >
          <a href='https://github.com/Nookyz' target='_blank' rel='noopener noreferrer'>
            Create by Nooky
          </a>
        </MySideMenuAbout>
       
      </MySideMenu>
    </div>
  )
}
