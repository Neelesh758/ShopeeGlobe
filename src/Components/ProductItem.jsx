import React from 'react'
import './produts.css'
import {Link} from 'react-router-dom'
import { addItem } from './utils/cartSlice'
import { useDispatch } from 'react-redux'
export default function ProductItem({product}) {
  const dispatch = useDispatch();
  function handleAddItem(){
    dispatch(addItem(product))
  }
  return (
    <>
      <div className="productcard">
        <div className="imgsection">
            <img src= {product.thumbnail} alt="" />
        </div>
        <div className="secondsection">
            <h3>{product.title}</h3>
            <h4>Ratings:⭐{product.rating}</h4>
            <h2>{product.discountPercentage}% Off</h2>
            <h1>${product.price}</h1>
            <p>{product.shippingInformation}</p>
        </div>
        <div className="btn">
            <button className="btn1" onClick={handleAddItem}>Add to cart</button>
            <Link to={`/productdetails/${product.id}`}><button className="btn2">View Product</button></Link>
        </div>
      </div>
    </>
  )
}
