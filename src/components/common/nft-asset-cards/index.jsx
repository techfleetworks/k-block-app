import React from "react";
import Image from "next/image";

export default function Cards({ data }) {
  return (
    <>
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
                  {item.img2 && (
                    <Image
                      src={item.img2}
                      alt="Verified"
                      width={20}
                      height={20}
                      className="ml-1"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
