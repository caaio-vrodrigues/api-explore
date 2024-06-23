'use client';

import React, { createContext, useState } from "react";

type TContextProvider = {
  lastCardId: number,
  setLastCardId: (val: number) => void,
  showWeatherAPI: string,
  setShowWeatherAPI: React.Dispatch<React.SetStateAction<string>>,
};

type TContextMaster = {
  children: React.ReactNode;
};

const ContextProvider = createContext<TContextProvider>({
  lastCardId: 0,
  setLastCardId: () => {},
  showWeatherAPI: 'api-select',
  setShowWeatherAPI: () => {},
});

export default ContextProvider;

export const ContextMaster = ({ children }: TContextMaster): React.ReactNode => {
  const [lastCardId, setLastCardId] = useState<number>(0);
  const [showWeatherAPI, setShowWeatherAPI] = useState<string>('api-select');

  return(
    <ContextProvider.Provider value={{
      lastCardId, setLastCardId,
      showWeatherAPI, setShowWeatherAPI,
    }}>
      {children}
    </ContextProvider.Provider>
  );
};