import { Navbar } from "@/components/common";
import { NftAssetGrid } from "@/components/common";

export default function NftAsset() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="bg-inherit md:px-12">
        <section>
          <NftAssetGrid />
        </section>
        <section>{/* Tables */}</section>
        <section>{/* Cards */}</section>
      </div>
    </div>
  );
}
