import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { removeItem } from './utils/cartSlice';

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items); // Get items from Redux store
  const dispatch = useDispatch();
  function handleremoveItem(item){
      dispatch(removeItem(item))
    }

  return (
    <>
      <h1>Cart Items</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className='carthead1'>
          {cartItems.map((item, index) => (
            <li key={index} className='carthead2'>
              <img src={item.thumbnail} alt={item.title} width="100" className='cartimg' />
              <p>{item.title}</p>
              <p>Price: ${item.price}</p>
              <button onClick={() => handleremoveItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
