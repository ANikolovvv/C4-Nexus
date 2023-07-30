import { createContext } from "react";
import data from '../data.json'

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};
export default DataProvider;
