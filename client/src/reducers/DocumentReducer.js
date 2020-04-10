export const initialDocumentState = {
  fetchStatus: null,
  fetchResults: null,
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
      return initialDocumentState;
    }
    default:
      return { ...state };
  }
};
