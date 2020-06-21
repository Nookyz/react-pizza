import {Pizzas} from './Pizzas'

export enum PizzasActionTypes {
  SET_PIZZAS = 'SET_PIZZAS'
}

export type SetPizzasAction = {
  type: typeof PizzasActionTypes.SET_PIZZAS
  payload: Pizzas[][] 
}

export type PizzasAction = SetPizzasAction 
