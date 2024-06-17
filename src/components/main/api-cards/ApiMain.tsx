//data
import { apiInfos } from '@/utils/apiInfos';

//icons
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

//myHooks
import { useApiCardInfos } from './useApiCardInfos';

//components
import { ApiArrow } from './ApiArrow';
import { ApiCardsContainer } from './ApiCardsContainer';

export const ApiMain = () => {
  const { cardInfos, clickArrow } = useApiCardInfos(apiInfos.length);

  return(
    <section className='apiMainSec'>
      <ApiArrow 
        Icon={IconArrowLeft} 
        arrowDirection='back' 
        cardInfos={cardInfos}/>
      <ApiCardsContainer 
        apiInfos={apiInfos} 
        clickArrow={clickArrow}
        base={cardInfos.base}/>
      <ApiArrow 
        Icon={IconArrowRight} 
        arrowDirection='forward' 
        cardInfos={cardInfos}/>
    </section>
  );
};