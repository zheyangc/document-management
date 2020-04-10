import React, { useContext } from "react";
import { DocumentContext } from "../../contexts/DocumentContext";
import { DocumentTypes } from "../../constant/DocumentTypes";

import { Alert } from "react-bootstrap";

export const SubmitResult = () => {
  const { formState: state, formDispatch } = useContext(DocumentContext);

  const handleDismissSubmitResult = () => {
    formDispatch({ type: "RESET_FORM" });
  };

  const printResult = () => {
    if (
      state.submitResult &&
      state.submitResult.data &&
      state.submitResult.data.length
    ) {
      let data = state.submitResult.data;
      let documentType = data[0].documentType;
      let documentName = DocumentTypes.filter(
        (item) => item.type === documentType
      )[0].name;
      let numberString =
        data[0].documentNumber +
        (data.length > 1 ? " - " + data[data.length - 1].documentNumber : "");
      return documentName.concat("的编号为: ", numberString, ".");
    }
    return "无法获取编号.";
  };

  if (state.submitStatus === "SUBMITTED") {
    if (state.submitResult.res === "SUCCEEDED") {
      return (
        <Alert
          variant="success"
          onClose={handleDismissSubmitResult}
          dismissible
        >
          <p>提交成功, {printResult()}</p>
        </Alert>
      );
    } else if (state.submitResult.res === "FAILED") {
      return (
        <Alert variant="danger" onClose={handleDismissSubmitResult} dismissible>
          <p>提交失败, {state.submitResult.error}</p>
        </Alert>
      );
    }
  }
  return null;
};
