import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {FaShoppingBasket} from "react-icons/fa";
import {AiOutlineShoppingCart} from "react-icons/ai";
import './home.css'
import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Nav = () => {
  const userLogged = "no";
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark">
    <Link id="nav-icon" class="navbar-brand" to={"/"}><FaShoppingBasket /></Link>

<Link class="navbar-brand" to={"/"}>Trends</Link>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarTogglerDemo02">

  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
     <Link class="nav-link" to={"/products/clothing"}>Clothing</Link>
    </li>
    <li class="nav-item">
    <Link class="nav-link" to={"/products/electronics"}>Electronics</Link>
    </li>
    <li class="nav-item">
    <Link class="nav-link" to={"/products/accessories"}>Accessories</Link>
    </li>
  </ul>
  <Link className="cart" to={"/"}><AiOutlineShoppingCart size={20} /></Link>

</div>
</nav>
    </div>
  );
};
export default Nav;
