import { useContext } from 'react';
import ContextProvider from '@/context/ContextMaster';

//components
import { ApiMain } from './api-cards/ApiMain';
import { WeatherAPI } from './api-cards/api-comps/WeaptherAPI';

type TMain = {
  apiName: string,
};

export const Main = ({ apiName }: TMain) => { 
  const { showWeatherAPI } = useContext(ContextProvider);
  
  return(
    <main className='mainContent'>
      {showWeatherAPI === 'api-select' ? <ApiMain/> : <WeatherAPI/>}
    </main>
  );
};