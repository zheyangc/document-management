import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { DocumentTypes } from "../../constant/DocumentTypes";
import { DocumentContext } from "../../contexts/DocumentContext";
import { submitDocuments } from "../../api/Documents";
import {
  UPDATE_FORM,
  SUBMIT_FORM,
  SUBMIT_FORM_SUCCEEDED,
  SUBMIT_FORM_FAILED,
} from "../../reducers/DocumentSubmitReducer";

export const SubmitForm = () => {
  const { documentSubmitState: state, documentSubmitDispatch } = useContext(
    DocumentContext
  );

  const handleChange = (event) => {
    documentSubmitDispatch({
      type: UPDATE_FORM,
      payload: {
        ...state,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = async () => {
    documentSubmitDispatch({ type: SUBMIT_FORM, payload: state });
    let res = await submitDocuments(state);
    if (res.status) {
      documentSubmitDispatch({
        type: SUBMIT_FORM_SUCCEEDED,
        payload: res.data,
      });
    } else {
      documentSubmitDispatch({
        type: SUBMIT_FORM_FAILED,
        payload: res.error.toString(),
      });
    }
  };

  const isFormValid = () => {
    return (
      state.userName && state.documentType && state.count && !isNaN(state.count)
    );
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>类型</Form.Label>
        <Form.Control
          as="select"
          name="documentType"
          value={state.documentType}
          onChange={handleChange}
        >
          <option value="" disabled>
            请选择...
          </option>
          {DocumentTypes.map((document) => (
            <option key={document.type} value={document.type}>
              {document.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>取号人</Form.Label>
        <Form.Control
          name="userName"
          value={state.userName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>数量</Form.Label>
        <Form.Control
          name="count"
          value={state.count}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Button disabled={!isFormValid()} onClick={handleSubmit}>
          提交
        </Button>
      </Form.Group>
    </Form>
  );
};
