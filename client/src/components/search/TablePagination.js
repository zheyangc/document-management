import React from "react";
import { Pagination } from "react-bootstrap";

export const TablePagination = ({
  tableState: {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  },
}) => {
  let pages = [];
  for (let pageNumber = 0; pageNumber < pageCount; pageNumber++) {
    pages.push(
      <Pagination.Item
        key={pageNumber}
        onClick={() => gotoPage(pageNumber)}
        active={pageNumber === pageIndex}
      >
        {pageNumber + 1}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.First
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      />
      <Pagination.Prev
        onClick={() => previousPage()}
        // disabled={!canPreviousPage}
      />
      <Pagination.Next
        onClick={() => nextPage()}
        // disabled={!canNextPage}
      />
      <Pagination.Last
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      />
    </Pagination>
  );
};
