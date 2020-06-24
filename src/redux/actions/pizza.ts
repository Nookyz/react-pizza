import {PizzasActionTypes} from '../types/actions'
import {Pizzas} from '../types/Pizzas'

export const setPizzas = (pizzas: Pizzas[][]) => ({
  type: PizzasActionTypes.SET_PIZZAS,
  payload: pizzas
})

export const filterByLowPrice = () => ({
  type: PizzasActionTypes.FILTER_BY_LOW_PRICE
})

export const filterByHighPrice = () => ({
  type: PizzasActionTypes.FILTER_BY_HIGH_PRICE
})