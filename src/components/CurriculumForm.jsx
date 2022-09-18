import React, { Component } from "react";

class CurriculumForm extends Component {
  render() {
    const { children, onSubmit, onReset } = this.props;
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
}

export default CurriculumForm;
