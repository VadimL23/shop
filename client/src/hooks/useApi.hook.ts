import axios from 'axios';

const useApi = () => {
  return {
    request: async () => {
      return await axios.get('http://localhost:3001/category');
    },
  };
};
export { useApi };
