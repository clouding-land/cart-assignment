import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from "react-router-dom";
import '../home.css'
import React from "react";
export default function Accessory() {
  return(
    <section class="white-section" id="pricing">

<h2 class="section-heading">Accessories</h2>


<div class="row">

<div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Women's Legends Naga Gold </h3>
      </div>
      <div class="card-body">
      <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" alt=""></img>
        <h2 class="price-text">$695</h2>
        
      </div>
    </div>
  </div>
  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Solid Gold Petite Micropave</h3>
      </div>
      <div class="card-body">
      <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt=""></img>
        <h2 class="price-text">$168</h2>
        
      </div>
    </div>
  </div>
  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Pierced Owl Rose Gold Steel</h3>
      </div>
      <div class="card-body">
      <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt=""></img>
        <h2 class="price-text">$10.99</h2>
        
      </div>
    </div>
  </div>
</div>
<button className='view-full'><Link id="link" to={"/products/clothing"}>View All Accessories</Link></button>

</section>
  );
}