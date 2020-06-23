import {PizzasCartActionTypes, PizzasCartAction} from '../types/actions'
import {PizzasCart, IPizzasCartState} from '../types/Cart'

const initialState: IPizzasCartState = {
  items: [],
  quantity: 0,
  totalPrice: 0
}

export const cartReducer = (state = initialState, action: PizzasCartAction): IPizzasCartState => {

  switch(action.type){
    case PizzasCartActionTypes.ADD_TO_CART:
      const existPizza = state.items.find((item: PizzasCart) => action.payload.id === item.id)

      if(existPizza){
        return {
          ...state,
          quantity: state.quantity + 1,
          totalPrice: state.totalPrice + existPizza.prize,
          items: state.items.map((item: PizzasCart) => {
            if(item.id === action.payload.id){
              item.quantity = item.quantity + 1
              item.totalPrice = item.prize * item.quantity
            }
            return item
          })
        }
      }
      const newPizza = {
        ...action.payload,
        totalPrice: action.payload.prize,
        quantity: 1,
        inCart: true
      }
      
      return {
        ...state,
        quantity: state.quantity + 1,
        totalPrice: state.totalPrice + action.payload.prize,                            
        items: [...state.items, newPizza],   
      }
    case PizzasCartActionTypes.DELETE_FROM_CART:
      const deletedPizza = state.items.find((item) => item.id === action.payload)
      
      return {
        ...state,
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice - deletedPizza!.prize, // 1!!
        items: state.items.map((item: PizzasCart) => {
          if(item.id === action.payload){
            item.quantity = item.quantity - 1
            item.totalPrice = item.prize * item.quantity
          }
          return item
        })
      }
    case PizzasCartActionTypes.REMOVE_FROM_CART:
      const removedPizza = state.items.find((item) => item.id === action.payload)

      return {
        ...state,
        quantity: state.quantity - removedPizza!.quantity,
        totalPrice: state.totalPrice - removedPizza!.totalPrice,
        items: state.items.filter(item => item.id !== action.payload),
      }
    default:
      return state
  }
}