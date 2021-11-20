import { useContext } from 'react';
import { locationContext } from 'context';

const useLocationStore = () => {
  return useContext(locationContext);
};
export { useLocationStore };
