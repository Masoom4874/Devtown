import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = (setting) => {
  const [currentPage, setCurrentPage] = useState(setting.initialPage);
  const totalPages = 10;

  const handlePageChange = (page) => {
      setCurrentPage(page);
      setting.paginate(setting.data,page)
    
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <a className="page-link" href="#" onClick={() => handlePageChange(i)}>
            {i}
          </a>
            
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="d-flex justify-content-between align-items-center main-width main-bg-color shadow rounded-4 px-4 ">
      <div className="">{`${currentPage} from ${totalPages}`}</div>
      <div className="mt-3">
        <nav aria-label="Page navigation example h-100">
          <ul className="pagination justify-content-end">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <AiOutlineArrowLeft />
              </a>
            </li>
            {generatePageNumbers()}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <AiOutlineArrowRight />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
