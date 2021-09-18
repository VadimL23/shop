import { useContext } from 'react';
import { productContext } from 'context';

const useProductStore = () => {
  return useContext(productContext);
};
export { useProductStore };
