// import React from 'react';
// import { Toaster } from 'react-hot-toast';

// import { Layout } from '../components';
// import './index.css';
// import { StateContext } from '../context/StateContext';

// function MyApp({ Component, pageProps }) {
//   return (
//     <StateContext>
//       <Layout>
//         <Toaster />
//         <Component {...pageProps} />
//       </Layout>
//     </StateContext>
//   )
// }

// export default MyApp

import React from "react";
import "../styles/globals.css";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
