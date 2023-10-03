import React from "react";
import Logo from "../../public/pictures/logo.png";
import Image from "next/image";
// import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

// import { Cart } from "./";
// import { useStateContext } from "../context/StateContext";

const Nav = () => {
  //   const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="nav-container my-0 pb-6 border-b-4 border-b-[#E5E5E5] mx-auto max-w-screen-xl">
      <a href="">
        <Image src={Logo} alt="logo" className="" />
      </a>

      <button
        type="button"
        className="cart-icon"
        // onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        {/* <span className="cart-item-qty">{totalQuantities}</span> */}
      </button>

      {/* {showCart && <Cart />} */}
    </div>
  );
};

export default Nav;