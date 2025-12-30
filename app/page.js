import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import RightSidebar from "../components/rightSidebar";
import Home from "./home/page";

function Page() {
  return (
    <div>
      <Navbar />

      <div className="sticky top-20 px-4 py-4 w-full">
        <div className="flex flex-col md:flex-row">
          <aside className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <div className="sticky top-18">
              <Sidebar />
            </div>
          </aside>

          <section className="col-span-12 lg:col-span-6 xl:col-span-7 w-full">
            <div className="mt-0 w-full sm:w-full md:w-full lg:w-174 flex justify-center lg:justify-end items-center ml-0 lg:ml-9">
              <Home />
            </div>
          </section>

          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-18">
              <RightSidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Page;
