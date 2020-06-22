import {Pizzas} from './Pizzas'

// Pizzas
export enum PizzasActionTypes {
  SET_PIZZAS = 'SET_PIZZAS'
}

export type SetPizzasAction = {
  type: typeof PizzasActionTypes.SET_PIZZAS
  payload: Pizzas[][] 
}

export type PizzasAction = SetPizzasAction

// Cart
export enum PizzasCartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART'
}

export type AddToCart = {
  type: typeof PizzasCartActionTypes.ADD_TO_CART
  payload: Pizzas
}

export type PizzasCartAction = AddToCart