import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Metadata(props) {
  const codeSnippet = `{
  "name": "Variation Apes #6",
  "symbol": "SCS",
  "description": "Get paid for your contributions to the DAO. Contributing members will be receiving a monthly salary.",
  "seller_fee_basis_points": 777,
  "image": "https://variationapes.com/collection/6.png",
  "external_url": "https://variationapes.com/",
  "edition": 6,
  "collection": {
    "name": "Variation Apes",
    "family": "Variation Apes"
  },
  "attributes": [
    {
      "trait_type": "Hat",
      "value": "Purple_Cask"
    },
    {
      "trait_type": "Background",
      "value": "Pink_Yellow"
    },
    {
      "trait_type": "Skins",
      "value": "Pink"
    },
    {
      "trait_type": "Clothes",
      "value": "Orange_Background"
    },
    {
      "trait_type": "Hairs",
      "value": "Pink"
    },
    {
      "trait_type": "Eyes",
      "value": "Normal"
    },
    {
      "trait_type": "Mouth",
      "value": "Shocked"
    }
  ]
  "moreAttributes": [
    {
      "trait_type": "Hat",
      "value": "Purple_Cask"
    },
    {
      "trait_type": "Background",
      "value": "Pink_Yellow"
    },
    {
      "trait_type": "Skins",
      "value": "Pink"
    },
    {
      "trait_type": "Clothes",
      "value": "Orange_Background"
    },
    {
      "trait_type": "Hairs",
      "value": "Pink"
    },
    {
      "trait_type": "Eyes",
      "value": "Normal"
    },
    {
      "trait_type": "Mouth",
    }
  ]
}`;

  const codeLines = codeSnippet.split("\n");

  return (
    <>
      <div>
        <h2 className="leading-normal text-neutral-n-700 text-xl font-semibold rounded-tl-none mb-5">
          {props.title}
        </h2>
        <h2 className="leading-normal rounded-tl-none mb-5">
          <span className="text-default">{props.subtitle}</span>{" "}
          <span className="text-primary-b-500">{props.subtitleLink}</span>
        </h2>
        <div className="rounded-xl border overflow-y-scroll h-[733px]">
          <Table className="border-neutral-table-border">
            <TableBody>
              {codeLines.map((line, index) => (
                <div key={index} className="flex">
                  <div className="w-16 bg-primary-b-100 flex justify-center items-end">
                    <p className="text-neutral-n-800 text-xs font-normal ">
                      {index + 1}
                    </p>
                  </div>
                  <div className="flex-1 bg-primary-b-100 items-end">
                    <pre className="text-neutral-n-500 text-xs font-normal pl-0 pr-[31px] pl-4  ">
                      {line}
                    </pre>
                  </div>
                </div>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
