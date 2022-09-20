import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddItemBtn from "components/AddItemBtn";
import CurriculumForm from "components/CurriculumForm";
//icons
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
//constants
import { SKILLS } from "constants";

const createSkill = (name) => ({
  name: name ?? "",
  id: uuidv4(),
});

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
      isFromActive: false,
      skills: SKILLS.map(createSkill),
      form: createSkill(),
    };
  }

  toggleEditMode() {
    this.setState(({ editMode }) => ({
      editMode: !editMode,
      isFromActive: false,
      form: createSkill(),
    }));
  }

  handleChange(e) {
    this.setState(({ form }) => ({ form: { ...form, name: e.target.value } }));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState(({ skills, form }) => ({
      skills: [...skills, form],
      form: createSkill(),
    }));
  }

  handleReset() {
    this.setState({
      form: createSkill(),
      isFromActive: false,
    });
  }

  removeSkill(id) {
    this.setState(({ skills }) => ({
      skills: skills.filter((skill) => skill.id !== id),
    }));
  }

  render() {
    const { editMode, skills, isFromActive, form } = this.state;
    return (
      <div className="info-item skills">
        <FontAwesomeIcon
          className="edit-btn"
          onClick={this.toggleEditMode.bind(this)}
          icon={faPenToSquare}
          size="lg"
        />
        <header className="info-item__header">SKILLS</header>
        <ul className="info-item__list">
          {skills.map(({ name, id }) => (
            <li key={id} className="skill-item">
              <div className="skill-marker"></div>
              <h3>{name}</h3>
              {editMode && (
                <FontAwesomeIcon
                  className="delete-icon"
                  icon={faXmark}
                  onClick={() => this.removeSkill(id)}
                />
              )}
            </li>
          ))}
          {editMode && !isFromActive && (
            <AddItemBtn
              onClick={() =>
                this.setState(({ isFromActive }) => ({
                  isFromActive: !isFromActive,
                }))
              }
            />
          )}
          {editMode && isFromActive && (
            <CurriculumForm
              onSubmit={this.handleSubmit.bind(this)}
              onReset={this.handleReset.bind(this)}
            >
              <input
                type="text"
                placeholder="Skill name"
                value={form.name}
                onChange={this.handleChange.bind(this)}
              />
            </CurriculumForm>
          )}
        </ul>
      </div>
    );
  }
}

export default Skills;
