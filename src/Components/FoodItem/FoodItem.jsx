import React, { useContext } from 'react'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext'
const FoodItem = ({food}) => {
  const {vnd, addToCart} = useContext(StoreContext)
  
  return (
    <div className='food-item'>
        <img src={food.image} alt={food.name} className="food-image" />
        <h3>{food.name}</h3>
        <p>{vnd(food.price)}</p>
        <button type='button' className='btn-add' onClick={() => addToCart(food)}>Đặc món</button>
    </div>
  )
}

export default FoodItem
