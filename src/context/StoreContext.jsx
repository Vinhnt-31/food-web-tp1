import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreConTextProvider = (props) => {
  const url = "http://localhost:4000";
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState("");
  const [cart, setCart] = useState([]);
  const vnd = (price) => {
    return price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  };

  const addToCart = (food) => {
    const indexCart = cart.findIndex((item) => item._id === food._id);

    if (cart.length > 0 && indexCart >= 0) {
      console.log(food.price * (cart[indexCart].quantity + 1));
      
      cart[indexCart] = {
        _id: food._id,
        price: food.price * (cart[indexCart].quantity + 1),
        quantity: cart[indexCart].quantity + 1,
      };
      setCart([...cart]);
    } else {
      const newItem = { _id: food._id, price: food.price, quantity: 1 };
      setCart((prev) => {
        return [...prev, newItem];
      });
    }
    localStorage.setItem("cart", cart);
  };
  const removeToCart = (food) => {
    const indexCart = cart.findIndex((item) => item._id === food._id);

    if (cart.length > 0 && indexCart >= 0) {
      cart[indexCart] = {
        _id: food._id,
        price: food.price * (cart[indexCart].quantity - 1),
        quantity: cart[indexCart].quantity - 1,
      };
      setCart([...cart]);
    }
    if (cart[indexCart].quantity <= 0) {
      cart.splice(indexCart, 1);
      setCart([...cart]);
    }
    localStorage.setItem("cart", cart);
  };
  const deleteCart = (food) => {
    const indexCart = cart.findIndex((item) => item._id === food._id);
    cart.splice(indexCart, 1);
    setCart([...cart]);
  };
  const getTotalCartAmount = () => {
    const listPrice = cart.map((item) => item.price * item.quantity);
    const total = listPrice.reduce((a,b) => a + b, 0)
    return total;
  };
  const contextValue = {
    url,
    vnd,
    cart,
    setCart,
    showLogin,
    setShowLogin,
    token,
    setToken,
    getTotalCartAmount,
    addToCart,
    removeToCart,
    deleteCart,
  };

  useEffect(() => {
    if (!token) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreConTextProvider;
