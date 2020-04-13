export const initialDocumentTableState = {
    deleteRows: null
};

export const documentTableReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'DELETE_ROWS_TO_CONFIRM': {
      return {
        ...state,
        deleteRows: {
          status: "TO_CONFIRM",
          data: action.payload,
        }
      }
    }
    case 'DELETE_ROWS_CANCELLED': {
      return {
        ...state,
        deleteRows: null
      }
    }
    case 'DELETING_ROWS': {
      return {
        ...state,
        deleteRows: {
          status: "DELETING",
        }
      }
    }
    case 'DELETED_ROWS_SUCCEEDED': {
      return {
        ...state,
        deleteRows: {
          status: "DELETED_SUCCEEDED",
          data: action.payload
        }
      }
    }
    case 'DELETED_ROWS_FAILED': {
      return {
        ...state,
        deleteRows: {
          status: "DELETED_FAILED",
          error: action.payload
        }
      }
    }
    case 'RESET': {
      return initialDocumentTableState
    }
    default:
      return { ...state };
  }
};
