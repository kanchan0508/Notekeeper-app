import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange, className }) => {
  return (
    <div className={`flex justify-center items-center mt-[8%] ${className}`}>
      <button
        className="px-4 py-2 bg-gray-300 rounded mr-2"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        className="px-4 py-2 bg-gray-300 rounded"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
