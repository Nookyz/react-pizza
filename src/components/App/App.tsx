import React, {useState, useRef, useEffect} from 'react'
import { Switch, Route } from 'react-router-dom'
import {useClose} from '../../hooks/close.hook'
import {GlobalStyle} from '../../global/GlobalStyle.styled'
import {Navbar} from '../Navbar/Navbar'
import { SideNav } from '../SideNav/SideNav'
import { SideCart } from '../SideCart/SideCart'
import Pizza from '../../pages/Pizza/Pizza'
import { useDispatch } from 'react-redux'
import data from '../../data'
import {setPizzas} from '../../redux/actions/pizza'

const App: React.FC = (props: any) => {

  const [openSideNav, setOpenSideNav] = useState<boolean>(false)
  const [openSideCart, setOpenSideCart] = useState<boolean>(false)

  const sideNavRef = useRef<HTMLDivElement>(null)
  const sideCartRef = useRef<HTMLDivElement>(null)

  useClose(sideNavRef, () => setOpenSideNav(false))
  useClose(sideCartRef, () => setOpenSideCart(false))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPizzas(data))
  }, [dispatch])

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

      <Switch>
        <Route path='/' exact component={Pizza}/>
      </Switch>
      
    </React.Fragment>
  )
}

export default App
