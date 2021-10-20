import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { Modal } from "./Modal";
import Swal from 'sweetalert2'; 
import btndelete from "../assets/images/btndelete.png";
import edit from "../assets/images/edit.png";
import "./styles/Note.css";


export const Creanota = ({ note }) => {
  const { id, title, description, date } = note;
  const d= date.toDate ( ).toLocaleString();
  console.log(d);
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);

  const deleteNote = () => {
    try {
      const swalWithButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn-success',
        cancelButton: 'btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithButtons.fire({
      title: "¿Deseas borrar tu nota?",
      text: "No podras revertir esto",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithButtons.fire(
          '¡Eliminada!',
          'La nota ha sido borrada.',
          'success'
        )
        deleteDoc (doc(db, "notes", id));
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithButtons.fire(
          'Cancelar',
          'Tu nota se ha guardado :)',
          'error'
        )
      }
    })
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
      <div>
        <p className= "date"> modificado: {d}</p>
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
