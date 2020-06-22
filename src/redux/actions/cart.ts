import {PizzasCartActionTypes} from '../types/actions'
import {Pizzas} from '../types/Pizzas'

export const addToCart = (pizza: Pizzas) => ({
  type: PizzasCartActionTypes.ADD_TO_CART,
  payload: pizza,
})