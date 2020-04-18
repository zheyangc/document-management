export const FETCH_DOCUMENTS = "FETCH_DOCUMENTS";
export const FETCH_DOCUMENTS_SUCCEEDED = "FETCH_DOCUMENTS_SUCCEEDED";
export const FETCH_DOCUMENTS_FAILED = "FETCH_DOCUMENTS_FAILED";
export const RESET = "RESET";

export const FETCH_STATUS = {
  FETCHING: "FETCHING",
  FETCHED_SUCCEEDED: "FETCHED_SUCCEEDED",
  FETCH_DOCUMENTS_FAILED: "FETCH_DOCUMENTS_FAILED",
  DEFAULT: "DEFAULT",
};

export const initialDocumentFetchState = {
  fetchStatus: FETCH_STATUS.DEFAULT,
  data: null,
  error: null,
};

export const documentFetchReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_DOCUMENTS: {
      return {
        ...state,
        fetchStatus: FETCH_STATUS.FETCHING,
      };
    }
    case FETCH_DOCUMENTS_SUCCEEDED: {
      return {
        ...initialDocumentFetchState,
        fetchStatus: FETCH_STATUS.FETCHED_SUCCEEDED,
        data: action.payload,
      };
    }
    case FETCH_DOCUMENTS_FAILED: {
      return {
        ...state,
        fetchStatus: FETCH_STATUS.FETCHED_FAILED,
        error: action.payload,
      };
    }
    case RESET: {
      return initialDocumentFetchState;
    }
    default:
      return state;
  }
};
