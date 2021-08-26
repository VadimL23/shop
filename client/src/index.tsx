import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {storeContext,store, productStore, productContext} from "context";



ReactDOM.render(
  <React.StrictMode>
   <storeContext.Provider value = {store}>
    <App />
   </storeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

