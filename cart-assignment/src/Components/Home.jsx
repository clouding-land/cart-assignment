import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import Intro from "./Sections/Intro";
import Cloth from "./Sections/Cloth";
import Carosel from "./Sections/Carosel";
import Electronic from "./Sections/Electronic";
import Slogan from "./Sections/Slogan";
import Accessory from "./Sections/Accessory";
import About from "./Sections/About";
import Footer from "./Sections/Footer";
import './home.css'
import { Carousel } from 'bootstrap';
export default function Home() {
  return (
    <div>
    <Intro />
    <Cloth />
    <Carosel />
    <Electronic />
    <Slogan />
    <Accessory />
    {/* <About /> */}
    <Footer/>
    </div>
  );
}