import React from 'react'
import { MyCardFooterPrice } from '../PizzaCard/PizzaCard.styled'
import {
  MyCart,
  MyCartTitle,
  MyCartDelete,
  MyCartDescription,
  MyCartFooter
} from './Cart.styled'
import {PizzasCart} from '../../redux/types/Cart'
import { useDispatch } from 'react-redux'
import {addToCart, removeFromCard, deleteFromCard} from '../../redux/actions/cart'

interface ICartProps {
  item: PizzasCart
}
export const Cart: React.FC<ICartProps> = (props) => {
  const {item} = props

  const dispatch = useDispatch()
  
  const addToCartHandler = () => {
    dispatch(addToCart(item))
  }
  
  const deleteFromCartHandler = () => {
    if(item.quantity === 1){
      dispatch(removeFromCard(item.id))
    }else{
      dispatch(deleteFromCard(item.id))
    }
  }
  
  return (
    <MyCart>

      <MyCartTitle>
        <p>{item.title}</p>
        <MyCartDelete onClick={() => dispatch(removeFromCard(item.id))}>
          <span className="material-icons">
            clear
          </span>
        </MyCartDelete>
      </MyCartTitle>

      <MyCartDescription>
        <p>{item.toppings.join(', ')}</p>
        <span>{item.size}&ensp;см</span>
      </MyCartDescription>

      <MyCartFooter>
        <MyCardFooterPrice>
          <span>{item.totalPrice}&ensp;</span>
          <span>грн</span>
        </MyCardFooterPrice>
        
        <div className='btn-wrap'>
          <button className='quantity-control' onClick={() => deleteFromCartHandler()}>-</button>
          <div>{item.quantity}</div>
          <button className='quantity-control' onClick={() => addToCartHandler()}>+</button>
        </div>
      </MyCartFooter>


    </MyCart>
  )
}
