import React from 'react'
import { Hamburger } from '../Hamburger/Hamburger'
//import {Cart} from '../Cart/Cart'
import { 
  MySideCart,
  MySideCartTitle,
  //MySideCartOrder,
  MySideCartPrice

} from './SideCart.styled'

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
        {/* {items.length === 0 ? <h1>Корзина пустая</h1> :
          items.map((item, index)=>{
            return (
              <Cart 
              key={index}
              item={item}
              removeFromCart={removeFromCart}
              addCountCart={addCountCart}
              deleteCountCart={deleteCountCart}
              updateCart={updateCart}
              />)
          })
        } */}

        {/* <MySideCartOrder>
          
        </MySideCartOrder> */}

        <MySideCartPrice>

          <div className='price-result'>
            <p>{0}</p>
          </div> 

          <button>Оформить</button>

        </MySideCartPrice>
        
      </MySideCart>
    </div>
  )
}
