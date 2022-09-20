import React from "react";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function AddItemBtn({ onClick }) {
  return (
    <button
      type="button"
      key="add-btn"
      className="add-item-btn"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faPlus} />
      <span>Add</span>
    </button>
  );
}

export default AddItemBtn;
