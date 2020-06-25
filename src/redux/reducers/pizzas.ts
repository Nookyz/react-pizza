import {PizzasActionTypes, PizzasAction, FiltersActionTypes} from '../types/actions'
import {IPizzaState} from '../types/Pizzas'

const initialState: IPizzaState = {
  pizzas: [],
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
    case FiltersActionTypes.FILTER_BY_LOW_PRICE:
      return {
        ...state,
        pizzas: state.pizzas.sort((a, b) => a[1].prize - b[1].prize).map(p => p)
      }
    case FiltersActionTypes.FILTER_BY_HIGH_PRICE:
      return {
        ...state,
        pizzas: state.pizzas.sort((a, b) => b[1].prize - a[1].prize).map(p => p)
      }
    
    default:
      return state
  }
}