import { useContext } from 'react';
import ContextProvider from '@/context/ContextMaster';

//components
import { Background } from '@/components/main/api-cards/Background';
import { WeatherAPI } from './api-comps/WeaptherAPI';

//icons
import { IconSquareArrowRight } from '@tabler/icons-react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

//data
import { useWeatherApi } from '@/data/useWeatherApi';

type TCard = {
  card: {
    id: number,
    apiName: string,
    descr: string,
    img: StaticImport | null,
  };
};

export const ApiCard = ({ card }: TCard) => {
  const { showWeatherAPI, setShowWeatherAPI } = useContext(ContextProvider);
  const layout = 'weather-api';

  const cssProp = !card.img ? 'apiCard noImg' : 'apiCard';

  const data = useWeatherApi();

  return(
    <article 
      key={card.id} 
      className={cssProp}>
        {card.img && <Background background={card.img}/>}
        <button
          onClick={()=>setShowWeatherAPI(layout)}>
          <h1>{card.apiName}</h1>
          <IconSquareArrowRight/>
        </button>
    </article>
  );
};