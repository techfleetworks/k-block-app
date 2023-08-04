import { Navbar, Searchbar } from '@/components/common';

export default function Home() {
  return (
    <div className="bg-gradient-to-tr from-[#8DE998] via-[#045375] to-[#153745] py-8 h-[40vh]">
      <main className="px-8">
        <Navbar />
        <Searchbar />
      </main>
    </div>
  );
}
