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
    case "delete_note":
      return {
        ...state,
        notes: [state.notes.filter((item) => item.id !== action.id)],
      };

    default:
      return state;
  }
}
export default appReducer;
