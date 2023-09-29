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
import {
  Hero,
  Products,
  Description,
  Layout,
  PageNavigation,
} from "../components";

const HomePage = () => {
  return (
    <main>
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Description />
      </section>
      <section className="padding">
        <Products />
      </section>
      <section className="padding">
        <PageNavigation />
      </section>
    </main>
  );
};

export default HomePage;
