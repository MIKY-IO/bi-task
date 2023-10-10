import React from "react";
import "../styles/globals.css";
import { Layout } from "../components";
import { NextUIProvider } from "@nextui-org/react";
import { CartContextProvider } from "../context/StateContext";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
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
