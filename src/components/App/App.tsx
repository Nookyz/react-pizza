import React, {useState, useRef} from 'react'
import {Switch, Route} from 'react-router-dom'
import {useClose} from '../../hooks/close.hook'
import {GlobalStyle} from '../../global/GlobalStyle.styled'
import {MyBlackout} from '../../global/MyBlackout.styled'
import Pizza from '../../pages/Pizza/Pizza'
import {Navbar} from '../Navbar/Navbar'
import {SideNav} from '../SideNav/SideNav'
import {SideCart} from '../SideCart/SideCart'
import { Drinks } from '../../pages/Drinks/Drinks'

const App: React.FC = (props: any) => {

  const [openSideNav, setOpenSideNav] = useState<boolean>(false)
  const [openSideCart, setOpenSideCart] = useState<boolean>(false)

  const sideNavRef = useRef<HTMLDivElement>(null)
  const sideCartRef = useRef<HTMLDivElement>(null)

  useClose(sideNavRef, () => setOpenSideNav(false))
  useClose(sideCartRef, () => setOpenSideCart(false))

  return (
    <React.Fragment>
      <GlobalStyle/>

      <Navbar
      openSideNav={openSideNav} 
      setOpenSideNav={setOpenSideNav}
      openSideCart={openSideCart}
      setOpenSideCart={setOpenSideCart}
      />
      <SideNav
      sideNavRef={sideNavRef}
      openSideNav={openSideNav}
      setOpenSideNav={setOpenSideNav}
      />
      <SideCart
      sideCartRef={sideCartRef}
      openSideCart={openSideCart}
      setOpenSideCart={setOpenSideCart}
      />

      {openSideNav || openSideCart ?
        <MyBlackout open={true}/> : null
      }

      <Switch>
        <Route path='/' exact component={Pizza}/>
        <Route path='/drinks' component={Drinks}/>
      </Switch>
      
    </React.Fragment>
  )
}

export default App
