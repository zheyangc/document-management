export const initialFormState = {
  userName: "",
  count: "",
  documentType: "",
};

export const formReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SUBMIT_FORM": {
      return initialFormState;
    }
    case "UPDATE_FORM": {
      let data = action.payload;
      return {
        ...state,
        userName: data.userName,
        count: data.count,
        documentType: data.documentType,
      }  
    }
    default:
      return {...state};
  }
};
