import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {MyFrame} from '../../global/FramePage.styled'
import {setDrinks} from '../../redux/actions/drinks'
import {drinksData} from '../../data'
import { Toolbar } from '../../components/Toolbar/Toolbar'
import {AppState} from '../../redux/configureStore'
import {Card} from '../../components/Card/Card'

interface IDrinksProps {
  
}

export const Drinks: React.FC<IDrinksProps> = () => {

  const drinks = useSelector((state: any) => state.drink.drinks)
  const isReady = useSelector((state: AppState) => state.drink.isReady)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setDrinks(drinksData))
  }, [dispatch])

  return (
    <div className='container'>
      
      <Toolbar/>
      
      {isReady ?
        <MyFrame>
          {drinks.map((drink: any, index: number) => {
            return (
            <Card 
              key={index}
              itemsCard={drink}
            />
            )
          })}
        </MyFrame>
      : null
      }
      
      
    </div>
  )
}
