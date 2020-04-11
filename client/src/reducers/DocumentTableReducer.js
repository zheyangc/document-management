export const initialDocumentTableState = {
    page: 1,
    pageSize: 20,
    totalPage: 1,
    createDateFilter: null,
    userNameFilter: null,
    documentTypeFilter: null,
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
    case 'UPDATE_PAGE_SIZE': {
      return {
        ...state,
        pageSize: action.payload,
      }
    }
    case 'UPDATE_PAGE_COUNT': {
      return {
        ...state,
        pageCount: action.payload,
      }
    }
    default:
      return { ...state };
  }
};
