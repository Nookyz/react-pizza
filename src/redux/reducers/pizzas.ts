import {PizzasActionTypes, PizzasAction} from '../types/actions'
import {IPizzaState} from '../types/Pizzas'

const initialState: IPizzaState = {
  pizzas: null,
  isReady: false,
}

export const pizzasReducer = (state = initialState, action: PizzasAction): IPizzaState => {

  switch(action.type){
    case PizzasActionTypes.SET_PIZZAS:
      return {
        ...state,
        pizzas: action.payload,
        isReady: true
      }
    
    default:
      return state
  }
}