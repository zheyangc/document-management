import React, {useContext} from "react";
import {Button } from "react-bootstrap";
import styled from "styled-components";
import { TableContext } from "../../contexts/TableContext";

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
  const { documentTableDispatch} = useContext(TableContext);

  const handleDelete = () => {
    documentTableDispatch({type:"DELETE_ROWS_TO_CONFIRM", payload: selectedRowIds});
  }

  return (
    <SelectionPanel variant="secondary">
      {"已选中 " + count + " 行"}
      {count > 0 && <Button variant="link" onClick={handleDelete}>点击删除</Button>}
    </SelectionPanel>
  );
};
