import { useContext } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

//context
import ContextProvider from '@/context/ContextMaster';

//components
import { ApiCard } from './ApiCard';

type TApiCardsCont = {
  clickArrow: boolean,
  base: number,
  apiInfos: {
    id: number,
    apiName: string,
    descr: string,
    img: StaticImport,
  }[],
};

export const ApiCardsContainer = ({ clickArrow, apiInfos, base }: TApiCardsCont) => {
  const { lastCardId } = useContext(ContextProvider);

  return(
    <div className='cardsContainer'>
      {apiInfos.map(card => {
        if(!clickArrow && card.id <= base){
          return <ApiCard key={card.id} card={card}/>
        };
        if(card.id > lastCardId && card.id <= lastCardId + base){
          return <ApiCard key={card.id} card={card}/>
        };
      })}
    </div>
  );
};