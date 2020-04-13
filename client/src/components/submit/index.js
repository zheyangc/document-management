import React from "react";
import { SubmitForm } from "./SubmitForm";
import { SubmitResult } from "./SubmitResult";
import { Card } from "react-bootstrap";

export const Submit = () => (
  <Card>
    <Card.Body>
      <SubmitForm />
      <SubmitResult />
    </Card.Body>
  </Card>
);
