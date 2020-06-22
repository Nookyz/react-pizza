import {PizzasCartActionTypes, PizzasCartAction} from '../types/actions'
import {PizzasCart, IPizzasCartState} from '../types/Cart'

const initialState: IPizzasCartState = {
  items: []
}

export const cartReducer = (state = initialState, action: PizzasCartAction): IPizzasCartState => {

  switch(action.type){
    case PizzasCartActionTypes.ADD_TO_CART:
      const existPizza = state.items.find((item: PizzasCart) => action.payload.id === item.id)

      if(existPizza){
        return {
          ...state,
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
        items: [...state.items, newPizza],   
      }
    default:
      return state
  }
}