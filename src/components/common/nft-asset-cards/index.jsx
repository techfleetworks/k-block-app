import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cards({ title, data }) {
  return (
    <>
      <div className="header flex justify-between">
        <h2 className="text-xl leading-6 font-semibold">{title}</h2>
      </div>

      <div>
        <div className="card-body flex flex-wrap xl:flex-nowrap lg:flex-nowrap">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-4 border mx-6 mb-8 bg-white"
            >
              <Image
                src={item.img}
                width={264.9}
                height={264.9}
                alt="Variation Apes"
                className="rounded-xl mb-2"
              />

              <div className="flex items-center">
                <p className="text-xl text-primary-b-500 leading-6 font-semibold">
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
          ))}
        </div>
      </div>

      <Link
        className="text-primary-b-500 border border-primary-b-500 text-sm font-medium leading-none px-4 py-2 rounded-md border-solid"
        href="/"
      >
        View Collection
      </Link>
    </>
  );
}
