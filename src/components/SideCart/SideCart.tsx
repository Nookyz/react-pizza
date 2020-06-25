import React from 'react'
import { Hamburger } from '../Hamburger/Hamburger'
import {Cart} from '../Cart/Cart'
import { 
  MySideCart,
  MySideCartTitle,
  MySideCartOrder,
  MySideCartFooter,
  MySideCartEmpty,
  MySideCartButton

} from './SideCart.styled'
import { useSelector } from 'react-redux'
import {AppState} from '../../redux/configureStore'
import {ICart} from '../../redux/types/Cart'

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
          {items.length ? 
            items.map((item: ICart, index: number)=>{
              return (
                <Cart 
                key={index}
                item={item}
                />
              )
            })
            : 
            <MySideCartEmpty>
              Корзина пустая
            </MySideCartEmpty>
          }
        </MySideCartOrder>

        {
          items.length ?

          <MySideCartFooter>

            <div className='price-result'>
              <p>Сумма заказа:&nbsp;</p>
              <p>{totalPrice}</p>
            </div> 

            <MySideCartButton>
              Заказать
            </MySideCartButton>

          </MySideCartFooter>
        : null
        }
      </MySideCart>
    </div>
  )
}
