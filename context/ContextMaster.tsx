'use client';

import React, { createContext, useState } from "react";

type TContextProvider = {
  lastIdCard: number,
  setLastIdCard: (val: number) => void,
};

type TContextMaster = {
  children: React.ReactNode;
};

const ContextProvider = createContext<TContextProvider>({
  lastIdCard: 0,
  setLastIdCard: () => {},
});

export default ContextProvider;

export const ContextMaster = ({ children }: TContextMaster): React.ReactNode => {
  const [lastIdCard, setLastIdCard] = useState<number>(0);

  return(
    <ContextProvider.Provider value={{
      lastIdCard, setLastIdCard,
    }}>
      {children}
    </ContextProvider.Provider>
  );
};