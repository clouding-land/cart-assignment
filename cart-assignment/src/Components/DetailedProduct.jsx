import "../styles.css";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function DetailedProduct(){
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isError, setisError] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((e) => setProduct(e.data))
      .catch((err) => setisError(true));
  }, []);
  return (
    <div className="product">
      {isError ? (
        <h1>Product Not Found</h1>
      ) : (
        <>
          <img className="proImage" src={product.image} alt="" />
          <h2 className="proText">{product.title}</h2>
          <h3 className="proText2">${product.price}</h3>
          <p className="proText3">{product.description}</p>
          <button>Add to Cart</button>
         
        </>
      )}
    </div>
  );
};
export default DetailedProduct;