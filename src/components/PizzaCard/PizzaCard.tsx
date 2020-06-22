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

  const [pizzaItem, setPizzaItem] = useState(1)
  const [pizzaCard, setPizzaCard] = useState<Pizzas>(pizza[pizzaItem])
  const [inCart, setInCart] = useState([false,false,false])
  
  const addClass = (index: number) => {
    let cls = ['pizza-card__sizes-button']

    if(pizzaItem === index){
      cls.push('active-btn-size')
    }
    
    return cls.join(' ')
  }

  const inCartHandler = () => {
    const newInCart = inCart.map((add, index) => index === pizzaItem ? true : add)
    setInCart(newInCart)
  }

  const addToCartHandler = () => {
    inCartHandler()
  }
  

  useEffect(() => {
    document.title = `Pizza`;
  })

  useEffect(() =>{
    setPizzaCard(pizza[pizzaItem])
  }, [pizzaItem, pizza])
  

  return (
    <MyCard>
      
      <MyCardHeader>
        <MyCardHeaderImg src={pizzaCard.img} alt="img pizza" />
        <MyCardHeaderWeight>
          {pizzaCard.gramm} г
        </MyCardHeaderWeight>
      </MyCardHeader>

      <MyCardDescription>

        <MyCardDescriptionTitle>
          <h4>{pizzaCard.title}</h4>
        </MyCardDescriptionTitle>

        <MyCardDescriptionToppings>
          <span>
            {pizzaCard.toppings.join(', ')}
          </span>
        </MyCardDescriptionToppings>

        <MyCardDescriptionSelectorSize>
          {pizza.map((item,index) =>(
            <MyCardDescriptionSizeButton 
            key={index} 
            className={addClass(index)} 
            onClick={() => setPizzaItem(index)}
            >
              {item.size} 
            </MyCardDescriptionSizeButton>
          ))}
        </MyCardDescriptionSelectorSize>

        <MyCardFooter>
          {inCart[pizzaItem] ?
            <MyCardFooterAddButton>
              <div className='btn-wrap'>
                <div className='quantity-control' >-</div>
                <div>{1}</div>
                <div className='quantity-control' onClick={() => addToCartHandler()}>+</div>
              </div> 
            </MyCardFooterAddButton>
            :
            <MyCardFooterCartButton onClick={() => addToCartHandler()}>
            В корзину
          </MyCardFooterCartButton>
          }
          <MyCardFooterPrice>  
            <span>{pizzaCard.prize}&ensp;</span>
            <span>грн</span>
          </MyCardFooterPrice>
        </MyCardFooter>
        
      </MyCardDescription>
    </MyCard>
  )
}
export default PizzaCard
