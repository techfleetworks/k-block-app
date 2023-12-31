import Help from "@/components/common/help";
import Link from "next/link";

const NftAssetOverview = ({ className }) => {
  return (
    <div
      className={`w-full bg-neutral-n-0 p-5 border-solid drop-shadow-md rounded-md mt-6 ${className}`}
    >
      <h2 className="text-neutral-n-800 text-xl font-bold leading-6">
        Overview
      </h2>
      <table className="w-full text-left text-sm text-neutral-n-800 pt-5 border-separate rounded-b-xl drop-shadow-md ">
        <tbody className="space-y-6">
          <style jsx>{`
            @media (max-width: 1024px) {
              .stack-table-text {
                flex-direction: column;
                align-items: flex-start;
              }
            }
            @media (max-width: 1024px) {
              .reduce-space {
                display: flex;
                justify-content: start;
                gap: 1rem;
              }
            }
          `}</style>
          <tr className="flex justify-between stack-table-text">
            <th className="font-normal w-[150px]">
              <Help
                label="Owner"
                tooltipText="The wallet address of this NFT's current holder"
              />
            </th>
            <td className="table-link">
              <Link href="#">k:7acb2e9d26...3ddd001671</Link>
            </td>
          </tr>
          <tr className="flex justify-between stack-table-text">
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
          <tr className="flex justify-between stack-table-text">
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
          <tr className="flex justify-between stack-table-text">
            <th className="font-normal">
              <Help
                label="Token Contract Address:"
                tooltipText="URL linking to this token's smart contract"
              />
            </th>
            <td className="table-link">
              <Link href="#">
                n_df83905bd42ed92e559616bb707f74979a4010e0.bana
              </Link>
            </td>
          </tr>
          <tr className="flex justify-between reduce-space">
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
