export const UPDATE_FORM = "UPDATE_FORM";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const SUBMIT_FORM_SUCCEEDED = "SUBMIT_FORM_SUCCEEDED";
export const SUBMIT_FORM_FAILED = "SUBMIT_FORM_FAILED";
export const RESET_FORM = "RESET_FORM";

export const SUBMIT_STATUS = {
  SUBMITTING: "SUBMITTING",
  SUBMITTED_SUCCEEDED: "SUBMITTED_SUCCEEDED",
  SUBMITTED_FAILED: "SUBMITTED_FAILED",
  DEFAULT: "DEFAULT",
};

export const initialState = {
  userName: "",
  count: "",
  documentType: "",
  submitStatus: SUBMIT_STATUS.DEFAULT,
  data: null,
  error: null,
};

export const documentSubmitReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_FORM: {
      let data = action.payload;
      return {
        ...state,
        userName: data.userName,
        count: data.count,
        documentType: data.documentType,
      };
    }
    case SUBMIT_FORM: {
      return {
        ...state,
        submitStatus: SUBMIT_STATUS.SUBMITTING,
      };
    }
    case SUBMIT_FORM_SUCCEEDED: {
      return {
        ...initialState,
        submitStatus: SUBMIT_STATUS.SUBMITTED_SUCCEEDED,
        data: action.payload,
      };
    }
    case SUBMIT_FORM_FAILED: {
      return {
        ...state,
        submitStatus: SUBMIT_STATUS.SUBMITTED_FAILED,
        error: action.payload,
      };
    }
    case RESET_FORM: {
      return initialState;
    }
    default:
      return state;
  }
};
