import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  const { showLogin, setShowLogin, cart } = useContext(StoreContext);
  return (
    <>
      {showLogin ? <LoginPopup /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} cart={cart}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
