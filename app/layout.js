import "./globals.css";
import Providers from "./src/redux/providers";

export const metadata = {
  title: "Jdish",
  description: "Food Social App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
