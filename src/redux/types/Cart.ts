export interface ICart {
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
  volume?: string 
}

export interface ICartState {
  readonly items: ICart[]
  readonly quantity: number
  readonly totalPrice: number
}