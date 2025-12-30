import "./globals.css";
import Providers from "./src/redux/providers";
import MobileNav from "../components/mobileNav";

export const metadata = {
  title: "Jdish",
  description: "Food Social App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <MobileNav />
        </Providers>

      </body>
    </html>
  );
}
