import React from 'react';
import {Navbar} from "./components/Navbar"

function App() {
  return (
    <React.Fragment>
        <Navbar isAuthenticated={true}/>
        <h1 className="main_title">Welcome to the main page of shop!</h1>
      
    </React.Fragment>
  );
}

export default App;
