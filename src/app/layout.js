import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infinite Life List",
  description: "List of all the items recommended by longevity books",
  image: "https://pbs.twimg.com/media/GEY-m43asAAQ3bx?format=jpg&name=900x900"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
