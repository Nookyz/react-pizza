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
import { useSelector, useDispatch } from 'react-redux'
import {addToCart} from '../../redux/actions/cart'
import {PizzasCart} from '../../redux/types/Cart'
import {AppState} from '../../redux/configureStore'

interface IPizzaCardProps {
  pizza: Pizzas[]
}

const PizzaCard: React.FC<IPizzaCardProps> = (props) => {

  const {pizza} = props

  const [pizzaItem, setPizzaItem] = useState(1)
  const [pizzaCard, setPizzaCard] = useState<Pizzas>(pizza[pizzaItem])
  
  const items = useSelector((state: AppState) => state.cart.items)
  const dispatch = useDispatch()

  const inCartPizzaHandler = () => {
    const pizza = items.find((pizza: PizzasCart) => pizza.id === pizzaCard.id)
    if(pizza){
      return pizza.inCart
    }
    return null
  }

  const quantityPizzaHandler = () => {
    const pizza = items.find((pizza: PizzasCart) => pizza.id === pizzaCard.id)
    if(pizza){
      return pizza.quantity
    }
    return null
  }

  const addToCartHandler = () => {
    dispatch(addToCart(pizzaCard))
  }

  useEffect(() => {
    document.title = `Pizza`;
  })

  useEffect(() =>{
    setPizzaCard(pizza[pizzaItem])
  }, [pizzaItem, pizza])

  const addClass = (index: number) => {
    let cls = ['pizza-card__sizes-button']

    if(pizzaItem === index){
      cls.push('active-btn-size')
    }
    
    return cls.join(' ')
  }
  

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
          {inCartPizzaHandler() ?
            <MyCardFooterAddButton>
              <div className='btn-wrap'>
                <div className='quantity-control' onClick={() => console.log('delete')}>-</div>
                <div>{quantityPizzaHandler()}</div>
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
