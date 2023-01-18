import { createContext, useState } from "react";

export const LoadingContext = createContext();

export default function Loading({ children }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [load, setLoad] = useState(false);
  
    return (
      <LoadingContext.Provider value={{ load, setLoad }}>
        {children}
      </LoadingContext.Provider>
    );
  }