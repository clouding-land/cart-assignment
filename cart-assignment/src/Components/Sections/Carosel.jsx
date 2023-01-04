import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
export default function carosel() {
  return(
    <section class="colored-section" id="testimonials">

<div id="testimonial-carousel" class="carousel slide" data-ride="false">
  <div class="carousel-inner">
    <div class="carousel-item active container-fluid">
      <h2 class="testimonial-text">We Create Products Worth Holding Onto.</h2>
      <p class="testimonial-ptext">In a world where we are overwhelmed by goods made to break down or go out style, we aim to go against the grain. From American made leather belts and wallets to handcrafted Mazama tableware, all of our products are designed in Portland, Oregon</p>
      <img class="testimonial-image" src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="dog-profile"/>
      
    </div>
   
  </div>
  </div>

</section>
  );
}