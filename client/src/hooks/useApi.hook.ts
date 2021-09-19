import axios from 'axios';
import {API_ROUTE} from "config";

const useApi = (path:string = "") => {
  return {
    request: async () => {
      return await axios.get(API_ROUTE + path);
    },
  };
};
export { useApi };
