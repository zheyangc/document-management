import React from "react";
import { Pagination, DropdownButton, Dropdown } from "react-bootstrap";

export const TablePagination = ({
  tableState: {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  },
}) => {
  return (
    <Pagination>
      <Pagination.First
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      />
      <Pagination.Prev
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      />
      <Pagination.Item>
        {"第 " + (pageIndex + 1) + "/" + pageCount + " 页"}
      </Pagination.Item>
      <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage} />
      <Pagination.Last
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      />
    </Pagination>
  );
};