import Head from "next/head";
import Nav from "@/components/sections/Nav";

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Head>
        <title>MikyIO-BI-task</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" sizes="any" />
      </Head>
      <header>
        <Nav />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
