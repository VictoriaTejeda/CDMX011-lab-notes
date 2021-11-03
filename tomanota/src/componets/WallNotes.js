/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/Autcontext";
import { auth, db } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { Creanota } from "./Creanota";
import { Modal } from "./Modal";
import Swal from "sweetalert2";
import "./styles/WallNote.css";
import logo from "../assets/images/logo.png";
import logobtn from "../assets/images/logobtn.png";
import avatar from "../assets/images/avatar.png";

const WallNotes = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleSignOut = () => {
    try {
      Swal.fire({
        title: "¿Desea Cerrar sesión?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#385a64",
        cancelButtonColor: "#e44d57",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        width:"50vh",
        heightAuto: "true",
        position:"top-right",
      }).then((result) => {
        if (result.isConfirmed) {
          logout(auth);
          history.push("/");
        }
      });
    } catch (error) {
      setError("Error del servidor");
      console.log(error);
    }
  };
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNote = onAuthStateChanged(auth, (user) => {
      if (user) {
        const q = query(
          collection(db, "notes"),
          orderBy("date", "desc"),
          where("email", "==", user.email)
        );
        onSnapshot(q, (querySnapshot) => {
          const documents = [];
          querySnapshot.forEach((doc) => {
            documents.push({ id: doc.id, ...doc.data() });
          });
          setNotes(documents);
        });
      } else {
        console.log("no hay usuario");
      }
    });
    return getNote;
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
  const newNote = { title: "", description: "" };
const userAvatar= currentUser.photoURL;
  return (
    <>
      <header className="headerWall">
        <div>
          <img src={logo} alt="logo-img" className="logonote" />
        </div>
        {currentUser.photoURL
            ? <img src={userAvatar} alt="user-img" className="avatar" onClick={handleSignOut}/>
            : <img src={avatar} alt="user-img" className="avatar" onClick={handleSignOut} />} 
      </header>
      <div className="container-welcome">
        {error && <p className="error">{error}</p>}
        <p className="welcome">
          Hola{" "}
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}
        </p>
        <div>
          <button className="btn-add" onClick={showModal}>
            {" "}
            <img src={logobtn} alt="logobtn" className="logo-btn" /> Añade una
            nota{" "}
          </button>
        </div>
      </div>
      <div>
        <div className="note">
          {notes.map((note) => (
            <Creanota key={note.id} note={note} />
          ))}
        </div>
        {isVisible && (
          <Modal
            mode="create"
            isVisible={isVisible}
            note={newNote}
            hideModal={hideModal}
          />
        )}
      </div>
    </>
  );
};

export default WallNotes;
