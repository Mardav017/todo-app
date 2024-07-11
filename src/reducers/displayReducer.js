const initState = {
  modal: "hidden",
  backgroundBlur: "",
};

const displayReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_MODAL":
      return {
        ...state,
        modal: action.data,
      };
    case "SET_BACKGROUND_BLUR":
      return {
        ...state,
        backgroundBlur: action.data,
      };
    default:
      return state;
  }
};

export default displayReducer;
