import React from "react";
import {
  Hero,
  Products,
  Description,
  Layout,
  PageNavigation,
} from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="">
        <h1 className="">Samurai King Resting</h1>
        <button className="">ADD TO CART</button>
        <img src="" alt="photo" className="" />
      </div>
      <div>{["Products"].map((Products) => products)}</div>
      <PageNavigation />
    </>
  );
};

export default Home;
