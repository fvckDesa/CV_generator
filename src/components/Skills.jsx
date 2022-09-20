import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddItemBtn from "components/AddItemBtn";
import CurriculumForm from "components/CurriculumForm";
// icons
import { faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
// constants
import { SKILLS } from "constants";

const createSkill = (name) => ({
  name: name ?? "",
  id: uuidv4(),
});

function Skills() {
  const [editMode, setEditMode] = useState(false);
  const [isFormActive, setIsFormActive] = useState(false);
  const [skills, setSkills] = useState(SKILLS.map(createSkill));
  const [form, setForm] = useState(createSkill());

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setIsFormActive(false);
    setForm(createSkill());
  };

  const handleChange = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSkills([...skills, form]);
    setForm(createSkill());
  };

  const handleReset = () => {
    setForm(createSkill());
    setIsFormActive(false);
  };

  const removeSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <div className="info-item skills">
      <FontAwesomeIcon
        className="edit-btn"
        onClick={toggleEditMode}
        icon={faPenToSquare}
        size="lg"
      />
      <header className="info-item__header">SKILLS</header>
      <ul className="info-item__list">
        {skills.map(({ name, id }) => (
          <li key={id} className="skill-item">
            <div className="skill-marker" />
            <h3>{name}</h3>
            {editMode && (
              <FontAwesomeIcon
                className="delete-icon"
                icon={faXmark}
                onClick={() => removeSkill(id)}
              />
            )}
          </li>
        ))}
        {editMode && !isFormActive && (
          <AddItemBtn onClick={() => setIsFormActive(!isFormActive)} />
        )}
        {editMode && isFormActive && (
          <CurriculumForm onSubmit={handleSubmit} onReset={handleReset}>
            <input
              type="text"
              placeholder="Skill name"
              value={form.name}
              onChange={handleChange}
            />
          </CurriculumForm>
        )}
      </ul>
    </div>
  );
}

export default Skills;
