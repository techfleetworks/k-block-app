import { Navbar } from "@/components/common";
import { NftAssetGrid } from "@/components/common";

export default function NftAsset() {
  return (
    <div className="bg-inherit">
      <header>
        <Navbar />
      </header>
      <div>
        <section>
          <NftAssetGrid />
        </section>
        <section>{/* Tables */}</section>
        <section>{/* Cards */}</section>
      </div>
    </div>
  );
}
