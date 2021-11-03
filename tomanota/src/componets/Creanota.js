import React, { useState } from "react";
import { Modal } from "./Modal";
import "./styles/Note.css";

export const Creanota = ({ note }) => {
  const { title, description, date } = note;
  const d = date.toDate().toLocaleString();
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  return (
    <div className="container-note">
      <div className="note-body">
        <h4 className="note-title">{title}</h4>
        <p className="note-description">
          {description}
        </p>
      </div>
      <div>
        <button className="learn-more" onClick={showModal}>Leer más...</button>
      </div>
      <div>
        <p className="date"> modificado: {d}</p>
      </div>
      {isVisible && (
        <Modal
          note={note}
          mode="edit"
          isVisible={isVisible}
          hideModal={hideModal}
        />
      )}
    </div>
  );
};
