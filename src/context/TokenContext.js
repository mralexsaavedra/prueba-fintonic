import React, { useEffect, useState } from 'react';
import getToken from '../services/getToken';

const Context = React.createContext({});

export function TokenContextProvider({ children }) {
  const [token, setToken] = useState({});

  useEffect(() => {
    getToken().then(setToken);
  }, []);

  return (
    <Context.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
