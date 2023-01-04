import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import '../home.css'
import React from "react";
export default function Cloth() {
  return(
    <section class="white-section" id="pricing">

<h2 class="section-heading">Women's Clothing</h2>


<div class="row">

<div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Women's Snowboard Jacket Winter Coats</h3>
      </div>
      <div class="card-body">
      <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" alt=""></img>
        <h2 class="price-text">$56.99</h2>
        
      </div>
    </div>
  </div>
  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Women's Removable Hooded Faux Leather</h3>
      </div>
      <div class="card-body">
      <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" alt=""></img>
        <h2 class="price-text">$29.95</h2>
        
      </div>
    </div>
  </div>
  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>MBJ Women's Solid Short Sleeve Boat Neck V</h3>
      </div>
      <div class="card-body">
      <img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" alt=""></img>
        <h2 class="price-text">$9.85</h2>
        
      </div>
    </div>
  </div>
</div>

<button className='view-full'><Link id="link" to={"/products/clothing"}>View All Cloths</Link></button>
</section>
  );
}