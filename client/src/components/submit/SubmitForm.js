import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { DocumentType } from "../../constant/DocumentType";
import { DocumentContext } from "../../contexts/DocumentContext";

export const SubmitForm = () => {
  const { formState, formDispatch } = useContext(DocumentContext);

  const handleChange = (event) => {
    formDispatch({
      type: "UPDATE_FORM",
      payload: {
        ...formState,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>类型</Form.Label>
        <Form.Control
          as="select"
          name="documentType"
          value={formState.documentType}
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
          value={formState.userName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>数量</Form.Label>
        <Form.Control
          name="count"
          value={formState.count}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Button>提交</Button>
      </Form.Group>
    </Form>
  );
};
