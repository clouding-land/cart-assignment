import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Nav = () => {
  const userLogged = "no";
  return (
    <div className="navbar">
      <span>
        <Link to={"/"}>Trends</Link>
      </span>
      <span>
        <Link to={"/products/clothing"}>Clothing</Link>
      </span>
      <span>
        <Link to={"/products/electronics"}>Electronics</Link>
      </span>
      <span>
        <Link to={"/products/accessories"}>Accessories</Link>
      </span>
    </div>
  );
};
export default Nav;