import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
      {/* <footer>footer</footer> */}
    </main>
  );
};

export default HomeLayout;
