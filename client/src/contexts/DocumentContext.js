import React, { createContext, useReducer } from "react";
import { formReducer, initialFormState } from "../reducers/FormReducer";
import {
  documentFetchReducer,
  initialDocumentFetchState,
} from "../reducers/DocumentFetchReducer";
import {
  documentTableReducer,
  initialDocumentTableState,
} from '../reducers/DocumentTableReducer'

export const DocumentContext = createContext();

export const DocumentContextProvider = (props) => {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const [documentFetchState, documentFetchDispatch] = useReducer(
    documentFetchReducer,
    initialDocumentFetchState
  );
  const [documentTableState, documentTableDispatch] = useReducer(
    documentTableReducer,
    initialDocumentTableState,
  );

  return (
    <DocumentContext.Provider
      value={{
        formState,
        formDispatch,
        documentFetchState,
        documentFetchDispatch,
        documentTableState, 
        documentTableDispatch,
      }}
    >
      {props.children}
    </DocumentContext.Provider>
  );
};
