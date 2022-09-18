import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
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

const createItem = () => ({
  title: "",
  description: "",
  yearStart: "",
  yearEnd: "",
  where: "",
  id: uuidv4(),
});

class ContentList extends Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
      isFormActive: false,
      items: [],
      form: createItem(),
    };
  }

  toggleEditMode() {
    this.setState(({ editMode }) => ({
      editMode: !editMode,
      isFormActive: false,
      form: createItem(),
    }));
  }

  toggleForm() {
    this.setState(({ isFormActive }) => ({
      isFormActive: !isFormActive,
    }));
  }

  handleReset() {
    this.setState({ form: createItem(), isFormActive: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(({ items, form }) => ({
      items: [...items, form],
      form: createItem(),
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

  deleteItem(id) {
    this.setState(({ items }) => ({
      items: items.filter((item) => item.id !== id),
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
          {items.map(
            ({ yearStart, yearEnd, where, title, description, id }) => (
              <li key={id} className="content-item__list-item">
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
                  <FontAwesomeIcon
                    className="delete-icon"
                    icon={faXmark}
                    onClick={() => this.deleteItem(id)}
                  />
                )}
              </li>
            ),
          )}
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
