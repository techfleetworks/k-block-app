import { Navbar, Searchbar, InfoBar } from '@/components/common';

export default function Home() {
  return (
    <main className="h-[100vh] bg-neutral-n-50">
      <Navbar />
      <Searchbar />
      <InfoBar />
    </main>
  );
}
