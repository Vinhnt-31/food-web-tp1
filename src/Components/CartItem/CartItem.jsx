import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./CartItem.css";
import { assets } from "../../assets/assets";
const CartItem = ({food_list}) => {
  const { cart, addToCart, removeToCart,deleteCart, vnd } = useContext(StoreContext);
  return (
    <>
      {cart.map((item, index) => {
        const food = food_list.find((foodItem) => foodItem._id === item._id);
        return (
          <tr key={index}>
            <td>
              <img className="img-food" src={food.image} />
            </td>
            <td>{food.name}</td>
            <td><input type="text" value={item.quantity}/></td>
            <td><input type="text" value={vnd(item.price)}/></td>
            <td>
              <div className="action">
                <img
                  className="icon-action"
                  onClick={() => addToCart(food)}
                  src={assets.plus}
                  alt="plus"
                />
                <img className="icon-action" src={assets.minus} onClick={() => removeToCart(food)} alt="minus" />
                <img className="icon-action" src={assets.remove} onClick={() => deleteCart(food)}  alt="remove" />
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CartItem;
