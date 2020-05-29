import React, { Component } from "react";
import { connect } from "react-redux";

class DeleteNote extends Component {
  state = {
    checkedNotesToDelete: [],
  };

  render() {
    console.log(this.state.checkedNotesToDelete);
    // if (idToDelete is checked) {
    //   this.state.checkedNotesToDelete = [
    //     ...this.state.checkedNotesToDelete,
    //     idToDelete,
    //   ];
    // }
    return (
      <div>
        <button onClick={this.props.deleteNote(this.props.id)}>Delete</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: (id) => {
      dispatch({
        type: "delete_note",
        id: id,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(DeleteNote);
