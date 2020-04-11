import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const TableSize = ({
  tableState: {
    setPageSize,
    state: { pageSize },
  },
}) => {
  const pageSizeOptions = [10, 20, 50, 100];
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={"每页展示 " + pageSize + " 条内容"}
    >
      {pageSizeOptions.map((sizeOption) => (
        <Dropdown.Item onClick={() => setPageSize(sizeOption)}>
          {"每页展示 " + sizeOption + " 条内容"}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};
