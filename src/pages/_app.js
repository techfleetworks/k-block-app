import { Toaster } from '@/components/ui/toaster';
import '../styles/globals.css';
import { Inter } from 'next/font/google';
import { Footer, Navbar } from '@/components/common';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={`${inter.variable} font-sans`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Toaster />
      </main>
    </>
  );
}

export default MyApp;
