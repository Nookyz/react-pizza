import {DrinksActionTypes} from '../types/actions'
import {Drinks} from '../types/Drinks'

export const setDrinks = (drinks: Drinks[][]) => ({
  type: DrinksActionTypes.SET_DRINKS,
  payload: drinks
})