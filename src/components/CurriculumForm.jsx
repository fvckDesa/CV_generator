/* eslint-disable react/button-has-type */
import React from "react";

function CurriculumForm({ children, onSubmit, onReset }) {
  return (
    <form
      className="content-item__list-form"
      onReset={onReset}
      onSubmit={onSubmit}
    >
      <main>{children}</main>
      <footer>
        <button type="reset">Cancel</button>
        <button type="submit">Add</button>
      </footer>
    </form>
  );
}

export default CurriculumForm;
