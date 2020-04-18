import React, { useEffect, useContext } from "react";
import { DocumentTable } from "./DocumentTable";
import { getDocuments } from "../../api/Documents";
import { DocumentContext } from "../../contexts/DocumentContext";
import { LoadingSpinner } from "./LoadingSpinner";
import {
  FETCH_DOCUMENTS,
  FETCH_STATUS,
  FETCH_DOCUMENTS_SUCCEEDED,
  FETCH_DOCUMENTS_FAILED,
} from "../../reducers/DocumentFetchReducer";

export const Search = () => {
  const { documentFetchState: state, documentFetchDispatch } = useContext(
    DocumentContext
  );

  useEffect(() => {
    async function fetchData() {
      documentFetchDispatch({ type: FETCH_DOCUMENTS });
      const res = await getDocuments();
      if (res.status) {
        documentFetchDispatch({
          type: FETCH_DOCUMENTS_SUCCEEDED,
          payload: res.data,
        });
      } else {
        documentFetchDispatch({
          type: FETCH_DOCUMENTS_FAILED,
          payload: res.error,
        });
      }
    }
    fetchData();
  }, [documentFetchDispatch]);

  return (
    <React.Fragment>
      {state.fetchStatus === FETCH_STATUS.FETCHING && <LoadingSpinner />}
      {state.fetchStatus === FETCH_STATUS.FETCHED_SUCCEEDED && (
        <DocumentTable />
      )}
      {state.fetchStatus === FETCH_STATUS.FETCH_DOCUMENTS_FAILED && (
        <h1>FAILED</h1>
      )}
    </React.Fragment>
  );
};
