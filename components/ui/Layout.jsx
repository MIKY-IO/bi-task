import Head from "next/head";
import Nav from "/components/sections/Nav";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>MikyIO-BI-task</title>
      </Head>
      <header className="border-b-4 border-b-[#E5E5E5]">
        <Nav />
      </header>
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
