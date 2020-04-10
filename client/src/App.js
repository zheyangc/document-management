import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/NavigBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Submit} from './component/submit';
import {Search} from './component/search';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Submit}/>
          <Route path="/submit" component={Submit}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
