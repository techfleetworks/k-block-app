import React from "react";
import Image from "next/image";

export default function PictureCard(props) {
  return (
    <div className="w-[305px] h-[404px] rounded-xl p-5 border mr-7">
      <Image
        src={props.image ? props.image : <p></p>}
        alt={props.alt ? props.alt : null}
        width={264.9}
        height={264.9}
      />
      <div className="flex items-center">
        <h2 className="text-xl text-primary-b-500 leading-6 font-semibold my-4 hover:text-neutral-n-50">
          {props.id ? props.id : null}
        </h2>
        <Image
          src={props.image2 ? props.image2 : <p></p>}
          alt="Verified Icon"
          width={props.width ? 20 : 0}
          height={props.height ? 20 : 0}
          className="ml-1"
        />
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-neutral-n-500 text-xs font-[400] leading-3">
            Attributes
          </p>
          <p className="text-neutral-n-700 text-xl font-[700] leading-6">10</p>
        </div>
        <div>
          <p className="text-neutral-n-500 text-xs font-[400] leading-3">
            Created Time
          </p>
          <p className="text-neutral-n-700 text-xl font-[700] leading-6">
            12/10/2023
          </p>
        </div>
      </div>
    </div>
  );
}
