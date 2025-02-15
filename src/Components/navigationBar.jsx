import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faShoppingCart , faUser } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import "./navigationbar.css";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
export default function NavigationBar() {
  const cartItem = useSelector((store)=> store.cart.items)
  return (
    <>
      <div className="navouter">
        <div className="logoclass">
            <img src="./src/assets/logo.jpg" alt="" />
            <p>ShopeeGlobe</p>
        </div>
        <ul className='navlist'>
            <Link to="/"><li><FontAwesomeIcon icon={faHouse} />Home</li></Link>
            <Link to="/cart"><li><FontAwesomeIcon icon={faShoppingCart} />Cart    {cartItem.length}</li></Link>
        </ul>
      </div>
    </>
  )
}
