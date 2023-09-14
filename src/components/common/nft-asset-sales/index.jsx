import Help from "@/components/common/help";
import Image from "next/image";
import Hypercent from "@/assets/hypercent.svg";
import Arkade from "@/assets/arkade.svg";

const NftAssetSales = ({ className }) => {
  return (
    <div
      className={`bg-neutral-n-0 p-5 border-solid drop-shadow-md rounded-md mt-6 w-full ${className}`}
    >
      <h2 className="text-neutral-n-800 text-xl font-bold leading-6">
        Sales Information
      </h2>
      <table className="w-full text-left text-sm text-neutral-n-800 pt-5 border-separate rounded-xl drop-shadow-md ">
        <tbody className="space-y-6">
          <tr className="flex justify-between">
            <th className="font-normal">
              <Help
                label="Last Sold For:"
                tooltipText="The amount paid for the most recently sold NFT in this collection"
              />
            </th>
            <td>
              <p>
                5 KDA <span className="text-neutral-n-500">($2.85)</span>
              </p>
            </td>
          </tr>
          <tr className="flex justify-between">
            <th className="font-normal">
              <Help
                label="Minimum Price (24hr):"
                tooltipText="The lowest cost for an NFT in this collection (last 24 hours)"
              />
            </th>
            <td>
              <p>
                3 KDA <span className="text-neutral-n-500">($1.71)</span>
              </p>
            </td>
          </tr>
          <tr className="flex justify-between">
            <th className="font-normal">
              <Help
                label="Marketplaces"
                tooltipText="The different platforms where this NFT collection can be traded"
              />
            </th>
            <td className="flex gap-2">
              <Image src={Arkade} width={24} height={24} alt="Arkade Logo" />
              <Image
                src={Hypercent}
                width={24}
                height={24}
                alt="Hypercent Logo"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NftAssetSales;
