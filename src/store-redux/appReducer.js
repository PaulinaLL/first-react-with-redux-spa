const initialState = {
  notes: ["first note", "second note"],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "add_note":
      return {
        ...state,
        notes: [...state.notes, action.payload.note],
      };

    default:
      return state;
  }
}
export default appReducer;
