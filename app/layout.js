import "./globals.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";

import Providers from "./src/redux/providers";
export const metadata = {
  title: "Jdish",
  description: "Food Social App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 pt-6">
          <div className="grid grid-cols-12 gap-6">
            <aside className="hidden lg:block col-span-2 pl-46 ">
              <div className="sticky ">
                <Sidebar />
              </div>
            </aside>
            <section className="col-span-12 lg:col-span-7 pl-60">
              {/* <Providers>{children}</Providers> */}
              
            </section>

            <aside className="hidden lg:block col-span-3 mr-12 -ml-14">
              <RightSidebar />
            </aside>
          </div>
        </main>
      </body>
      <Providers>{children}</Providers>
    </html>
  );
}
