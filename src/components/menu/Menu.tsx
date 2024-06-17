import Image from 'next/image';

//components
import { SocialList } from './SocialList';
import { MenuMessage } from './MenuMessage';
import { Techs } from './Techs';

//imgs 
import apiImg from '@/components/menu/imgs/api-img.png';

export const Menu = () => 
  <header>
    <menu className='menuHome'>
      <h1>APIExplore</h1>
      <MenuMessage/>
      <SocialList 
        footer={false}/>
      <Image 
        src={apiImg} 
        data-testid='mainMenuImg'
        alt='Ilustração sobre API'
        className='w-[190px] h-[190px]'/>
      <Techs/>
    </menu>
  </header>