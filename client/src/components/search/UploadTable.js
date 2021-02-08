import React, { useState, useReducer, useContext } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import { DocumentContext } from "../../contexts/DocumentContext";
import { getDocuments, uploadDocument } from "../../api/Documents";
import { DocumentNameType } from "../../constant/DocumentTypes";
import Papa from "papaparse";
import moment from "moment";

const TO_UPLOAD_DOCUMENT = "TO_UPLOAD_DOCUMENT";
const UPLOADING_DOCUMENTS = "UPLOADING_DOCUMENTS";
const UPLOAD_DOCUMENTS_SUCCEEDED = "UPLOAD_DOCUMENTS_SUCCEEDED";
const UPLOAD_DOCUMENTS_FAILED = "UPLOAD_DOCUMENTS_FAILED";
const UPLOAD_DOCUMENT_RESET = "UPLOAD_DOCUMENT_RESET";

const UPLOAD_STATUS = {
  DEFAULT: "DEFAULT",
  TO_UPLOAD: "TO_UPLOAD",
  UPLOADING: "UPLOADING_DOCUMENT",
  UPLOADED_SUCCESS: "UPLOADED_DOCUMENT_SUCCESS",
  UPLOADED_FAILED: "UPLOADED_DOCUMENT_FAILED",
};

const initialUploadState = {
  status: UPLOAD_STATUS.DEFAULT,
};

const documentUploadReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case TO_UPLOAD_DOCUMENT: {
      return {
        status: UPLOAD_STATUS.TO_UPLOAD,
      };
    }
    case UPLOADING_DOCUMENTS: {
      return {
        status: UPLOAD_STATUS.UPLOADING,
      };
    }
    case UPLOAD_DOCUMENTS_SUCCEEDED: {
      return {
        status: UPLOAD_STATUS.UPLOADED_SUCCESS,
        data: action.payload,
      };
    }
    case UPLOAD_DOCUMENTS_FAILED: {
      return {
        status: UPLOAD_STATUS.UPLOADED_FAILED,
        error: action.payload,
      };
    }
    case UPLOAD_DOCUMENT_RESET: {
      return initialUploadState;
    }
    default:
      return state;
  }
};

export const UploadTable = () => {
  const { documentFetchDispatch } = useContext(DocumentContext);
  const [file, setFile] = useState({});
  const [uploadState, uploadDispatch] = useReducer(
    documentUploadReducer,
    initialUploadState
  );

  const handleToUpload = () => {
    uploadDispatch({
      type: TO_UPLOAD_DOCUMENT,
    });
  };

  const handleCancelUpload = () => {
    uploadDispatch({
      type: UPLOAD_DOCUMENT_RESET,
    });
    setFile({});
  };

  const handleSelectFile = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    uploadDispatch({
      type: UPLOADING_DOCUMENTS,
    });

    Papa.parse(file, {
      complete: async (results, file) => {
        await handleSubmit(
          results.data.slice(1).map((result) => ({
            documentType: DocumentNameType[result[0]],
            documentNumber: result[1],
            userName: result[2],
            createTime: moment(result[3], "YYYY/MM/DD hh:mm:ss").toISOString(),
          }))
        );
      },
    });
  };

  const handleSubmit = async (documents) => {
    console.log(documents);

    const res = await uploadDocument(documents);
    console.log(res);
    if (res.data.err) {
      uploadDispatch({
        type: UPLOAD_DOCUMENTS_FAILED,
        payload: { error: res.data.err },
      });
    } else {
      uploadDispatch({
        type: UPLOAD_DOCUMENTS_SUCCEEDED,
      });
    }
  };

  const handleRefreshTable = async () => {
    uploadDispatch({
      type: UPLOAD_DOCUMENT_RESET,
    });
    setFile({});
    documentFetchDispatch({ type: "FETCH_DOCUMENTS" });
    const res = await getDocuments();
    if (res.status) {
      documentFetchDispatch({
        type: "FETCH_DOCUMENTS_SUCCEEDED",
        payload: res.data,
      });
    } else {
      documentFetchDispatch({
        type: "FETCH_DOCUMENTS_FAILED",
        payload: res.error,
      });
    }
  };

  return (
    <>
      <Modal
        centered
        scrollable={true}
        show={uploadState.status === UPLOAD_STATUS.TO_UPLOAD}
        onHide={handleCancelUpload}
      >
        <Modal.Header>上传表格</Modal.Header>
        <Modal.Body>
          <input type="file" onChange={handleSelectFile} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleCancelUpload}>
            取消
          </Button>
          <Button variant="light" onClick={handleUpload}>
            上传
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        centered
        scrollable={true}
        show={uploadState.status === UPLOAD_STATUS.UPLOADING}
      >
        <Modal.Header>上传表格</Modal.Header>
        <Modal.Body>
          上传中...
          <Spinner animation="border" role="status" />
        </Modal.Body>
      </Modal>

      <Modal
        centered
        scrollable={true}
        show={
          uploadState.status === UPLOAD_STATUS.UPLOADED_FAILED ||
          uploadState.status === UPLOAD_STATUS.UPLOADED_SUCCESS
        }
        onHide={handleRefreshTable}
      >
        <Modal.Header>上传表格</Modal.Header>
        <Modal.Body>
          {uploadState.status === UPLOAD_STATUS.UPLOADED_FAILED &&
            `上传失败, 错误: ${JSON.stringify(uploadState.error)}`}
          {uploadState.status === UPLOAD_STATUS.UPLOADED_SUCCESS && "上传成功"}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success" onClick={handleRefreshTable}>
            确定
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="light" onClick={handleToUpload}>
        上传表格
      </Button>
    </>
  );
};
