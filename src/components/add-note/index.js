import React, { Component } from "react";
import { connect } from "react-redux";

class AddNote extends Component {
  state = {
    noteInput: "",
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            //blocks from submitting empty input (also with white spaces only - .trim())
            if (!this.state.noteInput.trim()) {
              return false;
            }
            // add note
            this.props.addNewNote(this.state.noteInput);

            // clean up the input field after submitting
            this.setState({
              noteInput: "",
            });
          }}
        >
          <label>Add note </label>
          <input
            type="text"
            value={this.state.noteInput}
            onChange={(e) => {
              this.setState({
                noteInput: e.target.value,
              });
            }}
          ></input>
          <button>Add note</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewNote: (noteText) => {
      dispatch({
        type: "add_note",
        payload: {
          note: noteText,
        },
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(AddNote);
