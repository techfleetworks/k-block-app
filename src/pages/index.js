import React, { useState } from 'react';
import { Button, Navbar } from '@/components/ui';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count === 0) {
      toast.error('You cannot decrement below 0.');
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <main className="px-8 bg-white text-black h-[100vh]">
      <Navbar />
      <div className="flex justify-between gap-4 my-4">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold ">Welcome to the K-Block world!</h1>
          <p className="animate-pulse">Coming Soon!</p>
          <section className="flex items-center gap-4 font-semibold">
            <Button variant="primary" onClick={handleIncrement}>
              📈
            </Button>
            <p>{count}</p>
            <Button variant="secondary" onClick={handleDecrement}>
              📉
            </Button>
          </section>
        </div>
      </div>
    </main>
  );
}