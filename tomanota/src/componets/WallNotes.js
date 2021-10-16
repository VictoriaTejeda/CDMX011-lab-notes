import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/Autcontext";
import { auth, db } from "../firebaseconfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import { Creanota } from "./Creanota";
import { Modal } from "./Modal";
import "./styles/WallNote.css";
import logo from "../assets/images/logo.png";
import out from "../assets/images/out.png";

function WallNotes() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleSignOut = async () => {
    try {
      await logout(auth);
      history.push("/");
      console.log("no entro");
    } catch (error) {
      setError("Error del servidor");
      console.log(error);
    }
  };

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "notes"));
    onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setNotes(documents);
    });
  }, []);

  const [isVisible, setIsVisible]= useState(false);
  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
  const newNote = {autor: '', cite: ''}

  return (
    <>
      <header className="headerWall">
        <div>
          <img src={logo} alt="logo-img" className="logonote" />
        </div>
        <img
          src={out}
          alt="logOut"
          className="log-out"
          onClick={handleSignOut}
        />
      </header>
      <div className="container-welcome">
        {error && <p className="error">{error}</p>}
        <p className= "welcome">Hola {currentUser.email}</p>
        <div>
          <button className="btn-add" onClick={showModal}> Añade una nota </button>
        </div>
      </div>
      <div>        
        <div className= "note">
          {notes.map((note) => (
            <Creanota key={note.id} note={note} />
          ))}
        </div>
        {
          isVisible &&
          <Modal mode = 'create' isVisible={isVisible} note={newNote} hideModal={hideModal}  />
        }
      </div>
    </>
  );
}

export default WallNotes;
