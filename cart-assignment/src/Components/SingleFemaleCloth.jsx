import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import DetailedProduct from "./DetailedProduct";

const SingleFemaleCloth = ({ image, title, id, price }) => {
    return (
        <div className="singleProduct">
        <img className="img" src={image} alt=" " />
        <h5>{title}</h5>
        {/* <p>Price: {price}</p> */}
        <button><Link to={"/products/" + id}>See More</Link></button>
        {/* <Link to={`${id}`}>
          <button>More Info</button>
        </Link> */}
      </div>
    );
  };
  export default SingleFemaleCloth;