import { useState, useContext } from 'react';

//data
import { apiInfos } from '@/utils/apiInfos';

//context
import ContextProvider from '@/context/ContextMaster';

//icons
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

//components
import { ApiArrow } from './ApiArrow';
import { ApiCardsContainer } from './ApiCardsContainer';

export const ApiMain = () => {
  const [clickArrow, setClickArrow] = useState<boolean>(false);
  const { lastCardId, setLastCardId } = useContext(ContextProvider)
  let base = 4;

  const cardInfos = {
    base, 
    apiCardsLeng: apiInfos.length,
    lastCardId,
    setLastCardId,
    setClickArrow,
  };

  return(
    <section className={`flex justify-center items-center w-[100%] p-auto`}>
      <ApiArrow Icon={IconArrowLeft} arrowDirection='back' cardInfos={cardInfos}/>
      <ApiCardsContainer 
        apiInfos={apiInfos} 
        clickArrow={clickArrow}
        base={base}/>
      <ApiArrow Icon={IconArrowRight} arrowDirection='forward' cardInfos={cardInfos}/>
    </section>
  );
};