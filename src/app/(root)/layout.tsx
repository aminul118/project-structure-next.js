import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React, { ReactNode } from "react";

type layoutProps = Readonly<{
  children: ReactNode;
}>;

const layout = ({ children }: layoutProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-112px)]">{children}</div>
      <Footer />
    </>
  );
};

export default layout;
