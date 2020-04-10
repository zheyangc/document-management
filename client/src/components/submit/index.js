import React from "react";
import { SubmitForm } from "./SubmitForm";
import { SubmitResult } from "./SubmitResult";
import { Card } from 'react-bootstrap';

export const Submit = () => (
  <Card className="mx-auto my-5 w-75" style={{ margin: 'auto'}}>
    <Card.Body>
      <SubmitForm />
      <SubmitResult />
    </Card.Body>
  </Card>
);
