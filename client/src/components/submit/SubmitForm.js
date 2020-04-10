import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { DocumentType } from "../../constant/DocumentType";
import { DocumentContext } from "../../contexts/DocumentContext";
import {PostFormApi} from '../../api/PostForm'

export const SubmitForm = () => {
  const { formState: state, formDispatch } = useContext(DocumentContext);

  const handleChange = (event) => {
    formDispatch({
      type: "UPDATE_FORM",
      payload: {
        ...state,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleSubmit = async () => {
    formDispatch({ type: "SUBMIT_FORM", payload: state });
    let res = await PostFormApi(state);
    if (res.status) {
      formDispatch({ type: "SUBMIT_FORM_SUCCEEDED"});
    } else {
      formDispatch({ type: "SUBMIT_FORM_FAILED", payload: res.error });
    }
  };

  const isFormValid = () => {
    return state.userName && state.documentType && state.count && !isNaN(state.count)
  }

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
          {DocumentType.map((document) => (
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
        <Button disabled={!isFormValid()} onClick={handleSubmit}>提交</Button>
      </Form.Group>
    </Form>
  );
};
