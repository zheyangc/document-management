export const initialDocumentFetchState = {
  fetchStatus: null,
  fetchResults: null,
};

export const documentFetchReducer = (state, action) => {
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
        ...initialDocumentFetchState,
        fetchStatus: "FETCHED_SUCCEEDED",
        fetchResults: {
          data: action.payload,
        },
      };
    }
    case "FETCH_DOCUMENTS_FAILED": {
      return {
        ...state,
        fetchStatus: "FETCHED_FAILED",
        fetchResults: {
          error: action.payload,
        },
      };
    }
    case "RESET": {
      return initialDocumentFetchState;
    }
    default:
      return { ...state };
  }
};
