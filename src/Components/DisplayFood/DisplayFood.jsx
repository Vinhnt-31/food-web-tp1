import React, { useEffect, useState } from "react";
import "./DisplayFood.css";
import { food_list } from "../../assets/assets";
import FoodItem from "../FoodItem/FoodItem";
const DisplayFood = ({ category }) => {
  return (
    <div className="display-food">
      <h2>Menu</h2>
      <div className="food-list">
        {(category === 0 ? food_list : food_list.filter(food => food.cate === category)).map((food, index) => {
          return <FoodItem food={food} key={index} />;
        })}
      </div>
    </div>
  );
};
export default DisplayFood;
