import React, { createContext, useReducer } from "react";

import {
  documentTableReducer,
  initialDocumentTableState,
} from '../reducers/DocumentTableReducer'

export const TableContext = createContext();

export const TableContextProvider = (props) => {
  const [documentTableState, documentTableDispatch] = useReducer(
    documentTableReducer,
    initialDocumentTableState,
  );

  return (
    <TableContext.Provider
      value={{
        documentTableState, 
        documentTableDispatch,
      }}
    >
      {props.children}
    </TableContext.Provider>
  );
};
