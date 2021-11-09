import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../context/Autcontext";
import LogIn from "../componets/LogIn";
import FormLogin from "../componets/FormLogin.1";

afterEach(cleanup);

test("sobre el componente FormLogin", () => {
  const mockHandleLogin = jest.fn();
  render(<FormLogin handleLogin={(mockHandleLogin)} />);
  const contentEmail = screen.getByPlaceholderText("ejemplo@ejemplo.com");
  const contentPasswords = screen.getByPlaceholderText("*******");
  const buttonLogin = screen.getByText("Inicia Sesión");

  expect(contentEmail).toBeInTheDocument();
  expect(contentPasswords).toBeInTheDocument();
  const emailValue = "vicky@labo.com";
  const passwordValue = "12345678";
  fireEvent.change(contentEmail, { target: { value: emailValue } });
  fireEvent.change(contentPasswords, { target: { value: passwordValue } });
  fireEvent.click(buttonLogin);

  expect(mockHandleLogin).toHaveBeenCalledWith(emailValue, passwordValue);
});


test("<FormLogin> useContext", () => {
    const mockHandleLogin = jest.fn();
    render(<Router><AuthProvider auth={{}} signInWithEmailAndPassword={mockHandleLogin} onAuthStateChanged={()=> console.log()}><Switch><Route component={LogIn}/></Switch></AuthProvider></Router>);
    const contentEmail = screen.getByPlaceholderText("ejemplo@ejemplo.com");
    const contentPasswords = screen.getByPlaceholderText("*******");
    const buttonLogin = screen.getByText("Inicia Sesión");
  
    expect(contentEmail).toBeInTheDocument();
    expect(contentPasswords).toBeInTheDocument();
    const emailValue = "vicky@labo.com";
    const passwordValue = "12345678";
    fireEvent.change(contentEmail, { target: { value: emailValue } });
    fireEvent.change(contentPasswords, { target: { value: passwordValue } });
    fireEvent.click(buttonLogin);
  
    expect(mockHandleLogin).toHaveBeenCalledWith({}, emailValue, passwordValue);
  });
