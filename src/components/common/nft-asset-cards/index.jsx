import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cards({ title, data }) {
  return (
    <>
      <div className="header flex justify-between">
        <h2 className="text-base font-medium">{title}</h2>
      </div>

      <div>
        <div className="card-body flex gap-6 flex-wrap">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-xl p-5 border bg-white"
            >
              <Image
                src={item.img}
                width={200}
                height={200}
                alt="Variation Apes"
                className="rounded-md mb-2"
              />

              <div className="flex items-center">
                <p className="text-base text-primary-b-500 font-medium">
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
