import {PizzasActionTypes} from '../types/actions'
import {Pizzas} from '../types/Pizzas'

export const setPizzas = (pizzas: Pizzas[][]) => ({
  type: PizzasActionTypes.SET_PIZZAS,
  payload: pizzas
})