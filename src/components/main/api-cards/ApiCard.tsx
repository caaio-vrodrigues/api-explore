//components
import { Background } from '@/components/main/api-cards/Background';

//icons
import { IconSquareArrowRight } from '@tabler/icons-react';

//imgs
import bgImgTest from '@/components/main/imgs/clima-tempo.jpg';

type TCard = {
  card: {
    id: number,
    apiName: string,
  };
};

export const ApiCard = ({ card }: TCard) => {
  return(
    <article 
      key={card.id} 
      className='apiCard'
    >
      <Background background={bgImgTest}/>
      <button
        onClick={()=>{}}
        className='coverBg'>
        <h1>{card.apiName}</h1>
        <span><IconSquareArrowRight/></span>
      </button>
    </article>
  );
};