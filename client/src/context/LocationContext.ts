import React, { createContext } from 'react';
import { LocationStore } from 'store';
import { unprotect } from 'mobx-state-tree';

export const locationStore = LocationStore.create({});
unprotect(locationStore);
export const locationContext = createContext(locationStore);
