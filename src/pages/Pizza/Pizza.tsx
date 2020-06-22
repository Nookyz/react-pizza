import React, { useEffect } from 'react'
import PizzaCard from '../../components/PizzaCard/PizzaCard'
import { 
  MyPizza,
  MyPizzaTitle
} from './Pizza.styled'
import {useDispatch, useSelector} from 'react-redux'
import {setPizzas} from '../../redux/actions/pizza'
import data from '../../data'
import {Pizzas} from '../../redux/types/Pizzas'

const Pizza: React.FC<any> = (props) => {
  
  const dispatch = useDispatch()
  
  const isReady = useSelector((state: any) => state.pizza.isReady)
  const pizzas = useSelector((state: any) => state.pizza.pizzas)

  useEffect(()=>{
    dispatch(setPizzas(data))
  }, [dispatch])

  console.log(pizzas)


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
