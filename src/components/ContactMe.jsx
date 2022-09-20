import React, { useState } from "react";
// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactMeItem from "components/ContactMeItem";
// icons
import {
  faLocationDot,
  faPhone,
  faGlobe,
  faEnvelope,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
// constants
import { ADDRESS, MAIL } from "constants";

function ContactMe() {
  const [editMode, setEditMode] = useState(false);
  const [address, setAddress] = useState(ADDRESS);
  const [website, setWebsite] = useState("");
  const [mail, setMail] = useState(MAIL);
  const [phone, setPhone] = useState("");

  return (
    <div className="info-item">
      <FontAwesomeIcon
        className="edit-btn"
        icon={faPenToSquare}
        size="lg"
        onClick={() => setEditMode(!editMode)}
      />
      <header className="info-item__header">CONTACT ME</header>
      <ul className="info-item__list">
        {(address || editMode) && (
          <ContactMeItem
            icon={faLocationDot}
            title="address"
            content={address}
            handleChange={(e) => setAddress(e.target.value)}
            editMode={editMode}
          />
        )}
        {(website || editMode) && (
          <ContactMeItem
            icon={faGlobe}
            title="website"
            content={website}
            handleChange={(e) => setWebsite(e.target.value)}
            isAnchor
            editMode={editMode}
          />
        )}
        {(mail || editMode) && (
          <ContactMeItem
            icon={faEnvelope}
            title="mail"
            content={mail}
            handleChange={(e) => setMail(e.target.value)}
            isAnchor
            editMode={editMode}
          />
        )}
        {(phone || editMode) && (
          <ContactMeItem
            icon={faPhone}
            title="phone"
            content={phone}
            handleChange={(e) => setPhone(e.target.value)}
            editMode={editMode}
          />
        )}
      </ul>
    </div>
  );
}

export default ContactMe;
