import React, {useEffect, useContext} from "react";
import { DocumentTable } from "./DocumentTable";
import { getDocuments } from "../../api/Documents";
import { DocumentContext } from "../../contexts/DocumentContext";

export const Search = () => {
  const { documentState: state, documentDispatch } = useContext(
    DocumentContext
  );

  useEffect(() => {
    async function fetchData() {
      documentDispatch({ type: "FETCH_DOCUMENTS" });
      const res = await getDocuments();
      if (res.status) {
        documentDispatch({
          type: "FETCH_DOCUMENTS_SUCCEEDED",
          payload: res.data,
        });
      } else {
        documentDispatch({
          type: "FETCH_DOCUMENTS_FAILED",
          payload: res.error,
        });
      }
    }
    fetchData();
  }, []);


  if (state.fetchStatus === "FETCHED_SUCCEEDED") {
    return (<DocumentTable></DocumentTable>);
  } else if (state.fetchStatus === "FETCHING"){
    return <h1>FETCHING</h1>;
  } else {
    return null;
  }
};
