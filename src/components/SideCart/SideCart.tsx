import React from 'react'
import { Hamburger } from '../Hamburger/Hamburger'
import {Cart} from '../Cart/Cart'
import { 
  MySideCart,
  MySideCartTitle,
  MySideCartOrder,
  MySideCartPrice

} from './SideCart.styled'
import { useSelector } from 'react-redux'
import {AppState} from '../../redux/configureStore'
import {PizzasCart} from '../../redux/types/Cart'

interface ISideCartProps {
  sideCartRef: React.RefObject<HTMLDivElement> | null
  openSideCart: boolean
  setOpenSideCart: (value: boolean) => void
}

export const SideCart: React.FC<ISideCartProps> = (props) => {
  const {
    sideCartRef,
    openSideCart, 
    setOpenSideCart,
  } = props

  const items = useSelector((state: AppState) => state.cart.items)
  const totalPrice = useSelector((state: AppState) => state.cart.totalPrice)

  return (
    <div ref={sideCartRef}>
      <MySideCart open={openSideCart}>

        <MySideCartTitle >

          <div className='humburger'>
            <Hamburger open={openSideCart} setOpen={setOpenSideCart}/>
          </div>

          <div className='cart-title'>
            <p>Корзина</p>
          </div>

        </MySideCartTitle>
        

        <MySideCartOrder>
          {items.length === 0 ? <h1>Корзина пустая</h1> :
            items.map((item: PizzasCart, index: number)=>{
              return (
                <Cart 
                key={index}
                item={item}
                />
              )
            })
          }
        </MySideCartOrder>

        <MySideCartPrice>

          <div className='price-result'>
            <p>{totalPrice}</p>
          </div> 

          <button>Оформить</button>

        </MySideCartPrice>
        
      </MySideCart>
    </div>
  )
}
