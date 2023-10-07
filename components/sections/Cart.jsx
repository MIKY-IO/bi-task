import React, { useRef } from "react";
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateContext } from "../../context/StateContext";
import Image from "next/image";

const Cart = () => {
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  return (
    // <div className="cart-wrapper">
    <div className="cart-container">
      <button
        type="button"
        className=""
        onClick={() => setShowCart(false)}
      ></button>

      <div className="product-container">
        {cartItems?.length >= 1 &&
          cartItems.map((item) => (
            <div className="product" key={item._id}>
              <Image
                src={item?.image[0]}
                alt="product"
                className="cart-product-image"
              />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span
                        className="minus"
                        onClick={() => toggleCartItemQuanitity(item._id, "dec")}
                      ></span>
                      <span className="num" onClick="">
                        {item.quantity}
                      </span>
                      <span
                        className="plus"
                        onClick={() => toggleCartItemQuanitity(item._id, "inc")}
                      ></span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {cartItems?.length >= 1 && (
        <div className="cart-bottom">
          <div className="total">
            <h3>Subtotal:</h3>
            <h3>${totalPrice}</h3>
          </div>
          <div className="btn-container">
            <button type="button" className="btn" onClick={handleCheckout}>
              Pay with Stripe
            </button>
          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default Cart;
