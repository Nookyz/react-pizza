import { combineReducers, createStore } from "redux"
import { pizzasReducer } from './reducers/pizzas'
import { cartReducer } from './reducers/cart'
import { drinksReducer } from './reducers/drinks'

export const rootReducer = combineReducers({
  pizza: pizzasReducer,
  drink: drinksReducer,
  cart: cartReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)