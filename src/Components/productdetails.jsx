// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// export default function Productdetails() {
//   const {id} =useParams()
//   const [productdata , setProductdata] = useState(null)
//   useEffect(()=>{
//       const fetchdetails = async()=>{
//           try{
//               let response = await fetch(`https://dummyjson.com/products/${id}`)
//               let data = await response.json();
//               setProductdata(data)
//           }
//           catch(error){
//               console.log('Error',error)
//           }
//         };
//         fetchdetails()
//     },[id]);
//   return (
//     <>
//     <h1>{productdata.price}</h1>
//     </>
//   )
// }
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Productdetails() {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let response = await fetch(`https://dummyjson.com/products/${id}`);
        let data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchDetails();
  }, [id]);

  return (
    <>
      {productData? (
        <>
        <div className="imgg">
          <img src={productData.thumbnail} alt="" />
        </div>
        <div className="productheader">
          <h2>{productData.title}</h2>
          <p>{productData.brand}</p>
          <p>⭐{productData.rating}</p>
        </div>
        <marquee behavior="" direction=""><h3>{productData.description}</h3></marquee>
        <div className="pricediscount">
          <h2>🏷️-{productData.discountPercentage}%</h2>
          <h2>💰${productData.price}</h2>
        </div>
        <div className="productdetailstable">
          <h1>Details</h1>
          <div className="detailshead">
            <div className="prodA">
              <div className="prodB">
                <h3>Brand</h3>
              </div>
              <div className="prodB">
                <h3>{productData.brand}</h3>
              </div>
            </div>
            <div className="prodA">
              <div className="prodB">
                <h3>Brand</h3>
              </div>
              <div className="prodB">
                <h3>{productData.brand}</h3>
              </div>
            </div>
            <div className="prodA">
              <div className="prodB">
                <h3>Category</h3>
              </div>
              <div className="prodB">
                <h3>{productData.category}</h3>
              </div>
            </div>
            <div className="prodA">
              <div className="prodB">
                <h3>Min.Order Qty</h3>
              </div>
              <div className="prodB">
                <h3>{productData.minimumOrderQuantity}</h3>
              </div>
            </div>
            <div className="prodA">
              <div className="prodB">
                <h3>Warranty</h3>
              </div>
              <div className="prodB">
                <h3>{productData.warrantyInformation}</h3>
              </div>
            </div>
            <div className="prodA">
              <div className="prodB">
                <h3>Weight</h3>
              </div>
              <div className="prodB">
                <h3>{productData.weight}</h3>
              </div>
            </div>
            <div className="prodA">
              <div className="prodB">
                <h3>Width</h3>
              </div>
              <div className="prodB">
                <h3>{productData.dimensions.width}</h3>
              </div>
            </div>
            <div className="prodA">
              <div className="prodB">
                <h3>Height</h3>
              </div>
              <div className="prodB">
                <h3>{productData.dimensions.height}</h3>
              </div>
            </div>
            <div className="prodA">
              <div className="prodB">
                <h3>Depth</h3>
              </div>
              <div className="prodB">
                <h3>{productData.dimensions.depth}</h3>
              </div>
            </div>

          </div>
          <div className="review">
            <h2>Customer Reviews</h2>
            <div className="reviwset">
              <div className="reviewcard">
                <h3>Buyer : {productData.reviews[0]?.reviewerName}</h3>
                <h3>⭐{productData.reviews[0]?.rating}</h3>
                <h3>Reviewed on {productData.reviews[0]?.date}</h3>
                <h3>{productData.reviews[0]?.comment}</h3>
              </div>
              <div className="reviewcard">
                <h3>Buyer : {productData.reviews[1]?.reviewerName}</h3>
                <h3>⭐{productData.reviews[1]?.rating}</h3>
                <h3>Reviewed on {productData.reviews[1]?.date}</h3>
                <h3>{productData.reviews[1]?.comment}</h3>
              </div>
              <div className="reviewcard">
                <h3>Buyer : {productData.reviews[2]?.reviewerName}</h3>
                <h3>⭐{productData.reviews[2]?.rating}</h3>
                <h3>Reviewed on {productData.reviews[2]?.date}</h3>
                <h3>{productData.reviews[2]?.comment}</h3>
              </div>
            </div>
          </div>
        </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
