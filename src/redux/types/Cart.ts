export interface PizzasCart {
  id: number
  title: string
  toppings: string[]
  size: number
  gramm: number
  prize: number
  img: string
  quantity: number
  totalPrice: number
  inCart: boolean
}

export interface IPizzasCartState {
  readonly items: PizzasCart[]
}