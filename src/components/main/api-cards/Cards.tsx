//components
import { Background } from "@/utils/Background";

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

export const Cards = ({ card }: TCard) => {
  return(
    <article key={card.id} className={`w-[40%] h-[200px] 
    flex items-center justify-center m-auto mt-8 relative`}>
      <Background background={bgImgTest}/>
      <button
        onClick={()=>{}}
        className={`coverBg`}>
        <h1>{card.apiName}</h1>
        <span><IconSquareArrowRight className={``}/></span>
      </button>
    </article>
  );
};