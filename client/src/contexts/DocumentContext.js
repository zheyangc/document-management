import React, { createContext, useReducer } from "react";
import {
  documentSubmitReducer,
  initialState as initialDocumentSubmitState,
} from "../reducers/DocumentSubmitReducer";
import {
  documentFetchReducer,
  initialDocumentFetchState,
} from "../reducers/DocumentFetchReducer";

export const DocumentContext = createContext();

export const DocumentContextProvider = (props) => {
  const [documentSubmitState, documentSubmitDispatch] = useReducer(
    documentSubmitReducer,
    initialDocumentSubmitState
  );
  const [documentFetchState, documentFetchDispatch] = useReducer(
    documentFetchReducer,
    initialDocumentFetchState
  );

  return (
    <DocumentContext.Provider
      value={{
        documentSubmitState,
        documentSubmitDispatch,
        documentFetchState,
        documentFetchDispatch,
      }}
    >
      {props.children}
    </DocumentContext.Provider>
  );
};
