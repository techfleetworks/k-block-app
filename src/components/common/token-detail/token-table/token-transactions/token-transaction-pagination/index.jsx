import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import LeftArrow from "@/assets/chevron-left.svg";
import RightArrow from "@/assets/chevron-right.svg";

export default function Pagination({
  pageSize,
  pageIndex,
  pageCount,
  onPageChange,
  onPageSizeChange,
}) {
  return (
    <div className="flex justify-between items-center mt-5">
      <div>
        <span className="text-neutral-n-500 text-sm font-normal leading-5">
          Items per page
        </span>
        <select
          className="px-2 mx-2 py-1 rounded border"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          <option
            value="10"
            className="text-neutral-n-700 text-xs font-normal pr-2"
          >
            10
          </option>
          {/* Add more options as needed */}
        </select>
        <span className="text-neutral-n-500 text-sm font-normal leading-5">
          1 - 10 of 500 items
        </span>
        {/* {pageCount} */}
      </div>
      <div className="flex items-center">
        <button
          className={`px-2 py-1 rounded flex items-center ${
            pageIndex === 0 ? "text-neutral-n-500" : "text-primary-b-500"
          }`}
          onClick={() => onPageChange(pageIndex - 1)}
          disabled={pageIndex === 0}
        >
          <Image src={LeftArrow} alt="Left Arrow" width={20} height={20} />
          <span className="text-neutral-n-500 text-sm leading-5 font-normal">
            Previous
          </span>
        </button>
        <select
          className="px-2 py-1 rounded border mr-2"
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
        >
          <option value="1">1</option>
          {/* Add more options as needed */}
        </select>
        <p className="text-neutral-n-500 text-sm font-normal leading-5">
          of 20
        </p>
        <button
          className={`px-2 py-1 rounded flex items-center ${
            pageIndex === pageCount - 1
              ? "text-primary-b-500"
              : "text-neutral-n-500"
          }`}
          onClick={() => onPageChange(pageIndex + 1)}
          disabled={pageIndex === pageCount - 1}
        >
          <span className="text-neutral-b-500 text-sm leading-5 font-normal">
            Next
          </span>
          <Image src={RightArrow} alt="Left Arrow" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPageSizeChange: PropTypes.func.isRequired,
};
