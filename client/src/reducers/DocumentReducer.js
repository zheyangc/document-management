export const initialDocumentState = {
  documents: [],
  fetchStatus: null,
};

export const documentReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH_DOCUMENTS": {
      return {
        ...state,
        fetchStatus: "FETCHING",
      };
    }
    case "FETCH_DOCUMENTS_SUCCEEDED": {
      return {
        ...initialDocumentState,
        fetchStatus: "FETCHED_SUCCEEDED",
        documents: action.payload,
      };
    }
    case "FETCH_DOCUMENTS_FAILED": {
      return {
        ...state,
        fetchStatus: "FETCHED_FAILED",
      };
    }
    case "RESET": {
      return initialDocumentState;
    }
    default:
      return { ...state };
  }
};
