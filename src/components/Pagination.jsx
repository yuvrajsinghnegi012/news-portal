import React from 'react';

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="my-4 flex justify-center items-center">
      <button
        className="p-2 bg-blue-500 text-white rounded mr-2"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <span className="p-2">{page} of {totalPages}</span>
      <button
        className="p-2 bg-blue-500 text-white rounded ml-2"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
