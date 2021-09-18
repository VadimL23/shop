import { useContext } from 'react';
import { storeContext } from 'context';

const useStore = () => {
  return useContext(storeContext);
};
export { useStore };
