import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  /**
   * state for cartItems - price, image, name
   */
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const addToCart = (product, quantity) => {
    const isItemInCart = cartItems.some((item) => item.id === product.id);
    console.log(isItemInCart);
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (isItemInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        }
        return {
          ...cartProduct,
          quantity,
        };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, product]);
    }
  };

  const resetCart = () => {
    setCartItems([]);
    setTotalQuantities(0);
    setTotalPrice(0);
  };

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        setQty,
        addToCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
