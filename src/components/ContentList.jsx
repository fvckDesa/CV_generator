import React, { Component } from "react";
//style
import "style/ContentItem.css";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AutoResize from "components/AutoResize";
//icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faPenToSquare,
  faXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const DEFAULT_FORM = {
  title: "",
  description: "",
  yearStart: "",
  yearEnd: "",
  where: "",
};

class ContentList extends Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
      isFormActive: false,
      items: [],
      form: { ...DEFAULT_FORM },
    };
  }

  toggleEditMode() {
    this.setState(({ editMode }) => ({
      editMode: !editMode,
      isFormActive: false,
      form: { ...DEFAULT_FORM },
    }));
  }

  toggleForm() {
    this.setState(({ isFormActive }) => ({
      isFormActive: !isFormActive,
    }));
  }

  handleReset() {
    this.setState({ form: { ...DEFAULT_FORM }, isFormActive: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(({ items, form }) => ({
      items: [...items, form],
      form: { ...DEFAULT_FORM },
    }));
  }

  handleInputChange(name) {
    return function (e) {
      this.setState(({ form }) => ({
        form: { ...form, [name]: e.target.value },
      }));
    };
  }

  handleDescriptionChange(value) {
    this.setState(({ form }) => ({
      form: { ...form, description: value },
    }));
  }

  render() {
    const { editMode, isFormActive, items, form } = this.state;
    return (
      <li className="content-item">
        <header className="content-item__header">
          <h2>{this.props.name}</h2>
        </header>
        <FontAwesomeIcon
          className="edit-btn"
          onClick={this.toggleEditMode.bind(this)}
          icon={faPenToSquare}
          size="lg"
        />
        <ul className="content-item__list">
          {items.map(({ yearStart, yearEnd, where, title, description }, i) => (
            <li key={i} className="content-item__list-item">
              <div className="marker" />
              <section>
                <h3>{`${yearStart}-${yearEnd}`}</h3>
                <h3>{where}</h3>
              </section>
              <section>
                <h2>{title}</h2>
                <p>{description}</p>
              </section>
              {editMode && (
                <FontAwesomeIcon className="delete-icon" icon={faXmark} />
              )}
            </li>
          ))}
          {editMode && !isFormActive && (
            <button
              key="add-btn"
              className="add-item-btn"
              onClick={this.toggleForm.bind(this)}
            >
              <FontAwesomeIcon icon={faPlus} />
              <span>Add</span>
            </button>
          )}
          {editMode && isFormActive && (
            <form
              className="content-item__list-form"
              onReset={this.handleReset.bind(this)}
              onSubmit={this.handleSubmit.bind(this)}
            >
              <main>
                <input
                  type="text"
                  value={form.title}
                  placeholder="Title"
                  onChange={this.handleInputChange("title").bind(this)}
                />
                <AutoResize
                  value={form.description}
                  placeholder="Description"
                  onChange={this.handleDescriptionChange.bind(this)}
                />
                <input
                  type="text"
                  value={form.where}
                  placeholder="Where"
                  onChange={this.handleInputChange("where").bind(this)}
                />
                <div className="input-row">
                  <label>
                    <input
                      type="text"
                      value={form.yearStart}
                      placeholder="Year of start"
                      pattern="[0-9]{4}"
                      onChange={this.handleInputChange("yearStart").bind(this)}
                    />
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                  </label>
                  <div />
                  <label>
                    <input
                      type="text"
                      value={form.yearEnd}
                      placeholder="Year of end / present"
                      pattern="[0-9]{4}|present"
                      onChange={this.handleInputChange("yearEnd").bind(this)}
                    />
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                  </label>
                </div>
              </main>
              <footer>
                <button type="reset">Cancel</button>
                <button type="submit">Add</button>
              </footer>
            </form>
          )}
        </ul>
      </li>
    );
  }
}

export default ContentList;
