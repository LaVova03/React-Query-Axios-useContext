import React, { useState } from 'react';
import Context from './Context';

function MyContextProvider({ children }) {
  const [myData, setMyData] = useState();
  const [item, setItem] = useState();

  return (
    <Context.Provider value={{ myData, setMyData, item, setItem }}>
      {children}
    </Context.Provider>
  );
};

export default MyContextProvider;