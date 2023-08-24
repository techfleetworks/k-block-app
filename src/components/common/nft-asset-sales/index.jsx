import Help from "@/components/common/help";
import Image from "next/image";
import Hypercent from "@/assets/hypercent.svg";
import Arkade from "@/assets/arkade.svg";
import Link from "next/link";

const NftAssetSales = () => {
  return (
    <div className="bg-neutral-n-0 p-5 border-solid drop-shadow-md rounded-md mt-6">
      <h2 className="text-neutral-n-800 text-xl font-bold leading-6">
        Sales Information
      </h2>
      <table className="w-full text-left text-sm text-neutral-n-800 pt-5 border-separate rounded-b-xl drop-shadow-md ">
        <tbody className="space-y-6">
          <tr className="flex justify-between">
            <th className="font-normal">
              <Help
                label="Last Sold For:"
                tooltipText={
                  <>
                    Tooltip text here.{" "}
                    <a className="underline" href="http://example.com/">
                      Learn more.
                    </a>
                  </>
                }
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
                tooltipText={
                  <>
                    Tooltip text here.{" "}
                    <a className="underline" href="http://example.com/">
                      Learn more.
                    </a>
                  </>
                }
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
                label="Token Contract Address:"
                tooltipText={
                  <>
                    Tooltip text here.{" "}
                    <a className="underline" href="http://example.com/">
                      Learn more.
                    </a>
                  </>
                }
              />
            </th>
            <td className="table-link">
              <p className="text-neutral-n-800 text-sm font-normal leading-[1.125rem]">
                n_df83905bd42ed92e559616bb707f74979a4010e0.bana
              </p>
            </td>
          </tr>
          <tr className="flex justify-between">
            <th className="font-normal">
              <Help
                label="Marketplaces"
                tooltipText={
                  <>
                    Tooltip text here.{" "}
                    <a className="underline" href="http://example.com/">
                      Learn more.
                    </a>
                  </>
                }
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
