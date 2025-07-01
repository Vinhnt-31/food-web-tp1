import React from 'react'
import './ServiceMenu.css'
import { category_list } from '../../assets/assets'
const ServiceMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1></h1>
      <div className='explore-menu-list'>
          {category_list.map((item, index) => {
            return(
              <div onClick={() => setCategory(prev=>prev===item._id?0:item._id)} key={index} className='explore-menu-list-item'>
                  <img className={category===item._id?'active':''} src={item.image} alt="" />
                  <p>{item.name}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ServiceMenu
