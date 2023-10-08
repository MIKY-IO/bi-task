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
          ...product,
          quantity,
        };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, product]);
    }
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  //   const inQty = () => {
  //     setQty((prevQty) => prevQty + 1);
  //   };

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
        // incQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
