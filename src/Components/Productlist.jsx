import React, { useEffect , useState } from 'react'
import ProductItem from './ProductItem'
import './produts.css'
import Maindiv from './maindiv'
export default function Productlist() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const fetchProducts = async()=>{
        try{
            let response = await fetch('https://dummyjson.com/products');
            let mydata = await response.json();
            setProducts(mydata.products);
            setFilteredProducts(mydata.products);
            console.log(mydata)
        }
        catch(error){
            console.log('Error',error)
        }
      };
      fetchProducts()
  },[]);
  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredProducts(products); 
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) 
      );
      setFilteredProducts(filtered); 
    }
  };
  
  return (
    <>
    <Maindiv onSearch={handleSearch} /> 
    <div className='productlist'>
    {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <p>No Products Found</p>
        )}
    </div>
    </>
  )
}
