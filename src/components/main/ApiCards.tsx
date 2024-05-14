import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useState, useContext, useEffect } from 'react';

//data
import { apiInfos } from '@/utils/apiInfos';

//context
import ContextProvider from '../../../context/ContextMaster';

//components
import { Forward } from './Forward';

export const ApiCards = () => {
  const [clickForward, setClickForward] = useState<boolean>(false);
  
  const { lastIdCard, setLastIdCard } = useContext(ContextProvider);
  console.log(lastIdCard)

  let counter = 0;  
  let base = 4;

  const onClickForward = () => {
    if(lastIdCard === 0){
      setLastIdCard(base);
    }

    if(lastIdCard !== 0){
      setLastIdCard(lastIdCard + base);
    }

    setClickForward(true);
  };

  return(
    <>
      <div className={`flex justify-center flex-wrap items-center w-[100%]`}>
        {apiInfos.map(card => {
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

        {clickForward && <Forward/>}
      </div>
      <div className={`w-[90%] flex mt-8`}>
        <button className={`mr-auto`}>
          <IconArrowLeft onClick={() => null}
            className={`w-[35px] h-[35px] hover:text-emerald-300`}/>
        </button>
        <button className={`ml-auto`}>
          <IconArrowRight onClick={() => onClickForward()}
            className={`w-[35px] h-[35px] hover:text-emerald-300`}/>
        </button>
      </div>
    </>
  );
};