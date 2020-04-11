import React, { useContext } from "react";
import { DocumentContext } from "../../contexts/DocumentContext";
import { Pagination } from "react-bootstrap";

export const PageSelection = () => {
  const { documentTableState: state, documentTableDispatch } = useContext(
    DocumentContext
  );
  const currentPage = state.page;
  const totalPage = state.totalPage;

  const canPreviousPage = currentPage !== 1;
  const canNextPage = currentPage !== totalPage;
  const gotoPage = (pageNumber) => {
    documentTableDispatch({ type: "UPDATE_PAGE", payload: pageNumber });
  };

  let pages = [];
  for (let pageNumber = 1; pageNumber <= totalPage; pageNumber++) {
    pages.push(
      <Pagination.Item
        key={pageNumber}
        onClick={() => gotoPage(pageNumber)}
        active={currentPage === pageNumber}
      >
        {pageNumber}
      </Pagination.Item>
    );
  }

  return (
    <Pagination>
      <Pagination.First
        onClick={() => gotoPage(1)}
        disabled={!canPreviousPage}
      />
      <Pagination.Prev
        onClick={() => gotoPage(currentPage - 1)}
        disabled={!canPreviousPage}
      />
      {pages}
      <Pagination.Next
        onClick={() => gotoPage(currentPage + 1)}
        disabled={!canNextPage}
      />
      <Pagination.Last
        onClick={() => gotoPage(totalPage)}
        disabled={!canNextPage}
      />
    </Pagination>
  );
};
