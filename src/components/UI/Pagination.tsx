import css from "./Pagination.module.css";
interface Paginate {
  paginate: (pageNumber: number) => void;
}
const Pagination = ({ paginate }: Paginate) => {
  const pageNumbers = [];

  for (let i = 1; i <= 2; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${css["pagination-width"]}`}>
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              page {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
