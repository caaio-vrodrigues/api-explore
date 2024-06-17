//components
import { Background } from '@/components/main/api-cards/Background';

//icons
import { IconSquareArrowRight } from '@tabler/icons-react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

type TCard = {
  card: {
    id: number,
    apiName: string,
    descr: string,
    img: StaticImport | null,
  };
};

export const ApiCard = ({ card }: TCard) => {
  const cssProp = !card.img ? 'apiCard noImg' : 'apiCard';

  return(
    <article 
      key={card.id} 
      className={cssProp}>
        {card.img && <Background background={card.img}/>}
        <button
          onClick={()=>{}}>
          <h1>{card.apiName}</h1>
          <span><IconSquareArrowRight/></span>
        </button>
    </article>
  );
};