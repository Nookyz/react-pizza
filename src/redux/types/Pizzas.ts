export interface Pizzas {
  id: number
  title: string
  toppings: string[]
  size: number
  gramm: number
  prize: number
  img: string
}

export interface IPizzaState {
  readonly pizzas: Pizzas[][] | []
  readonly isReady: boolean
}