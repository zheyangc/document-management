import React from "react";
import {
  Pagination,
  DropdownButton,
  Dropdown,
  ButtonToolbar,
  ButtonGroup,
  Button,
} from "react-bootstrap";

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
  const pageSizeOptions = [10, 20, 50, 100];
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="mr-2" aria-label="First group">
        <Button
          variant="light"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </Button>
        <Button
          variant="light"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </Button>
        <Button variant="light">
          {"第 " + (pageIndex + 1) + " / " + pageCount + " 页"}
        </Button>
        <Button
          variant="light"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </Button>
        <Button
          variant="light"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Second group">
        <DropdownButton
          id="dropdown-basic-button"
          title={"每页显示 " + pageSize + " 条内容"}
          variant="light"
        >
          {pageSizeOptions.map((sizeOption) => (
            <Dropdown.Item onClick={() => setPageSize(sizeOption)}>
              {"每页显示 " + sizeOption + " 条内容"}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </ButtonGroup>
    </ButtonToolbar>
  );
};
