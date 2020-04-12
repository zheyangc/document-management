import React, { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import { DocumentContext } from "../../contexts/DocumentContext";
import { Modal, Button, ModalDialog } from "react-bootstrap";
import { DocumentTypeName } from "../../constant/DocumentTypes";

export const DeleteRows = () => {
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
    documentTableState.deleteRows.status === "TO_CONFIRM";

  if (show) {
    const deleteCount = Object.keys(documentTableState.deleteRows.data).length;
    const deleteDocuments = [];
    for (let index in documentTableState.deleteRows.data) {
      deleteDocuments.push(documentFetchState.fetchResults.data[index]);
    }

    return (
      <>
        <Modal centered scrollable={true} show={show} onHide={handleCancel}>
          <Modal.Header>
            {"确认删除这 " + deleteCount + " 条数据吗? 数据一旦删除不可恢复."}
          </Modal.Header>
          <Modal.Body>
            <ul>
              {deleteDocuments.map((document) => {
                let documentName = DocumentTypeName[document.documentType];
                let display =
                  documentName +
                  "-" +
                  document.documentNumber +
                  "-" +
                  document.userName;
                return <li key={document._id}>{display}</li>;
              })}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleCancel}>
              取消
            </Button>
            <Button variant="light" onClick={handleDeletion}>
              确定
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return null;
};
