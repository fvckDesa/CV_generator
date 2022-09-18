import React, { Component } from "react";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class AddItemBtn extends Component {
  render() {
    return (
      <button
        key="add-btn"
        className="add-item-btn"
        onClick={this.props.onClick}
      >
        <FontAwesomeIcon icon={faPlus} />
        <span>Add</span>
      </button>
    );
  }
}

export default AddItemBtn;
