export const initialFormState = {
  userName: "",
  count: "",
  documentType: "",
  submitStatus: null,
  submitResult: null,
};

export const formReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_FORM": {
      let data = action.payload;
      return {
        ...state,
        userName: data.userName,
        count: data.count,
        documentType: data.documentType,
      };
    }
    case "SUBMIT_FORM": {
      return {
        ...state,
        submitStatus: "SUBMITTING",
      };
    }
    case "SUBMIT_FORM_SUCCEEDED": {
      return {
        ...initialFormState,
        submitStatus: "SUBMITTED",
        submitResult: {
          res: "SUCCEEDED",
          data: action.payload,
        },
      };
    }
    case "SUBMIT_FORM_FAILED": {
      return {
        ...state,
        submitStatus: "SUBMITTED",
        submitResult: {
          res: "FAILED",
          error: action.payload,
        },
      };
    }
    case "RESET_FORM": {
      return initialFormState;
    }
    default:
      return { ...state };
  }
};
