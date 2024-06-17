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
    img: StaticImport | null,
  }[],
};

export const ApiCardsContainer = ({ 
  clickArrow, apiInfos, base }: TApiCardsCont) => {
    
  const { lastCardId } = useContext(ContextProvider);

  return(
    <div className='cardsContainer'>
      {apiInfos.map(cardInfos => {
        if(!clickArrow && cardInfos.id <= base){
          return (
            <ApiCard 
              key={cardInfos.id} 
              card={cardInfos}/>
          );
        };
        if(cardInfos.id > lastCardId && cardInfos.id <= lastCardId + base){
          return (
            <ApiCard 
              key={cardInfos.id} 
              card={cardInfos}/>
          );
        };
      })}
    </div>
  );
};