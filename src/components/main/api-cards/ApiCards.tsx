import { useState } from 'react';

//data
import { apiInfos } from '@/utils/apiInfos';

//components
import { ChangeCards } from './ChangeCards';
import { CardArrows } from './CardArrows';

export const ApiCards = () => {
  const [clickForward, setClickForward] = useState<boolean>(false);
  let counter = 0;  
  let base = 4;

  return(
    <>
      <div className={`flex justify-center flex-wrap items-center w-[100%]`}>
        {apiInfos.map(card => {
          counter++;
          if(counter <= 4 && !clickForward){
            return(
              <article key={card.id} className={`border border-white bg-zinc-200 
              rounded-md text-center w-[40%] h-[200px] m-auto mt-8 text-blue-600`}>
                <h1>{card.api}</h1>
              </article>
            );
          };
        })}
        {clickForward && <ChangeCards/>}
      </div>
      <CardArrows 
        apiInfosLeng={apiInfos.length} 
        base={base} 
        setClickForward={setClickForward}/>
    </>
  );
};