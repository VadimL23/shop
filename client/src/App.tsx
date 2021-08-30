import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {Navbar} from "./components/Navbar";
import {Navmenu} from "./components/Navmenu";
import {observer} from "mobx-react-lite";
import {useStore} from "hooks";


const App = observer(()=> {

const {isAuthenticated} = useStore(); 
const routes = useRoutes(isAuthenticated);

    
  return (
    <Router >
       <Navbar isAuthenticated={isAuthenticated}/>
        <div className="container">
            {routes}
        </div>
      </Router>
  );
});

export default App;
