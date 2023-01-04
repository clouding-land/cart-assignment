import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import React from "react";
export default function Intro() {
  return(
    <section class="colored-section" id="title">

    <div class="container-fluid">
      <div class="row">
    
        <div class="col-lg-6">
          <h1 class="big-heading">New Trending Cloths and Accessories....</h1>
          
          <button type="button" class="btn btn-dark btn-lg download-button">
          <Link to={"/products"}>View All Products</Link>
          </button>
          
        </div>
    
        <div class="col-lg-6">
          <img class="title-image" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/58/06/0f/quest-mall.jpg?w=500&h=400&s=1" alt="iphone-mockup"/>
        </div>
    
      </div>
    
    </div>
    
    </section>
  );
}