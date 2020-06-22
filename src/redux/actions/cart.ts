import {PizzasCartActionTypes} from '../types/actions'
import {Pizzas} from '../types/Pizzas'

export const addToCart = (pizza: Pizzas) => ({
  type: PizzasCartActionTypes.ADD_TO_CART,
  payload: pizza
})

export const deleteFromCard = (id: number) => ({
  type: PizzasCartActionTypes.DELETE_FROM_CART,
  payload: id
})

export const removeFromCard = (id: number) => ({
  type: PizzasCartActionTypes.REMOVE_FROM_CART,
  payload: id
})