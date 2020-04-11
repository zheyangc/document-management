import React, { createContext, useReducer } from "react";
import { formReducer, initialFormState } from "../reducers/FormReducer";
import {
  documentFetchReducer,
  initialDocumentFetchState,
} from "../reducers/DocumentFetchReducer";

export const DocumentContext = createContext();

export const DocumentContextProvider = (props) => {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const [documentState, documentDispatch] = useReducer(
    documentFetchReducer,
    initialDocumentFetchState
  );

  return (
    <DocumentContext.Provider
      value={{
        formState,
        formDispatch,
        documentState,
        documentDispatch,
      }}
    >
      {props.children}
    </DocumentContext.Provider>
  );
};
