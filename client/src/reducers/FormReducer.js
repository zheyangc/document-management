export const initialFormState = {
  userName: "",
  count: "",
  documentType: "",
  submitStatus: null,
};

export const formReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SUBMIT_FORM": {
      return {
        ...state,
        submitStatus: {
          type: "SUBMITTING"
        }
      };
    }
    case "SUBMIT_FORM_SUCCEEDED": {
      return {...initialFormState};
    }
    case "SUBMIT_FORM_FAILED": {
      return {
        ...state,
        submitStatus: {
          type: "FAILED",
          error: "",
        }
      };
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
