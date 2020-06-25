import React, {useEffect} from 'react'
import {Card} from '../../components/Card/Card'
import { MyFrame } from '../../global/FramePage.styled'
import {useSelector} from 'react-redux'
import {Pizzas} from '../../redux/types/Pizzas'
import {AppState} from '../../redux/configureStore'
import {useDispatch} from 'react-redux'
import {setPizzas} from '../../redux/actions/pizza'
import {pizzasData} from '../../data'
import { Toolbar } from '../../components/Toolbar/Toolbar'


const Pizza: React.FC<any> = (props) => {
  
  const isReady = useSelector((state: AppState) => state.pizza.isReady)
  const pizzas = useSelector((state: any) => state.pizza.pizzas)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPizzas(pizzasData))
  }, [dispatch])
  return (
    <div className='container'>
      
      <Toolbar/>
      
      <MyFrame>
        {isReady ? 
          pizzas.map((pizza: Pizzas[], index: number) => {
            return (
              <Card 
              key={index}
              itemsCard={pizza}
              />
            )
          })
        : null
        }
      </MyFrame>
      
    </div>
  )
}
export default Pizza
