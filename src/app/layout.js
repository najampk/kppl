
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khyber Petroleum Pvt Ltd | Oil & Gas Company",
  description: "Khyber Petroleum (Pvt.) Ltd. has been established as a Petroleum company in Pakistan. Our traditional business model is based on the accomplishment of fuel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Nav/>
      {children}
      <Footer/></body>
    </html>
  );
}
