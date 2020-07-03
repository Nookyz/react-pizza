import {Pizzas} from './Pizzas'
import {Drinks} from './Drinks'

// Filters

export enum FiltersActionTypes {
  FILTER_BY_LOW_PRICE = 'FILTER_BY_LOW_PRICE',
  FILTER_BY_HIGH_PRICE = 'FILTER_BY_HIGH_PRICE'
}

export type FilterByLowPrice = {
  type: typeof FiltersActionTypes.FILTER_BY_LOW_PRICE
}

export type FilterByHighPrice = {
  type: typeof FiltersActionTypes.FILTER_BY_HIGH_PRICE
}

export type FiltersAction = FilterByLowPrice | FilterByHighPrice

// Pizzas
export enum PizzasActionTypes {
  SET_PIZZAS = 'SET_PIZZAS',
}

export type SetPizzasAction = {
  type: typeof PizzasActionTypes.SET_PIZZAS
  payload: Pizzas[][] 
}

export type PizzasAction = SetPizzasAction | FiltersAction

// Drinks

export enum DrinksActionTypes {
  SET_DRINKS = 'SET_PIZZAS',
}

export type SetDrinksAction = {
  type: typeof DrinksActionTypes.SET_DRINKS
  payload: Drinks[][] 
}

export type DrinksAction = SetDrinksAction | FiltersAction

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
  payload: string
}

export type RemoveFromCart = {
  type: typeof PizzasCartActionTypes.REMOVE_FROM_CART
  payload: string
}

export type PizzasCartAction = AddToCart | DeleteFromCard | RemoveFromCart