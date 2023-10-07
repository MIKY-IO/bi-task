import React from "react";

export async function getServerSideProps({ params, query }) {
  console.log({ params, query });

  return {
    props: {},
  };
}

const Bello = () => {
  return <div>Hello bello mikiburg je best</div>;
};

export default Bello;
