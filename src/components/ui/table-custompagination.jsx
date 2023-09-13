import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import LeftArrow from "@/assets/chevron-left.svg";
import RightArrow from "@/assets/chevron-right.svg";

function CustomPagination({
  pageSize,
  pageIndex,
  pageCount,
  onPageChange,
  onPageSizeChange,
}) {
  return (
    <div className="flex justify-between items-center mt-5">
      <div className="flex items-center">
        <span className="text-neutral-n-500 text-sm font-normal leading-5 mr-2">
          Items per page
        </span>
        <select
          className="px-[8px] py-[6px] rounded-lg border text-neutral-n-500 text-sm font-normal leading-5 mr-2"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          <option
            value="10"
            className="text-neutral-n-700 text-xs font-normal pr-2"
          >
            10
          </option>
          <option
            value="25"
            className="text-neutral-n-700 text-xs font-normal pr-2"
          >
            25
          </option>
          {/* Add more options as needed */}
        </select>
        <span className="text-neutral-n-500 text-sm font-normal leading-5">
          1-25 of 500 items
        </span>
      </div>
      <div className="flex items-center">
        <button
          className={`px-2 py-1 text-neutral-n-500 text-sm font-normal leading-5 mr-2${
            pageIndex === 0 ? "text-neutral-n-500" : "text-primary-b-500"
          }`}
          onClick={() => onPageChange(pageIndex - 1)}
          disabled={pageIndex === 0}
        >
          <span className="flex item-center spaxe-x-2">
            <Image src={LeftArrow} alt="Left Arrow" className="w-5 h-5" />
            <span>Previous</span>
          </span>
        </button>
        <span className="px-[12px] py-[8px] rounded-lg border text-neutral-n-500 text-sm font-normal leading-5 mr-2">
          {pageIndex + 1}
        </span>
        <span className="text-neutral-n-500 text-sm font-normal leading-5 mr-2">
          of {pageCount}
        </span>
        <button
          className={`py-1 rounded-lg text-neutral-n-500 text-sm font-normal leading-5 mr-2${
            pageIndex === pageCount - 1
              ? "text-neutral-n-500"
              : "text-primary-b-500"
          }`}
          onClick={() => onPageChange(pageIndex + 1)}
          disabled={pageIndex === pageCount - 1}
        >
          <span className="flex item-center spaxe-x-2">
            <span>Next</span>
            <Image src={RightArrow} alt="Right Arrow" className="w-5 h-5" />
          </span>
        </button>
      </div>
    </div>
  );
}

CustomPagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};

export default CustomPagination;
