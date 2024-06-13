import { useState, useContext } from 'react';

//data
import { apiInfos } from '@/utils/apiInfos';

//context
import ContextProvider from "@/context/ContextMaster";

//components
import { CardArrows } from './CardArrows';
import { Cards } from './Cards';

export const ApiCards = () => {
  const [clickForward, setClickForward] = useState<boolean>(false);
  const { lastIdCard } = useContext(ContextProvider);
  let counter = 0;  
  let base = 4;

  return(<>
    <div className={`flex justify-center flex-wrap items-center w-[100%]`}>
      {!clickForward ? 
        apiInfos.map(card => {
          counter++;
          if(counter <= 4){
            return <Cards key={card.id} card={card}/>
          };
        }) : 
        apiInfos.map(card => {
          counter++;
          if(card.id > lastIdCard && card.id < lastIdCard + 5){
            return <Cards key={card.id} card={card}/>
          };
        })
      }
    </div>
    <CardArrows 
      apiInfosLeng={apiInfos.length} 
      base={base} 
      setClickForward={setClickForward}/>
  </>);
};