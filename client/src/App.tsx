import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {Navbar} from "./components/Navbar";
import {observer} from "mobx-react-lite";
import {useStore} from "hooks";


const App = observer(()=> {

const {isAuthenticated} = useStore(); 
const routes = useRoutes(isAuthenticated);

    
  return (
    <Router >
        <div className="container">
            <Navbar isAuthenticated={isAuthenticated}/>
           
             {routes}
            
        </div>
      </Router>
  );
});

export default App;
