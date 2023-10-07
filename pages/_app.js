import React from "react";
import "../styles/globals.css";
import { Layout } from "../components";
import { NextUIProvider } from "@nextui-org/react";
import { CartContextProvider } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </CartContextProvider>
  );
}

export default MyApp;
