import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { Modal } from "./Modal";
import btndelete from "../assets/images/btndelete.png";
import edit from "../assets/images/edit.png";
import "./styles/Note.css";


export const Creanota = ({ note }) => {
  const { id, title, description } = note;

  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const deleteNote = async () => {
    try {
      await deleteDoc(doc(db, "notes", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-note">
      <div className="note-body">
        <h4 className= "note-title">{title}</h4>
        <p className= "note-description">{description}</p>
      </div>
      <div className="note-btns">
        <img
          src={edit}
          alt="edit"
          className="edit-btn" 
          onClick={showModal}/>
         <img
          src={btndelete}
          alt="delete"
          className="delete-btn" onClick={deleteNote}/>
      </div>
      {
          isVisible &&
            <Modal note={note} mode= 'edit' isVisible={isVisible} hideModal= {hideModal} />
      }
    </div>
  );
};
