import React, { useContext } from "react";
import { DocumentContext } from "../../contexts/DocumentContext";
import { DocumentTypeName } from "../../constant/DocumentTypes";
import { Alert } from "react-bootstrap";
import {
  RESET_FORM,
  SUBMIT_STATUS,
} from "../../reducers/DocumentSubmitReducer";

export const SubmitResult = () => {
  const { documentSubmitState: state, documentSubmitDispatch } = useContext(
    DocumentContext
  );

  const handleDismissSubmitResult = () => {
    documentSubmitDispatch({ type: RESET_FORM });
  };

  const printResult = () => {
    if (state.data) {
      let data = state.data;
      let documentName = DocumentTypeName[data[0].documentType];
      let numberString =
        data[0].documentNumber +
        (data.length > 1 ? " - " + data[data.length - 1].documentNumber : "");
      return documentName.concat("的编号为: ", numberString, ".");
    }
    return "无法获取编号.";
  };

  if (state.submitStatus === SUBMIT_STATUS.SUBMITTED_SUCCEEDED) {
    return (
      <Alert variant="success" onClose={handleDismissSubmitResult} dismissible>
        <p>提交成功, {printResult()}</p>
      </Alert>
    );
  } else if (state.submitStatus === SUBMIT_STATUS.SUBMITTED_FAILED) {
    return (
      <Alert variant="danger" onClose={handleDismissSubmitResult} dismissible>
        <p>提交失败, {state.error}</p>
      </Alert>
    );
  }
  return null;
};
