import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import RightSidebar from "../components/rightSidebar";
import Home from "./home/page";

function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="w-full px-4 py-4">
        <div className="flex max-w-7xl mx-auto gap-6">
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-20">
              <Sidebar />
            </div>
          </aside>

          <section className="flex-1 w-full">
            <div className="w-full flex justify-center ml-9">
              <Home />
            </div>
          </section>

          <aside className="hidden lg:block w-74 shrink-0">
            <div className="sticky top-20">
              <RightSidebar />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Page;
