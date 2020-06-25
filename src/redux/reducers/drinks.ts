import {IDrinksState} from '../types/Drinks'
import {DrinksAction} from '../types/actions'
import {DrinksActionTypes} from '../types/actions'
import {FiltersActionTypes} from '../types/actions'

const initialState: IDrinksState = {
  drinks: [],
  isReady: false
}

export const drinksReducer = (state = initialState, action: DrinksAction): IDrinksState => {
  switch(action.type){
    case DrinksActionTypes.SET_DRINKS:
      return {
        ...state,
        drinks: action.payload,
        isReady: true
      }
    case FiltersActionTypes.FILTER_BY_LOW_PRICE:
      return {
        ...state,
        drinks: state.drinks.sort((a, b) => a[1].prize - b[1].prize).map(p => p)
      }
    case FiltersActionTypes.FILTER_BY_HIGH_PRICE:
      return {
        ...state,
        drinks: state.drinks.sort((a, b) => b[1].prize - a[1].prize).map(p => p)
      }
    default:
      return state
  }
}