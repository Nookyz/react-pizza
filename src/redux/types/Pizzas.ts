export interface Pizzas {
  id: string
  title: string
  toppings: string[]
  size: number
  gramm: number
  prize: number
  img: string
}

export interface IPizzaState {
  pizzas: Pizzas[][] | []
  isReady: boolean
}