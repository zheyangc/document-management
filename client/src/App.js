import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/NavigBar';
import SubmitForm from './component/SubmitForm';
import ViewBox from './component/generate/ViewBox'

function App() {
  return (
    <React.Fragment>
      <NavigationBar></NavigationBar>
      <ViewBox></ViewBox>
      <SubmitForm></SubmitForm>
    </React.Fragment>
  );
}

export default App;
