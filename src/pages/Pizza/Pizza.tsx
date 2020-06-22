import React from 'react'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import { 
  MyPizza,
  MyPizzaTitle
} from './Pizza.styled'
import {useSelector} from 'react-redux'
import {Pizzas} from '../../redux/types/Pizzas'
import {AppState} from '../../redux/configureStore'

const Pizza: React.FC<any> = (props) => {
  
  const isReady = useSelector((state: AppState) => state.pizza.isReady)
  const pizzas = useSelector((state: any) => state.pizza.pizzas)

  return (
    <div className='container'>
      <MyPizzaTitle>
        <h1>Pizza</h1>
        <h2>Ready: {isReady ? 'true' : 'false'}</h2>
      </MyPizzaTitle>
      
      <MyPizza>
        {isReady ? 
          pizzas.map((pizza: Pizzas[], index: number) => {
            return (
              <PizzaCard 
              key={index}
              pizza={pizza}
              />
            )
          })
        : null
        }
      </MyPizza>
      
    </div>
  )
}
export default Pizza
