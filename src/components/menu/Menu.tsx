import Image from 'next/image';

//components
import { SocialList } from './SocialList';
import { MenuMessage } from './MenuMessage';
import { Techs } from './Techs';

//imgs 
import apiImg from '@/components/menu/imgs/img-api.jpg';

export const Menu = () => {
  return(
    <header>
      <menu className='menuHome'>
        <h1>APIExplore</h1>
        <MenuMessage/>
        <SocialList 
          footer={false}/>
        <Image 
          src={apiImg} 
          data-testid='mainMenuImg'
          alt='Ilustração sobre API'/>
        <Techs/>
      </menu>
    </header>
  );
};