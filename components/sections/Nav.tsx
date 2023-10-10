import React, { useEffect } from "react";
import Logo from "../../public/pictures/logo.png";
import Image from "next/image";

// import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Cart from "../sections/Cart";
import { useStateContext } from "../../context/StateContext";

const Nav: React.FC<{}> = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="nav-container mt-0 mb-6  mx-auto max-w-screen-xl">
      <a href="">
        <Image src={Logo} alt="logo" className="" />
      </a>

      <button
        type="button"
        className="cart-icon"
        onClick={() => {
          setShowCart(!showCart);
        }}
      >
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Nav;
