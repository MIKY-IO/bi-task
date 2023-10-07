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
import { productsData } from "../data";

export async function getServerSideProps({ params, query }) {
  console.log({ params, query });
  // page i get from query
  const page = query.page ?? 1;
  let limit = 6;
  if (query.limit && query.limit >= 6 && query.limit <= 12) {
    limit = query.limit;
  }
  const sortKeys = ["price", "title", "createdAt"];
  let sortKeyString = "createdAt";
  if (query.sortKey && sortKeys.includes(query.sortKey)) {
    sortKeyString = query.sortKey;
  }
  const skip = (page - 1) * limit;
  const newProducts = productsData.slice(skip, page * limit);

  return {
    props: {
      count: productsData.length,
      page,
      limit,
      skip,
      sortKey: sortKeyString,
      products: newProducts,
    },
  };
}

const HomePage = (props) => {
  const { count, page, limit, skip, sortKey, products } = props;
  console.log({
    count,
    page,
    limit,
    skip,
    sortKey,
  });
  // const { products, sayHi } = props;

  return (
    <main className="mx-auto max-w-screen-xl md:h-full">
      <section className="">
        <Hero />
      </section>
      <section className="">
        <Description />
      </section>
      <section className="">
        <ProductSection products={props.products} />
      </section>
    </main>
  );
};

export default HomePage;
