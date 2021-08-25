import React,{createContext} from 'react';
import {RootStore} from "store";
import {unprotect} from "mobx-state-tree";

export const store = RootStore.create({}); 
unprotect(store);
export const storeContext = createContext(store);