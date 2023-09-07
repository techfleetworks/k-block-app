import Help from "@/components/common/help";
import Link from "next/link";

const NftAssetOverview = () => {
  return (
    <div className="bg-neutral-n-0 p-5 border-solid drop-shadow-md rounded-md mt-6">
      <h2 className="text-neutral-n-800 text-xl font-bold leading-6">
        Overview
      </h2>
      <table className="w-full text-left text-sm text-neutral-n-800 pt-5 border-separate rounded-b-xl drop-shadow-md ">
        <tbody className="space-y-6">
          <tr className="flex justify-between">
            <th className="font-normal">
              <Help
                label="Owner"
                tooltipText="The wallet address of this NFT's current holder"              
              />
            </th>
            <td className="table-link">
              <Link href="#">k:7acb2e9d26...3ddd001671</Link>
            </td>
          </tr>
          <tr className="flex justify-between">
            <th className="font-normal">
              <Help
                label="Creator"
                tooltipText="The wallet address of this NFT's minter (the person who first created this NFT)"
              />
            </th>
            <td className="table-link">
              <Link href="#">k:6d87fd6e5e...993818bb89</Link>
            </td>
          </tr>
          <tr className="flex justify-between">
            <th className="font-normal">
              <Help
                label="External Link"
                tooltipText="The official website for an NFT collection"
              />
            </th>
            <td className="table-link">
              <Link href="https://variationapes.com/">
                https://variationapes.com/
              </Link>
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
                label="Royalties"
                tooltipText="The percentage the creator of an NFT collection receives from each transaction"
              />
            </th>
            <td className="table-link">
              <p className="text-neutral-n-800 text-sm font-normal leading-[1.125rem]">
                7.5%
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NftAssetOverview;
