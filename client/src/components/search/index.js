import React, {useEffect, useContext} from "react";
import { DocumentTable } from "./DocumentTable";
import { getDocuments } from "../../api/Documents";
import { DocumentContext } from "../../contexts/DocumentContext";
import { LoadingSpinner } from './LoadingSpinner';

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


  if (state.fetchStatus === "FETCHING"){
    return <LoadingSpinner />
  } else if (state.fetchStatus === "FETCHED_SUCCEEDED") {
    return <DocumentTable />;
  } else if (state.fetchStatus === "FETCHED_FAILED") {
    return (<h1>FAILED</h1>);
  } else  {
    return null;
  }
};
