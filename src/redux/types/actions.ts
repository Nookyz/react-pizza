import {Pizzas} from './Pizzas'

// Pizzas
export enum PizzasActionTypes {
  SET_PIZZAS = 'SET_PIZZAS',
  FILTER_BY_LOW_PRICE = 'FILTER_BY_LOW_PRICE',
  FILTER_BY_HIGH_PRICE = 'FILTER_BY_HIGH_PRICE'
}

export type SetPizzasAction = {
  type: typeof PizzasActionTypes.SET_PIZZAS
  payload: Pizzas[][] 
}

export type FilterByLowPrice = {
  type: typeof PizzasActionTypes.FILTER_BY_LOW_PRICE
}

export type FilterByHighPrice = {
  type: typeof PizzasActionTypes.FILTER_BY_HIGH_PRICE
}

export type PizzasAction = SetPizzasAction | FilterByLowPrice | FilterByHighPrice

// Cart
export enum PizzasCartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  DELETE_FROM_CART = 'DELETE_FROM_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}

export type AddToCart = {
  type: typeof PizzasCartActionTypes.ADD_TO_CART
  payload: Pizzas
}

export type DeleteFromCard = {
  type: typeof PizzasCartActionTypes.DELETE_FROM_CART
  payload: number
}

export type RemoveFromCart = {
  type: typeof PizzasCartActionTypes.REMOVE_FROM_CART
  payload: number
}

export type PizzasCartAction = AddToCart | DeleteFromCard | RemoveFromCart