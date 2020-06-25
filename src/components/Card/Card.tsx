import React, { useState, useEffect } from 'react'
import { 
  MyCard,
  MyCardHeader,
  MyCardHeaderImg,
  MyCardHeaderWeight,
  MyCardHeaderInCart,
  MyCardDescription,
  MyCardDescriptionTitle,
  MyCardDescriptionToppings,
  MyCardDescriptionSelectorSize,
  MyCardDescriptionSizeButton,
  MyCardFooter,
  MyCardFooterCartButton,
  MyCardFooterAddButton,
  MyCardFooterPrice,
} from './Card.styled'
// import {Pizzas} from '../../redux/types/Pizzas'
// import {Drinks} from '../../redux/types/Drinks'
import { useSelector, useDispatch } from 'react-redux'
import {addToCart, deleteFromCard, removeFromCard} from '../../redux/actions/cart'
import {ICart} from '../../redux/types/Cart'
import {AppState} from '../../redux/configureStore'
import { useHistory } from 'react-router-dom'

interface ICardProps {
  //itemsCard: Pizzas[] | Drinks[]
  itemsCard: any
}

export const Card: React.FC<ICardProps> = (props) => {

  const {itemsCard} = props

  const [cardIndex, setCardIndex] = useState(1)
  const [cardItem, setCardItem] = useState<any>(itemsCard[cardIndex])
  
  const items = useSelector((state: AppState) => state.cart.items)
  const dispatch = useDispatch()

  const history = useHistory()

  const inCartPizzaHandler = (): boolean | null => {
    const pizza = items.find((pizza: ICart) => pizza.id === cardItem.id)
    if(pizza){
      return pizza.inCart
    }
    return null
  }

  const quantityPizzaHandler = (): number | null  => {
    const pizza = items.find((pizza: ICart) => pizza.id === cardItem.id)
    if(pizza){
      return pizza.quantity
    }
    return null
  }

  const addToCartHandler = () => {
    dispatch(addToCart(cardItem))
  }
  
  const deleteFromCartHandler = () => {
    if(quantityPizzaHandler() === 1){
      dispatch(removeFromCard(cardItem.id))
    }else{
      dispatch(deleteFromCard(cardItem.id))
    }
  }

  useEffect(() => {
    document.title = `Pizza`;
  })

  useEffect(() =>{
    setCardItem(itemsCard[cardIndex])
  }, [cardIndex, itemsCard])

  const addClass = (index: number) => {
    let cls = ['pizza-card__sizes-button']

    if(cardIndex === index){
      cls.push('active-btn-size')
    }
    
    return cls.join(' ')
  }
  
  return (
    <MyCard>
      
      <MyCardHeader>

        <MyCardHeaderImg src={cardItem.img} alt="img pizza" />
        {history.location.pathname === '/' ?
          <MyCardHeaderWeight>
            {`${cardItem!.gramm} г`}
          </MyCardHeaderWeight>
        : null
        }
        

        {
          inCartPizzaHandler() &&
          <MyCardHeaderInCart>
            <span className="material-icons cart">
              shopping_cart
            </span>
          </MyCardHeaderInCart>
        }
        
      </MyCardHeader>

      <MyCardDescription>

        <MyCardDescriptionTitle>
          <p>{cardItem.title}</p>
        </MyCardDescriptionTitle>

        {cardItem.toppings &&
        <MyCardDescriptionToppings>
          <span>
            {cardItem.toppings.join(', ')}
          </span>
        </MyCardDescriptionToppings>
        }

        <MyCardDescriptionSelectorSize>
          {history.location.pathname === '/' ?
            itemsCard.map((item: any, index: number) =>(
              <MyCardDescriptionSizeButton 
              key={index} 
              className={addClass(index)} 
              onClick={() => setCardIndex(index)}
              >
                {item.size} {cardIndex === index ? 'см' : null}
              </MyCardDescriptionSizeButton>
            ))
          : 
            itemsCard.map((item: any, index: number) =>(
              <MyCardDescriptionSizeButton 
              key={index} 
              className={addClass(index)} 
              onClick={() => setCardIndex(index)}
              >
                {item.volume} 
              </MyCardDescriptionSizeButton>
            ))
        }
        </MyCardDescriptionSelectorSize>

        <MyCardFooter>
          {inCartPizzaHandler() ?
            <MyCardFooterAddButton>
              <div className='btn-wrap'>
                <div className='quantity-control' onClick={() => deleteFromCartHandler()}>-</div>
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
            <span>{cardItem.prize}&ensp;</span>
            <span>грн</span>
          </MyCardFooterPrice>
        </MyCardFooter>
        
      </MyCardDescription>
    </MyCard>
  )
}

