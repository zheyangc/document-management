import React from "react";
import { SubmitForm } from "./SubmitForm";
import { SubmitResult } from "./SubmitResult";
import { Card } from 'react-bootstrap';

export const Submit = () => (
  <React.Fragment>
    <SubmitForm />
    <SubmitResult />
  </React.Fragment>
);
