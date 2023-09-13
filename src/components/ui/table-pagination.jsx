
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons"

import LeftArrow from "@/assets/chevron-left.svg";
import RightArrow from "@/assets/chevron-right.svg";

import Image from "next/image";


import { Button } from "@/components/ui/button"


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export function DataTablePagination({ table }) {

  console.log(table.getState())

  return (
    <div className="flex items-center justify-between px-2 mt-5">
      {/* <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div> */}
      <div className="flex justify-between space-x-6 lg:space-x-8">

        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Items per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={value => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[5, 10, 20, 30, 40, 50].map(pageSize => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm font-medium">x-y of z items</p>
        </div>



        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            className="h-8  p-0 "
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
          <Image src={LeftArrow} alt="Left Arrow" width={20} height={20} />

            <p  className="text-neutral-n-500">Previous</p>
          </Button>

          <div className="flex w-[100px] items-center justify-center text-sm font-medium">{table.getState().pagination.pageIndex + 1}{" of "}
            {table.getPageCount()}</div>

          <Button
            variant="ghost"
            className="h-8  p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <p className="text-primary-b-500">Next</p>
          <Image src={RightArrow} alt="Rigth Arrow" width={20} height={20} />

          </Button>
        </div>
        
      </div>
    </div>       
  )
}
