import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cards({ title, data }) {
  return (
    <>
      <div className="header flex justify-between">
        <h2 className="text-neutral-n-700 text-[1.25rem] font-bold mb-6">
          {title}
        </h2>
      </div>

      <div>
        <div className="card-body flex gap-6 flex-wrap">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-solid border-custom-color bg-white max-w-240 h-278"
            >
              <div className="flex flex-col justify-between w-200 h-238 p-5 ">
                <div>
                  <Image
                    src={item.img}
                    width={200}
                    height={208}
                    alt="Variation Apes"
                    className="rounded-md mb-2"
                  />
                </div>
                <div className="flex items-center w-200 h-22">
                  <p className="text-base text-primary-b-500 ">
                    {item.assetID}
                  </p>
                  <Image
                    src={item.img2}
                    alt="Verified"
                    width={20}
                    height={20}
                    className="ml-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Link
          className="text-primary-b-500 border border-primary-b-500 text-sm font-medium leading-none px-4 py-2 rounded-md border-solid"
          href="/nft-collections"
        >
          View Collection
        </Link>
      </div>
    </>
  );
}
