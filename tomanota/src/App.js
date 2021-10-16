import "./App.css";
import { AuthProvider } from "./context/Autcontext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./componets/LogIn";
import Register from "./componets/Register";
import WallNotes from "./componets/WallNotes";
import { PrivateRoute } from "./componets/PrivateRoute"

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={LogIn} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/wallNotes" component={WallNotes} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
