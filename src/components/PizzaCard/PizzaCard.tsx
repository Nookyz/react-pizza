import React, { useState, useEffect } from 'react'
import { 
  MyCard,
  MyCardHeader,
  MyCardHeaderImg,
  MyCardHeaderWeight,
  MyCardDescription,
  MyCardDescriptionTitle,
  MyCardDescriptionToppings,
  MyCardDescriptionSelectorSize,
  MyCardDescriptionSizeButton,
  MyCardFooter,
  MyCardFooterCartButton,
  MyCardFooterAddButton,
  MyCardFooterPrice,
} from './PizzaCard.styled'
import {Pizzas} from '../../redux/types/Pizzas'

interface IPizzaCardProps {
  pizza: Pizzas[]
}

const PizzaCard: React.FC<IPizzaCardProps> = (props) => {

  const {pizza} = props

  useEffect(() => {
    document.title = `Pizza`;
  })
  

  return (
    <MyCard>
      
      <MyCardHeader>
        <MyCardHeaderImg src={'img'} alt="img pizza" />
        <MyCardHeaderWeight>
          {'pizzaGram'} г
        </MyCardHeaderWeight>
      </MyCardHeader>

      <MyCardDescription>

        <MyCardDescriptionTitle>
          <h4>{'title'}</h4>
        </MyCardDescriptionTitle>

        <MyCardDescriptionToppings>
          <span>
            {'toppings'}
          </span>
        </MyCardDescriptionToppings>

        <MyCardDescriptionSelectorSize>
          {/* {sizes.map((item,index) =>(
            <MyCardDescriptionSizeButton 
            key={index} 
            className={addClass(index)} 
            onClick={() => selectSizes(index)}
            >
              {item} 
            </MyCardDescriptionSizeButton>
          ))} */}
        </MyCardDescriptionSelectorSize>

        {/* <MyCardFooter>
          {!addedToCart[countIndex] ?
            <MyCardFooterCartButton onClick={() => addToCardHandler()}>
              В корзину
            </MyCardFooterCartButton>
            :
            <MyCardFooterAddButton>
              <div className='btn-wrap'>
                <div className='quantity-control' onClick={() => updateDecCardHandler()}>-</div>
                <div>{'countPizza'}</div>
                <div className='quantity-control' onClick={() => updateIncCardHandler()}>+</div>
              </div> 
            </MyCardFooterAddButton>
          } 
          <MyCardFooterPrice>  
            <span>{'pizzaPrice'}&ensp;</span>
            <span>грн</span>
          </MyCardFooterPrice>
        </MyCardFooter> */}
        
      </MyCardDescription>
    </MyCard>
  )
}
export default PizzaCard
