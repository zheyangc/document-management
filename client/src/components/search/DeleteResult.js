import React, { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import { DocumentContext } from "../../contexts/DocumentContext";
import { Modal, Button } from "react-bootstrap";
import { LoadingSpinner } from './LoadingSpinner';

export const DeleteResult = () => {
  const { documentFetchState } = useContext(DocumentContext);
  const { documentTableState, documentTableDispatch } = useContext(
    TableContext
  );

  const handleDeletion = () => {
    documentTableDispatch({ type: "DELETING_ROWS" });

  };
  const handleCancel = () => {
    documentTableDispatch({ type: "DELETE_ROWS_CANCELLED" });
  };
  const show =
    documentTableState.deleteRows &&
    documentTableState.deleteRows.status === ("DELETING" || "DELETED_SUCCEEDED" || "DELETED_FAILED");

  if (show) {

    return (
      <>
        <Modal centered scrollable={true} show={show}>
          <Modal.Header>
            {documentTableState.deleteRows.status === ("DELETING") &&  "正在删除中..."}
            {documentTableState.deleteRows.status === ("DELETED_SUCCEEDED") && "删除成功"}
            {documentTableState.deleteRows.status === ("DELETED_FAILED") && "删除失败"}
          </Modal.Header>
          <Modal.Body>
            {documentTableState.deleteRows.status === ("DELETING") &&  <LoadingSpinner />}
            {documentTableState.deleteRows.status === ("DELETED_SUCCEEDED") && "删除成功"}
            {documentTableState.deleteRows.status === ("DELETED_FAILED") && "删除失败"}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCancel}>
              刷新列表
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return null;
};
