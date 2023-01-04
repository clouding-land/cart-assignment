import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsEnvelopeFill } from 'react-icons/bs';
import '../home.css'
import React from "react";
export default function Footer() {
return(
    <footer class="footer" id="footer">
<div class="container-fluid">
  <i><BsFacebook /></i>
  <i><BsTwitter /></i>
  <i><BsInstagram /></i>
  <i><BsEnvelopeFill /></i>
  <p class="testimonial-ptext">@Copyright 2023 Products</p>
</div>
</footer>
)
}