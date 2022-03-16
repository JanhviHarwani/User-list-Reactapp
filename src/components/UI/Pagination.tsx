/* eslint-disable jsx-a11y/anchor-is-valid */

import css from "./Pagination.module.css";
interface Paginate {
  currentPage: number;
  paginate: (pageNumber: number) => void;
}
const Pagination = ({ paginate, currentPage }: Paginate) => {
  const pageNumbers = [];

  for (let i = 1; i <= 2; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${css["pagination-width"]}`}>
            <a
              onClick={() => {
                paginate(number);
              }}
              className={`page-link ${
                currentPage === number ? `${css["page-link-active"]}` : " "
              }`}
            >
              page {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
