// import {
//   Description,
//   Hero,
//   Layout,
//   PageNavigation,
//   Products,
// } from "../components";

// const HomePage = () => {
//   return (
//     <main>
//       <Layout />
//       <section className="">
//         <Hero />
//       </section>
//       <section className="">
//         <Description />
//       </section>
//       <section className="">
//         <Products />
//       </section>
//       <section className="">
//         <PageNavigation />
//       </section>
//     </main>
//   );
// };

// export default HomePage;

import React from "react";
import { Hero, ProductSection, Description, Layout } from "../components";

const HomePage = () => {
  return (
    <main className="mx-auto max-w-screen-xl md:h-full">
      <section className="">
        <Hero />
      </section>
      <section className="">
        <Description />
      </section>
      <section className="">
        <ProductSection />
      </section>
    </main>
  );
};

export default HomePage;
