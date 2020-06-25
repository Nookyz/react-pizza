import {FiltersActionTypes} from '../types/actions'

export const filterByLowPrice = () => ({
  type: FiltersActionTypes.FILTER_BY_LOW_PRICE
})

export const filterByHighPrice = () => ({
  type: FiltersActionTypes.FILTER_BY_HIGH_PRICE
})