export interface Drinks {
  id: string
  title: string
  volume: string
  prize: number
  img: string
}

export interface IDrinksState {
  drinks: Drinks[][] | []
  isReady: boolean
}