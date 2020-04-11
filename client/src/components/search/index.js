import React, { useEffect, useContext } from "react";
import { DocumentTable } from "./DocumentTable";
import { getDocuments } from "../../api/Documents";
import { DocumentContext } from "../../contexts/DocumentContext";
import { LoadingSpinner } from "./LoadingSpinner";
import { PageSelection } from "./TablePage";

export const Search = () => {
  const { documentFetchState: state, documentFetchDispatch } = useContext(
    DocumentContext
  );

  useEffect(() => {
    async function fetchData() {
      documentFetchDispatch({ type: "FETCH_DOCUMENTS" });
      const res = await getDocuments();
      if (res.status) {
        documentFetchDispatch({
          type: "FETCH_DOCUMENTS_SUCCEEDED",
          payload: res.data,
        });
      } else {
        documentFetchDispatch({
          type: "FETCH_DOCUMENTS_FAILED",
          payload: res.error,
        });
      }
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <PageSelection />
      {state.fetchStatus === "FETCHING" && <LoadingSpinner />}
      {state.fetchStatus === "FETCHED_SUCCEEDED" && <DocumentTable />}
      {state.fetchStatus === "FETCHED_FAILED" && <h1>FAILED</h1>}
    </React.Fragment>
  );
};
