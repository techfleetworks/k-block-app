"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import Image from "next/image";
import Help from "@/components/common/help";

import Link from "next/link";


function formatUSD(val) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(val)
}


function formatNum(val) {
  return new Intl.NumberFormat("en-US").format(val)
}


export const columns = [
  {
    accessorKey: "token_name",
    header: "Token Name",
    cell: ({ row }) => {
      const token = row.getValue("token_name")
      return (
        <div className="flex items-center gap-3 pl-5 pr-0 py-5 table-link">
          <Image
            src={token.nft}
            width={32}
            height={32}
            alt={token.alt}
          />
          {token.name}
        </div>
      )
    },
  },
  {
    accessorKey: "symbol",
    header: "Symbol"
  },
  {
    accessorKey: "contactAddress",
    header: () => {
      return (
        <div className="pl-5">
          <Help
            label="Contract Address"
            tooltipText={
              <>
                Tooltip text here.{" "}
                <a className="underline" href="http://example.com/">
                  Learn more.
                </a>
              </>
            }
          />
        </div>
      )
    },
    cell: ({ row }) => {
      const address = row.getValue("contactAddress")
      return (
    <Link href="#" className="table-link">{address}</Link>
      )
    },
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue("quantity"))
      const formattedQuantity = formatNum(quantity)
      return <div>{formattedQuantity}</div>
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"))
      const formattedPrice = formatUSD(amount)
      return <div>{formattedPrice}</div>
    },
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("value"))
      const formattedValue = formatUSD(amount)
      return <div>{formattedValue}</div>
    },
  },
]


//// example for sorting
// <Button
// variant="ghost"
// onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
// >
// Quantity
// <ArrowUpDown className="ml-2 h-4 w-4" />
// </Button>