export const initialState = {
  inputValue: "",
  suggestions: []
};

function cityReducer(state, action) {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, inputValue: action.payload };

    case "SET_SUGGESTIONS":
      return { ...state, suggestions: action.payload };

    default:
      return state;
  }
}

export default cityReducer;
