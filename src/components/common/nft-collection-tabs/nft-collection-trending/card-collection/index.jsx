import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card(props) {
  return (
    <div className="rounded-xl p-5 border w-fit mr-6">
      <Image
        src={props.nft ? props.nft : <p></p>}
        alt={props.alt ? props.alt : null}
        width={200}
        height={208}
      />
      <div className="flex items-center">
        <h2 className="text-xl text-primary-b-500 leading-6 font-semibold my-4 hover:text-neutral-n-50">
          <Link href="/nft-asset">{props.id ? props.id : null}</Link>
        </h2>
        <Image
          src={props.logo ? props.logo : <p></p>}
          alt="Verified Icon"
          width={props.width ? 20 : 0}
          height={props.height ? 20 : 0}
          className="ml-1"
        />
      </div>
    </div>
  );
}
