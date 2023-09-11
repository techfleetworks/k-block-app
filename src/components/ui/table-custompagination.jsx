import React from "react";
import PropTypes from "prop-types";

function CustomPagination({
  pageSize,
  pageIndex,
  pageCount,
  onPageChange,
  onPageSizeChange,
}) {
  return (
    <div className="flex items-center space-x-4">
      <button
        className={`px-2 py-1 rounded ${
          pageIndex === 0
            ? "bg-gray-300 text-gray-500"
            : "bg-blue-500 text-white"
        }`}
        onClick={() => onPageChange(pageIndex - 1)}
        disabled={pageIndex === 0}
      >
        Previous
      </button>
      <span>
        Page {pageIndex + 1} of {pageCount}
      </span>
      <button
        className={`px-2 py-1 rounded ${
          pageIndex === pageCount - 1
            ? "bg-gray-300 text-gray-500"
            : "bg-blue-500 text-white"
        }`}
        onClick={() => onPageChange(pageIndex + 1)}
        disabled={pageIndex === pageCount - 1}
      >
        Next
      </button>
      <select
        className="px-2 py-1 rounded border"
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
      >
        <option value="10">10 per page</option>
        <option value="25">25 per page</option>
        {/* Add more options as needed */}
      </select>
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
