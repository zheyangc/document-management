import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Submit } from "./components/submit";
import { Search } from "./components/search";
import { Login } from "./components/login";
import { DocumentContextProvider } from "./contexts/DocumentContext";

function App() {
  return (
    <DocumentContextProvider>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Submit} />
          <Route path="/submit" component={Submit} />
          <Route path="/search" component={Search} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </DocumentContextProvider>
  );
}

export default App;
