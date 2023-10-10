import Head from "next/head";
import Nav from "@/components/sections/Nav";

interface ILayoutProps {
  children: React.ReactNode;
}
type TLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const Layout: React.FC<ILayoutProps> = ({ children }) => {
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