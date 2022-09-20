import React from "react";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactMeItem({
  icon,
  title,
  content,
  isAnchor = false,
  editMode,
  handleChange,
}) {
  return (
    <li className="info-item__list-item">
      <FontAwesomeIcon className="info-item__list-item__icon" icon={icon} />
      {editMode ? (
        <input
          className="info-item__list-item__input"
          type="text"
          placeholder={title}
          value={content}
          onChange={handleChange}
        />
      ) : (
        <div>
          <h3>{title}</h3>
          {isAnchor ? (
            <a href={content} target="_blank" rel="noreferrer">
              {content.replace("mailto:", "")}
            </a>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </li>
  );
}

export default ContactMeItem;
