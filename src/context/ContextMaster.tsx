'use client';

import React, { createContext, useState } from "react";

type TContextProvider = {
  lastCardId: number,
  setLastCardId: (val: number) => void,
};

type TContextMaster = {
  children: React.ReactNode;
};

const ContextProvider = createContext<TContextProvider>({
  lastCardId: 0,
  setLastCardId: () => {},
});

export default ContextProvider;

export const ContextMaster = ({ children }: TContextMaster): React.ReactNode => {
  const [lastCardId, setLastCardId] = useState<number>(0);

  return(
    <ContextProvider.Provider value={{
      lastCardId, setLastCardId,
    }}>
      {children}
    </ContextProvider.Provider>
  );
};