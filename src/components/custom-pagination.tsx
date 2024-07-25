import React, { useState, useEffect } from "react";

interface PaginationProps {
  items: any[];
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({
  items,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    if (savedPage) {
      setCurrentPage(Number(savedPage));
      onPageChange(Number(savedPage));
    } else {
      onPageChange(1);
    }
  }, [onPageChange]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
    localStorage.setItem("currentPage", String(page));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > 5) {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 4;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 rounded ${
            i === currentPage
              ? "bg-[#f4f4f4]"
              : "bg-transparent hover:bg-[rgba(219,219,219,0.3)]"
          }`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex min-w-[328px] items-center justify-center my-4">
      <div className="border border-[#c9c9c9] rounded p-1">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          className=" px-3 py-1 rounded bg-[rgba(219,219,219,0.3)] hover:bg-[rgba(219,219,219,0.6)]"
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {currentPage > 3 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="mx-1 px-3 py-1 rounded bg-transparent hover:bg-[rgba(219,219,219,0.3)]"
            >
              1
            </button>
            <span>...</span>
          </>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages - 2 && (
          <>
            <span>...</span>
            <button
              onClick={() => handlePageChange(totalPages)}
              className="mx-1 px-3 py-1 rounded bg-transparent hover:bg-[rgba(219,219,219,0.3)]"
            >
              {totalPages}
            </button>
          </>
        )}
        <button
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          className=" px-3 py-1 rounded bg-[rgba(219,219,219,0.3)] hover:bg-[rgba(219,219,219,0.6)]"
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CustomPagination;
