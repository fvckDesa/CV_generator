import React, { Component } from "react";
//components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//icons
import { faPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
//images
import UserPicture from "assets/user-solid.svg";

class CurriculumHeader extends Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
      picture: UserPicture,
      name: "",
      profession: "",
    };

    this.fileInputRef = React.createRef();
  }

  setPicture(e) {
    if (!e.target.files[0]) return;

    this.setState(({ picture }) => {
      URL.revokeObjectURL(picture);
      return { picture: URL.createObjectURL(e.target.files[0]) };
    });
  }

  openFileManager() {
    this.fileInputRef.current.click();
  }

  toggleEditMode() {
    this.setState(({ editMode }) => ({ editMode: !editMode }));
  }

  handleChange(name) {
    return function (e) {
      this.setState({ ...this.props.values, [name]: e.target.value });
    };
  }

  render() {
    const { picture, name, profession, editMode } = this.state;

    return (
      <header className="curriculum-header">
        <FontAwesomeIcon
          className="edit-btn"
          onClick={this.toggleEditMode.bind(this)}
          icon={faPenToSquare}
          size="xl"
        />
        <div
          className="curriculum-header__person-picture"
          onClick={this.openFileManager.bind(this)}
        >
          <FontAwesomeIcon
            className="curriculum-header__person-picture__add-icon"
            icon={faPlus}
            size="2xl"
          />
          <input
            onChange={this.setPicture.bind(this)}
            ref={this.fileInputRef}
            type="file"
            accept="image/*"
            hidden
          />
          {picture ? (
            <img
              className="curriculum-header__person-picture__bg"
              src={picture}
            />
          ) : (
            <div className="curriculum-header__person-picture__bg" />
          )}
        </div>
        <div className="curriculum-header__person">
          {editMode ? (
            <>
              <input
                type="text"
                value={name}
                onChange={this.handleChange("name").bind(this)}
                placeholder="Insert your name"
                className="input-type-h1"
              />
              <input
                type="text"
                value={profession}
                onChange={this.handleChange("profession").bind(this)}
                placeholder="Insert your profession"
                className="input-type-h2"
              />
            </>
          ) : (
            <>
              <h1>{name || "Name"}</h1>
              <h2>{profession || "Profession"}</h2>
            </>
          )}
        </div>
      </header>
    );
  }
}

export default CurriculumHeader;
