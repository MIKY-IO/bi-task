import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { useStateContext } from "../../context/StateContext";
import Image from "next/image";

const Cart = () => {
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  useEffect(() => {
    console.log("hi from cart", cartItems);
  }, [cartItems]);

  return (
    <div className="cart-container ">
      <div className="text-right flex justify-end items-end mt-5 mr-5">
        <RxCross2
          className="close-cart w-7 h-7"
          onClick={() => setShowCart(false)}
        />
      </div>
      <div className="flex justify-between items-center mx-4 mt-4">
        <div className="w-1/2">
          <h2 className="text-lg font-semibold">productName</h2>
          <p className="text-sm text-gray-500">productPrice</p>
        </div>
        <div className="w-1/2 ">
          <Image src="" alt="cart" className="w-32 h-16 border-2 " />
        </div>
      </div>
      <div className="mx-4 border-b-2 border-b-[#E4E4E4] mt-4"></div>

      <div className="mx-4 mt-4">
        <button
          className="w-full py-1 z-50 font-bold border-2 border-black"
          onClick={() => {}}
        >
          {/* <button className="font-bold" onClick={clearCart}> */}
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Cart;
