import { useState } from 'react';

//data
import { apiInfos } from '@/utils/apiInfos';

//components
import { ApiArrowsCont } from './ApiArrowsCont';
import { ApiCardsContainer } from './ApiCardsContainer';

export const ApiMain = () => {
  const [clickArrow, setClickArrow] = useState<boolean>(false);
  let base = 4;

  return(<>
    <ApiCardsContainer 
      apiInfos={apiInfos} 
      clickArrow={clickArrow}
      base={base}/>
    <ApiArrowsCont 
      base={base} 
      apiCardsLeng={apiInfos.length} 
      setClickArrow={setClickArrow}/>
  </>);
};