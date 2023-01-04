import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Link} from "react-router-dom";
import '../home.css'
import React from "react";
export default function Electronic() {
  return(
    <section class="white-section" id="pricing">

<h2 class="section-heading">Electronics</h2>


<div class="row">

<div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>External Hard Drive</h3>
      </div>
      <div class="card-body">
      <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt=""></img>
        <h2 class="price-text">$64</h2>
        
      </div>
    </div>
  </div>
  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>SanDisk SSD PLUS</h3>
      </div>
      <div class="card-body">
      <img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt=""></img>
        <h2 class="price-text">$109</h2>
        
      </div>
    </div>
  </div>
  <div class="pricing-column col-lg-4 col-md-6">
    <div class="card">
      <div class="card-header">
        <h3>Samsung 49-Inch CHG90</h3>
      </div>
      <div class="card-body">
      <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt=""></img>
        <h2 class="price-text">$999</h2>
        
      </div>
    </div>
  </div>
</div>
<button className='view-full'><Link id="link" to={"/products/clothing"}>View All Electronics</Link></button>

</section>
  );
}