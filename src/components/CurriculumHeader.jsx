/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useRef } from "react";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
// images
import UserPicture from "assets/user-solid.svg";

function CurriculumHeader() {
  const [editMode, setEditMode] = useState(false);
  const [picture, setPicture] = useState(UserPicture);
  const [name, setName] = useState("Name");
  const [profession, setProfession] = useState("Profession");
  const fileInputRef = useRef();

  const handlePicture = (e) => {
    if (!e.target.files[0]) return;

    URL.revokeObjectURL(picture);

    setPicture(URL.createObjectURL(e.target.files[0]));
  };

  const openFileManager = () => {
    fileInputRef.current.click();
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <header className="curriculum-header">
      <FontAwesomeIcon
        className="edit-btn"
        onClick={toggleEditMode}
        icon={faPenToSquare}
        size="xl"
      />
      <div
        className="curriculum-header__person-picture"
        onClick={openFileManager}
        onKeyDown={openFileManager}
      >
        <FontAwesomeIcon
          className="curriculum-header__person-picture__add-icon"
          icon={faPlus}
          size="2xl"
        />
        <input
          onChange={handlePicture}
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
        />
        {picture ? (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img
            className="curriculum-header__person-picture__bg"
            src={picture}
            alt="person picture"
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
              onChange={(e) => setName(e.target.value)}
              placeholder="Insert your name"
              className="input-type-h1"
            />
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              placeholder="Insert your profession"
              className="input-type-h2"
            />
          </>
        ) : (
          <>
            <h1>{name}</h1>
            <h2>{profession}</h2>
          </>
        )}
      </div>
    </header>
  );
}

export default CurriculumHeader;
