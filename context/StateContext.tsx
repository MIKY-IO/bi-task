import { TProduct } from "@/data";
import { StaticImageData } from "next/image";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext<any>(null);

type TProductContextProps = {
  children: React.ReactNode;
};

export type TCartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: StaticImageData;
};

type TCartItems = Array<TCartItem>;

export const CartContextProvider: React.FC<TProductContextProps> = ({
  children,
}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<TCartItems>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const addToCart = (product: TProduct, quantity: number) => {
    const isItemInCart = cartItems.some((item) => item.id === product.id);
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
      const newProduct: TCartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image.src,
        quantity: quantity,
      };

      setCartItems([...cartItems, newProduct]);
    }
    setShowCart(true);
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
