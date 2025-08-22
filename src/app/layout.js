import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import NextAuthProvider from "@/providers/NextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sports Gear",
  description:
    "A sports gear shop web application where users can log in to add products. Visitors can browse products on the landing page and view detailed information for each individual item",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          {" "}
          <Navbar></Navbar>
          <Toaster></Toaster>
          <div className="min-h-[calc(100vh-110px)]"> {children}</div>
          <Footer></Footer>
        </NextAuthProvider>
      </body>
    </html>
  );
}
