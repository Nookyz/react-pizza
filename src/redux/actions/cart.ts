import {PizzasCartActionTypes} from '../types/actions'
import {Pizzas} from '../types/Pizzas'
import {Drinks} from '../types/Drinks'

export const addToCart = (item: Pizzas | Drinks) => ({
  type: PizzasCartActionTypes.ADD_TO_CART,
  payload: item
})

export const deleteFromCard = (id: string) => ({
  type: PizzasCartActionTypes.DELETE_FROM_CART,
  payload: id
})

export const removeFromCard = (id: string) => ({
  type: PizzasCartActionTypes.REMOVE_FROM_CART,
  payload: id
})