import React from 'react';

const CityTablePagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <i className="fas fa-chevron-left"></i> Previous
      </button>
      <span>{`Page ${currentPage} of ${totalPages || 1}`}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages || totalPages === 0}>
        Next <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default CityTablePagination;