import { combineReducers, createStore } from "redux"
import { pizzasReducer } from './reducers/pizzas'
import { cartReducer } from './reducers/cart'

export const rootReducer = combineReducers({
  pizza: pizzasReducer,
  cart: cartReducer
})

export type AppState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)