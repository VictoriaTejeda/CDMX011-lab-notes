import React, { useState } from "react";
import ReactModal from "react-modal";
import { db } from "../firebaseconfig";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../context/Autcontext";
import close from "../assets/images/close.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "80%",
    width: "85%",
    backgroundColor: "#ede6d3c0",
    border: "none",
    boxShadow: "0px 10px 10px black",
  },
};

export const Modal = ({ note, mode, isVisible, hideModal }) => {
  const { id, title, description } = note;
  const [newTitle, setNewTitle] = useState( title);
  const [newDescription, setNewDescription] = useState(description);
  const [isOpen, setIsOpen] = useState(isVisible);
  const { currentUser } = useAuth();

  const closeModal = () => {
    setIsOpen(false);
    hideModal();
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (mode === "edit") {
      editNote();
    } else {
      createNote();
    }
    closeModal();
  };
  const handleTitleChange = (e) => setNewTitle(e.target.value);
  const handleDescriptionChange = (e) => setNewDescription(e.target.value);

  const createNote = async () => {
    const saveUser = currentUser;
    try {
      await addDoc(collection(db, "notes"), {
        title: newTitle,
        description: newDescription,
        email: saveUser.email,
        uid : [
          saveUser.email,
          saveUser.uid
        ],
        date: new Date()
      });
    } catch (error) {
      console.error(error);
    }
  };
  const editNote = async () => {
    const saveUser = currentUser;
    try {
      await setDoc(doc(db, "notes", id), {
        title: newTitle,
        description: newDescription,
        email: saveUser.email,
        uid : [
          saveUser.email,
          saveUser.uid
        ],
        date: new Date()
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      appElement={document.getElementById("root")}
    >
      <form className="modal" onSubmit={handleSubmit}>
        <img
          src={close}
          alt="close"
          className="close-btn"
          onClick={closeModal}
        />
        <input
          type="text"
          className="title"
          value={newTitle}
          placeholder="Título de tu nota"
          required
          onChange={handleTitleChange}
        />
        <textarea
          type="text"
          className="description"
          value={newDescription}
          placeholder="Escribe tu nota"
          required
          onChange={handleDescriptionChange}
        />
        {mode === "edit" ? 
          <button type="submit" className="edit-btn">
            Edita Nota
          </button>
         : 
          <button type="submit" className="create-btn">
            Crea Nota
          </button>
        }
      </form>
    </ReactModal>
  );
};
