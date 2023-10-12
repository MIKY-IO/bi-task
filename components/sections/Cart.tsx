import Image from "next/image";
import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { TCartItem, useStateContext } from "../../context/StateContext";

const Cart: React.FC<{}> = () => {
  const {
    cartItems,
    setShowCart,
    resetCart,
  }: {
    cartItems: TCartItem[];
    setShowCart: (show: boolean) => void;
    resetCart: () => void;
  } = useStateContext();

  return (
    <div className="cart-container ">
      <div className="text-right flex justify-end items-end mt-2 mr-4">
        <RxCross2
          className="close-cart w-7 h-7 cursor-pointer"
          onClick={() => setShowCart(false)}
        />
      </div>
      {cartItems?.length > 0 &&
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mx-4 mt-2"
          >
            <div className="w-1/2">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">
                <div className="flex justify-between pr-4">
                  <div className="flex">
                    <span className="pr-1">$</span>
                    <span className="block">{item.price}</span>
                  </div>
                  <span className="block">{item.quantity}x</span>
                </div>
              </p>
            </div>
            <div className="w-1/2 aspect-[3/2] overflow-hidden border-2 relative">
              <Image
                src={item.image}
                alt="cart"
                objectFit="none"
                fill={true}
                className="aspect-[2/3] object-center object-none "
              />
            </div>
          </div>
        ))}
      {cartItems?.length <= 0 && (
        <div className="flex justify-center items-center uppercase font-bold ">
          Empty cart
        </div>
      )}
      <div className="mx-4 border-b-2 border-b-[#E4E4E4] mt-4 "></div>

      <div className="mx-4 my-4">
        <button
          className="w-full py-1 z-50 font-bold border-2 border-black"
          onClick={() => resetCart()}
        >
          CLEAR
        </button>
      </div>
    </div>
  );
};

export default Cart;
