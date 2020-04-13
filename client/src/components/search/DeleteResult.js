import React, { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import { DocumentContext } from "../../contexts/DocumentContext";
import { Modal, Button } from "react-bootstrap";
import { LoadingSpinner } from "./LoadingSpinner";

export const DeleteResult = () => {
  const { documentFetchState } = useContext(DocumentContext);
  const { documentTableState, documentTableDispatch } = useContext(
    TableContext
  );

  const handleTableRefresh = () => {};
  const cancelFailed = () => {};

  const show =
    documentTableState.deleteRows &&
    (documentTableState.deleteRows.status === "DELETING" ||
      documentTableState.deleteRows.status === "DELETED_SUCCEEDED" ||
      documentTableState.deleteRows.status === "DELETED_FAILED");
  if (show) {
    return (
      <>
        <Modal centered scrollable={true} show={show}>
          <Modal.Header>
            {documentTableState.deleteRows.status === "DELETING" &&
              "正在删除中..."}
            {documentTableState.deleteRows.status === "DELETED_SUCCEEDED" &&
              "删除成功"}
            {documentTableState.deleteRows.status === "DELETED_FAILED" &&
              "删除失败"}
          </Modal.Header>
          <Modal.Body>
            {documentTableState.deleteRows.status === "DELETING" && (
              <LoadingSpinner />
            )}
            {documentTableState.deleteRows.status === "DELETED_SUCCEEDED" &&
              "点击刷新列表"}
            {documentTableState.deleteRows.status === "DELETED_FAILED" &&
              "请稍后再试"}
          </Modal.Body>
          <Modal.Footer>
            {documentTableState.deleteRows.status === "DELETED_SUCCEEDED" && (
              <Button variant="success" onClick={handleTableRefresh}>
                刷新列表
              </Button>
            )}
            {documentTableState.deleteRows.status === "DELETED_FAILED" && (
              <Button variant="success" onClick={cancelFailed}>
                取消
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return null;
};
