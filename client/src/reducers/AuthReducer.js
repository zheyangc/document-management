export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const RESET = "RESET";

export const initialState = {
  isAuthenticated: false,
  userInfo: null,
  error: null,
};

export const authReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case LOGIN_SUCCEEDED: {
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    }
    case RESET: {
      return initialState;
    }
    default:
      return state;
  }
};
