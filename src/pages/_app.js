<<<<<<< Updated upstream
import { Toaster } from '@/components/ui/toaster';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/common';
=======
import { Toaster } from "@/components/ui/toaster";
import "../styles/globals.css";
import { Inter } from "next/font/google";
>>>>>>> Stashed changes

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

function MyApp({ Component, pageProps }) {
  return (
    <>
<<<<<<< Updated upstream
      <main className={`${inter.variable} font-sans max-w-[1440px] mx-auto`}>
        <Navbar />
=======
      <main className={`${inter.variable} font-sans`}>
>>>>>>> Stashed changes
        <Component {...pageProps} />
        <Toaster />
      </main>
    </>
  );
}

export default MyApp;
