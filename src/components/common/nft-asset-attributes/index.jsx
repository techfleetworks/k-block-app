const NftAssetAttributes = () => {
  return (
    <div className="bg-neutral-n-0 border-solid drop-shadow-md rounded-md p-7">
      <h2 className="text-neutral-n-800 text-xl font-bold leading-6 pb-5">
        Attributes(10)
      </h2>
      <table className="w-full text-left text-sm text-neutral-n-500 bg-neutral-n-200 border-separate rounded-xl drop-shadow-low ">
        <tbody className="space-y-6">
          <tr>
            <div className="flex justify-between border-b p-2">
            <th className="text-neutral-n-500 text-xs font-normal">
              Hat
              <p className="text-neutral-n-900 text-xs font-medium leading-[1.125rem]">Purple_Cask</p>
            </th>
              <td className="text-neutral-n-500 text-sm font-normal leading-5">
                1.73%
              </td>
            </div>
          </tr>
          <tr>
            <div className="flex justify-between border-b p-2">
            <th className="text-neutral-n-500 text-xs font-normal">
              Background
              <p className="text-neutral-n-900 text-xs font-medium leading-[1.125rem]">Pink_Yellow</p>
            </th>
              <td className="text-neutral-n-500 text-sm font-normal leading-5">
                3.47%
              </td>
            </div>
          </tr>
          <tr>
            <div className="flex justify-between border-b p-2">
            <th className="text-neutral-n-500 text-xs font-normal">
              Skins
              <p className="text-neutral-n-900 text-xs font-medium leading-[1.125rem]">Pink</p>
            </th>
              <td className="text-neutral-n-500 text-sm font-normal leading-5">
                5.40%
              </td>
            </div>
          </tr>
          <tr>
            <div className="flex justify-between border-b p-2">
            <th className="text-neutral-n-500 text-xs font-normal">
              Clothes
              <p className="text-neutral-n-900 text-xs font-medium leading-[1.125rem]">Orange-Background</p>
            </th>
              <td className="text-neutral-n-500 text-sm font-normal leading-5">
                2.93%
              </td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NftAssetAttributes;
