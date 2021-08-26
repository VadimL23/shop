import React,{createContext} from 'react';
import {ProductStore} from "store";
import {unprotect} from "mobx-state-tree";

export const productStore = ProductStore.create({}); 
unprotect(productStore);
export const productContext = createContext(productStore);