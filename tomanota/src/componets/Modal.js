import React, { useState } from "react";
import ReactModal from "react-modal";
import { db } from "../firebaseconfig";
import { collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { useAuth } from "../context/Autcontext";
import Swal from "sweetalert2";
import close from "../assets/images/close.png";
import "./styles/Modal.css";

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
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "0px 10px 10px black",
  },
};

export const Modal = ({ note, mode, isVisible, hideModal }) => {
  const { id, title, description } = note;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [isOpen, setIsOpen] = useState(isVisible);
  const { currentUser } = useAuth();

  const closeModal = () => {
    setIsOpen(false);
    hideModal();
  };
  const handleSubmit = (e) => {
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
        date: new Date(),
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
        date: new Date(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNote = () => {
    try {
      const swalWithButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn-success",
          cancelButton: "btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithButtons
        .fire({
          title: "¿Deseas borrar tu nota?",
          text: "No podras revertir esto",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Si",
          cancelButtonText: "No",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithButtons.fire(
              "¡Eliminada!",
              "La nota ha sido borrada.",
              "success"
            );
            deleteDoc(doc(db, "notes", id));
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithButtons.fire(
              "Cancelar",
              "Tu nota se ha guardado :)",
              "error"
            );
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      appElement={document.getElementById("root")}
    >
      {mode === "edit" ? (
        <>
          <form className="modal-edit" onSubmit={handleSubmit}>
            <input
              type="text"
              className="title-edit"
              value={newTitle}
              placeholder="Título de tu nota"
              required
              onChange={handleTitleChange}
            />
            <textarea
              type="text"
              className="description-edit"
              value={newDescription}
              placeholder="Escribe tu nota"
              required
              onChange={handleDescriptionChange}
            />
            <button type="submit" className="upDate-btn">
              Actualizar nota
            </button>
          </form>
          <div className="btn-container">
            <button className="close-btn" onClick={closeModal}>
              Cerrar 
            </button>
            <button className="delete-btn" onClick={deleteNote}>
              Eliminar nota
            </button>
          </div>
        </>
      ) : (
        <>
          <form className="modal" onSubmit={handleSubmit}>
            <img
              src={close}
              alt="close"
              className="close"
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
            <button type="submit" className="create-btn">
              Crear Nota
            </button>
          </form>
        </>
      )}
    </ReactModal>
  );
};
