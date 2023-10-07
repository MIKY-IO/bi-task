import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);
  const [totalQuantities, settotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  //   const inQty = () => {
  //     setQty((prevQty) => prevQty + 1);
  //   };

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setcartItems,
        totalPrice,
        settotalPrice,
        totalQuantities,
        settotalQuantities,
        qty,
        setQty,
        // incQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useStateContext = () => useContext(CartContext);
