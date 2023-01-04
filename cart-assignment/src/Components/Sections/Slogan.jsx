import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {AiFillCheckCircle} from "react-icons/ai";
import { FaBullseye } from 'react-icons/fa';
import{BsFillHeartFill} from 'react-icons/bs'
import React from "react";
export default function Slogan() {
return(
    <section id="features">

    <div class="container-fluid">

      <div class="row">
        <div class="feature-box col-lg-4">
          <i id="icon" class="icon fas fa-check-circle fa-4x"><AiFillCheckCircle  padding={20} size={60}/></i>
          <h3 class="feature-title">Easy to use.</h3>
          <p class="testimonial-ptext">Trends products is Easy to use and accessible...</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-bullseye fa-4x"><FaBullseye padding={20} size={60}/></i>
          <h3 class="feature-title">Elite Clientele</h3>
          <p class="testimonial-ptext">Trends products makes some of our favorite accessories...</p>
        </div>

        <div class="feature-box col-lg-4">
          <i class="icon fas fa-heart fa-4x"><BsFillHeartFill padding={20} size={60}/></i>
          <h3 class="feature-title">Guaranteed to Shop.</h3>
          <p class="testimonial-ptext">Guaranteed to purchase Trends products...</p>
        </div>
      </div>


    </div>
  </section>
)
}