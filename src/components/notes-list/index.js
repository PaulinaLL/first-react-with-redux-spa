import React, { Component } from "react";
import { connect } from "react-redux";

class NotesList extends Component {
  state = {
    checkNote: false,
  };

  handleCheckboxChange = (e) => {
    console.log("checked box ");
    this.setState({
      checkNote: e.target.checked,
    });
  };

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
                <input
                  type="checkbox"
                  id={index}
                  name=""
                  value={item}
                  checked={this.state.checkNote}
                  onChange={this.handleCheckboxChange}
                ></input>
                {item}
              </li>
            );
          })}
        </ul>
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
