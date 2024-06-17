import { useState, useContext } from 'react';

//context
import ContextProvider from '@/context/ContextMaster';

export const useApiCardInfos = (leng: number) => {
  const [clickArrow, setClickArrow] = useState<boolean>(false);
  const { lastCardId, setLastCardId } = useContext(ContextProvider)
  let base = 4;

  return {
    clickArrow,
    cardInfos: {
      base, 
      apiCardsLeng: leng,
      lastCardId,
      setLastCardId,
      setClickArrow,
    },
  };
};