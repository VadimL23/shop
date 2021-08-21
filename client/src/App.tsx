import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {Navbar} from "./components/Navbar";
import {observer} from "mobx-react-lite";



const App = observer(()=> {

const isAuthenticated = true; 
const routes = useRoutes(isAuthenticated);

  return (
    <Router >
        <React.Fragment>
            <Navbar isAuthenticated={isAuthenticated}/>
           
             {routes}
            
        </React.Fragment>
      </Router>
  );
});

export default App;
