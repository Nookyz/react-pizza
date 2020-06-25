export interface Drinks {
  id: number
  title: string
  volume: string
  prize: number
  img: string
}

export interface IDrinksState {
  drinks: Drinks[][] | []
  isReady: boolean
}