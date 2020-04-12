export const initialDocumentTableState = {
    page: null,
    filter: null,
    columns: null,
    deleteRows: null
};

export const documentTableReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'UPDATE_PAGE': {
      return {
        ...state,
        page: action.payload,
      }
    }
    case 'UPDATE_FILTER': {
      return {
        ...state,
        filter: action.payload,
      }
    }
    case 'UPDATE_COLUMNS': {
      return {
        ...state,
        columns: action.payload,
      }
    }
    case 'DELETE_ROWS_TO_CONFIRM': {
      return {
        ...state,
        deleteRows: {
          deleteRowsStatus: "TO_CONFIRM",
          deleteRowsData: action.payload,
        }
      }
    }
    default:
      return { ...state };
  }
};
