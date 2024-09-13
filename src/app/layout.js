
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khyber Petroleum Pvt Ltd | OGMC Company",
  description: "Khyber Petroleum Pvt Ltd is a leading Oil & Gas marketing company based in Lahore, Pakistan. Contact us at +923458482135 for energy solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en_US">
      <body className={inter.className}>
      <Nav/>
      {children}
      <Footer/></body>
    </html>
  );
}
