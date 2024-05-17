import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useState, useContext } from 'react';

//data
import { apiInfos } from '@/utils/apiInfos';

//context
import ContextProvider from '@/context/ContextMaster';

//components
import { ChangeCards } from './ChangeCards';

//funcs
import { onClickForward } from './onClickForward';
import { onClickBack } from './onClickBack';

export const ApiCards = () => {
  const [clickForward, setClickForward] = useState<boolean>(false);
  const { lastIdCard, setLastIdCard } = useContext(ContextProvider);

  let counter = 0;  
  let base = 4;

  return(
    <>
      <div className={`flex justify-center flex-wrap items-center w-[100%]`}>
        {apiInfos.map(card => {
          counter++

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
      <div className={`w-[90%] flex mt-8`}>
        <button className={`mr-auto`}>
          <IconArrowLeft onClick={() => 
            onClickBack(lastIdCard, base, apiInfos.length, setLastIdCard, setClickForward)}
            className={`w-[35px] h-[35px] hover:text-blue-200`}/>
        </button>
        <button className={`ml-auto`}>
          <IconArrowRight onClick={() => 
            onClickForward(lastIdCard, base, apiInfos.length, setLastIdCard, setClickForward)}
            className={`w-[35px] h-[35px] hover:text-blue-200`}/>
        </button>
      </div>
    </>
  );
};