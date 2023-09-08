import { Toaster } from "@/components/ui/toaster";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/common";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

import * as React from "react";
// import HomeNavbar from "@/components/common/navbar/home-navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
        <Footer />
        <Toaster />
      </main>
    </>
  );
}

export default MyApp;

// {Component.name === "Home" ? <HomeNavbar /> : <Navbar />}
