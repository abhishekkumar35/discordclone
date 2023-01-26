// import authActions from "../actions/authActions";

const initState = {
  userDetails: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "DUMMY":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
