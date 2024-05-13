import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useState } from 'react';

//data
import { apiInfos } from '@/utils/apiInfos';

//components
import { Forward } from './Forward';

export const ApiCards = () => {
  const [clickForward, setClickForward] = useState<boolean>(false);
  let counter = 0;
  
  const back = () => {
    {apiInfos.map(card => {
      if(counter === 4) return;

      counter++;

      if(counter <= 4){
        return(
          <article key={card.id} className={`border border-white bg-zinc-200 rounded-md 
          text-center w-[40%] h-[200px] m-auto mt-8 text-blue-600`}>
            <h1>{card.api}</h1>
          </article>
        );
      };
    })};
  };

  return(
    <>
      <div className={`flex justify-center flex-wrap items-center w-[100%]`}>
          {apiInfos.map(card => {
            if(counter === 4) return;

            counter++

            if(counter <= 4 && !clickForward){
              return(
                <article key={card.id} className={`border border-white bg-zinc-200 rounded-md 
                text-center w-[40%] h-[200px] m-auto mt-8 text-blue-600`}>
                  <h1>{card.api}</h1>
                </article>
              )
            }
          })}

          {clickForward && <Forward counter={counter}/>}
      </div>
      <div className={`w-[90%] flex mt-8`}>
        <button className={`mr-auto`}>
          <IconArrowLeft onClick={() => back()}
            className={`w-[35px] h-[35px] hover:text-emerald-300`}/>
        </button>
        <button className={`ml-auto`}>
          <IconArrowRight onClick={() => setClickForward(true)}
            className={`w-[35px] h-[35px] hover:text-emerald-300`}/>
        </button>
      </div>
    </>
  );
};