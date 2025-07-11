import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState('home')
  const { getTotalCartAmount, token, setToken, cart } = useContext(StoreContext)
  
  const navigate = useNavigate()
  const [endWith, setEndWith] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')
    setToken("")
    navigate('/')
  }
  const checkUrl = () => {
    setTimeout(() => {
      const urlEndPonit = window.location.href.endsWith('/')
      setEndWith(urlEndPonit ? "" : "none")
    }, 100);
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='' className="logo" onClick={() => checkUrl()} /></Link>
      <ul className='navbar-menu'>
        <Link style={{ display: endWith }} to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a style={{ display: endWith }} href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
        <a style={{ display: endWith }} href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile app</a>
        <a style={{ display: endWith }} href='#contact' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact</a>
      </ul>
      <div className='navbar-right'>
        {token ? <div className='navbar-search-icon'>
          <Link to='/cart' onClick={() => checkUrl()}><img className='cart-icon' src={assets.cart} alt="" /></Link>
          <div className={cart.length <= 0 ? '' : 'dot'}></div>
        </div> : ''}
        {!token ? <button onClick={() => setShowLogin(true)}>Signin</button> :
          <div className='navbar-profile'>
            <img className='avatar' src={assets.avatar} alt='' />
            <ul className="nav-profile-dropdown">
              <li><Link to='/order' onClick={() => checkUrl()}><img src={assets.order} alt='' />Order</Link></li>
              <hr />
              <li onClick={() => logout()}><img src={assets.logout} alt='' />Logout</li>
            </ul>
          </div>}
      </div>
    </div>
  )
}

export default Navbar;
