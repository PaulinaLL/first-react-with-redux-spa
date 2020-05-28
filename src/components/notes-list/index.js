import React, { Component } from "react";
import { connect } from "react-redux";

class NotesList extends React.Component {
  render() {
    return (
      <div className="note-list">
        <h1>{this.props.title}</h1>
        <ul>
          {this.props.notesListData.map((item, index) => {
            return (
              <li key={index}>
                {" "}
                <label></label>
                <input type="checkbox" id={index} name="" value={item}></input>
                {item}
              </li>
            );
          })}
        </ul>
        <button className="button-delete"> delete</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    notesListData: state.notes,
  };
};

// const mapDispatchToProps = { increment, decrement, reset };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(NotesList);

// export default NotesList;
