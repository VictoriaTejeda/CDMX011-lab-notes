import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../context/Autcontext";
import FormRegister from "../componets/FormRegister";
import Register from "../componets/Register";

afterEach(cleanup);

test("sobre el componente FormLogin", () => {
    const mockHandleRegister = jest.fn();
    render(<FormRegister handleSignUP = {(mockHandleRegister)} />);
    const contentEmail = screen.getByPlaceholderText("ejemplo@ejemplo.com");
    const contentPasswords = screen.getByPlaceholderText("*******");
    const buttonRegister= screen.getByText("Registrate");
  
    expect(contentEmail).toBeInTheDocument();
    expect(contentPasswords).toBeInTheDocument();
    const emailValue = "vicky@labo.com";
    const passwordValue = "12345678";
    fireEvent.change(contentEmail, { target: { value: emailValue } });
    fireEvent.change(contentPasswords, { target: { value: passwordValue } });
    fireEvent.click(buttonRegister);
  
    expect(mockHandleRegister).toHaveBeenCalledWith(passwordValue, emailValue);
  });
  
  
  test("<FormRegister> useContext", () => {
    const mockHandleSignUP = jest.fn();
    render(<Router><AuthProvider auth={{}} createUserWithEmailAndPassword={mockHandleSignUP} onAuthStateChanged={()=> console.log()}><Switch><Route component={Register}/></Switch></AuthProvider></Router>);
    const contentEmail = screen.getByPlaceholderText("ejemplo@ejemplo.com");
    const contentPasswords = screen.getByPlaceholderText("*******");
    const buttonRegister = screen.getByText("Registrate");
  
    expect(contentEmail).toBeInTheDocument();
    expect(contentPasswords).toBeInTheDocument();
    const emailValue = "vicky@labo.com";
    const passwordValue = "12345678";
    fireEvent.change(contentPasswords, { target: { value: passwordValue } });
    fireEvent.change(contentEmail, { target: { value: emailValue } });
    fireEvent.click(buttonRegister);

    expect(mockHandleSignUP).not.toHaveBeenCalled();
  });
