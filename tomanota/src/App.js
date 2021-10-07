import "./App.css";
import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import Home from "./componets/Home"
import Register from "./componets/Register";
import WallNotes from "./componets/WallNotes";
import AddNote from "./componets/AddNote";
import { createAccount } from "./firebaseconfig";


function App() {
  const handleLogin = (name, email, password) => {
    createAccount(name, email, password);
  };

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path= "/" exact>
            <Home />
          </Route>
          <Route path= "/register">
          <Register handleLogin={handleLogin} />
          </Route>
          <Route path= "/wallNotes">
            <WallNotes />
          </Route>
          <Route path= "/addNotes">
            <AddNote />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
