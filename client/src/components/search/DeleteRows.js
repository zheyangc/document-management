import React, { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";
import { DocumentContext } from "../../contexts/DocumentContext";
import { Modal, Button } from "react-bootstrap";
import { DocumentTypeName } from "../../constant/DocumentTypes";
import { deleteDocuments } from "../../api/Documents";

export const DeleteRows = () => {
  const { documentFetchState } = useContext(DocumentContext);
  const { documentTableState, documentTableDispatch } = useContext(
    TableContext
  );

  const handleDeletion = async (documentsToDelete) => {
    documentTableDispatch({ type: "DELETING_ROWS" });
    let res = await deleteDocuments(documentsToDelete);
    if (res.status) {
      documentTableDispatch({ type: "DELETED_ROWS_SUCCEEDED", payload: res.data });
    } else {
      documentTableDispatch({ type: "DELETED_ROWS_FAILED", payload: res.error });
    }
  };
  const handleCancel = () => {
    documentTableDispatch({ type: "DELETE_ROWS_CANCELLED" });
  };
  const show =
    documentTableState.deleteRows &&
    documentTableState.deleteRows.status === "TO_CONFIRM";

  if (show) {
    const deleteCount = Object.keys(documentTableState.deleteRows.data).length;
    const documentsToDelete = [];
    for (let index in documentTableState.deleteRows.data) {
      documentsToDelete.push(documentFetchState.fetchResults.data[index]);
    }

    return (
      <>
        <Modal centered scrollable={true} show={show} onHide={handleCancel}>
          <Modal.Header>
            {"确认删除这 " + deleteCount + " 条数据吗? 数据一旦删除不可恢复."}
          </Modal.Header>
          <Modal.Body>
            <ul>
              {documentsToDelete.map((document) => {
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
            <Button variant="light" onClick={() => handleDeletion(documentsToDelete)}>
              确定
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return null;
};
