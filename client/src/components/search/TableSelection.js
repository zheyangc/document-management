import React from "react";
import { Alert, Button } from "react-bootstrap";
import styled from "styled-components";

const SelectionPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0px;
  height: 40px;
`;

export const TableSelection = ({
  tableState: {
    state: { selectedRowIds },
  },
}) => {
  const count = Object.keys(selectedRowIds).length;
  return (
    <SelectionPanel variant="secondary">
      {"已选中 " + count + " 行"}
      {count > 0 && <Button variant="link" onClick={() => alert("click")}>点击删除</Button>}
    </SelectionPanel>
  );
};
