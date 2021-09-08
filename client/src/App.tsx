import React,{useState} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {useRoutes} from "./routes";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Navmenu} from "./components/Navmenu";
import {observer} from "mobx-react-lite";
import {useStore} from "hooks";
import {Popup} from "components/Popup";

const App = observer(()=> {

const {isAuthenticated} = useStore(); 
const routes = useRoutes(isAuthenticated);
const [modal,setModal] = useState(false);
    
  return (
    <Router >
       <Navbar 
       setVisibleModal={setModal}
       isVisibleModal ={modal}
       isAuthenticated={isAuthenticated}/>
        <div className="container">
            {routes}
        
         <Popup 
                isVisibleModal={modal}
                setVisibleModal={setModal}
           
             >
         </Popup>
        </div>
        <Footer />
    </Router>
  );
});

export default App;
