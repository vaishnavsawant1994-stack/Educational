import React from "react";
import "../../pages/Dashboard/sections/StudyMaterial.css";
const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}) => {
  const pages = [];

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {
    pages.push(i);
  }

  return (
    <div className="pagination">

      <button
        className="page-nav"
        disabled={
          currentPage === 1
        }
        onClick={() =>
          onPageChange(
            currentPage - 1
          )
        }
      >
        ←
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={
            currentPage === page
              ? "page-btn active-page"
              : "page-btn"
          }
          onClick={() =>
            onPageChange(page)
          }
        >
          {page}
        </button>
      ))}

      <button
        className="page-nav"
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          onPageChange(
            currentPage + 1
          )
        }
      >
        →
      </button>

    </div>
  );
};

export default Pagination;