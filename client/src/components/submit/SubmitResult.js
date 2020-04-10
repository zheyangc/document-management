import React, { useContext } from "react";
import { DocumentContext } from "../../contexts/DocumentContext";

import { Alert } from "react-bootstrap";

const printResult = (array) => {
  let res = "";
  let length = array.length;
  for (let i = 0; i < length; i++) {
    res += array[i];
    if (i !== length - 1) {
      res += ", ";
    }
  }
  return res;
};

export const SubmitResult = () => {
  const { formState: state, formDispatch } = useContext(DocumentContext);

  const handleDismissSubmitResult = () => {
    formDispatch({ type: "RESET_FORM" });
  };

  if (state.submitStatus) {
    if (state.submitStatus.type === "SUCCEEDED") {
      return (
        <Alert
          variant="success"
          onClose={handleDismissSubmitResult}
          dismissible
        >
          <p>提交成功, 编号为: {"?"}</p>
        </Alert>
      );
    } else if (state.submitStatus.type === "FAILED") {
      return (
        <Alert variant="danger" onClose={handleDismissSubmitResult} dismissible>
          <p>提交失败, 错误: {"?"}</p>
        </Alert>
      );
    }
  }
  return null;
};
