import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// style
import "style/ContentItem.css";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AutoResize from "components/AutoResize";
import AddItemBtn from "components/AddItemBtn";
import CurriculumForm from "components/CurriculumForm";
// icons
import {
  faPenToSquare,
  faXmark,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
// constants
import { LIST_ITEM } from "constants";

const createItem = ({
  title,
  description,
  yearStart,
  yearEnd,
  where,
} = {}) => ({
  title: title ?? "",
  description: description ?? "",
  yearStart: yearStart ?? "",
  yearEnd: yearEnd ?? "",
  where: where ?? "",
  id: uuidv4(),
});

function ContentList({ name = "" }) {
  const [editMode, setEditMode] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);
  const [items, setItems] = useState([
    createItem({ ...LIST_ITEM }),
    createItem({ ...LIST_ITEM }),
  ]);
  const [form, setForm] = useState(createItem());

  const toggleForm = () => {
    setIsFormActive(!isFormActive);
  };

  const handleReset = () => {
    setIsFormActive(false);
    setForm(createItem());
  };

  const toggleEditMode = () => {
    handleReset();
    setEditMode(!editMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setItems([...items, form]);
    setForm(createItem());
  };

  const handleInputChange = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <li className="content-item">
      <header className="content-item__header">
        <h2>{name}</h2>
      </header>
      <FontAwesomeIcon
        className="edit-btn"
        onClick={toggleEditMode}
        icon={faPenToSquare}
        size="lg"
      />
      <ul className="content-item__list">
        {items.map(({ yearStart, yearEnd, where, title, description, id }) => (
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
                onClick={() => deleteItem(id)}
              />
            )}
          </li>
        ))}
        {editMode && !isFormActive && <AddItemBtn onClick={toggleForm} />}
        {editMode && isFormActive && (
          <CurriculumForm onReset={handleReset} onSubmit={handleSubmit}>
            <input
              type="text"
              value={form.title}
              placeholder="Title"
              onChange={handleInputChange("title")}
            />
            <AutoResize
              value={form.description}
              placeholder="Description"
              onChange={handleInputChange("description")}
            />
            <input
              type="text"
              value={form.where}
              placeholder="Where"
              onChange={handleInputChange("where")}
            />
            <div className="input-row">
              <label>
                <input
                  type="text"
                  value={form.yearStart}
                  placeholder="Year of start"
                  pattern="[0-9]{4}"
                  onChange={handleInputChange("yearStart")}
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
                  onChange={handleInputChange("yearEnd")}
                />
                <FontAwesomeIcon icon={faTriangleExclamation} />
              </label>
            </div>
          </CurriculumForm>
        )}
      </ul>
    </li>
  );
}

export default ContentList;
