import Image from "next/image";

//components
import { SocialList } from "./SocialList";
import { MenuMessage } from "./MenuMessage";
import { Techs } from "./Techs";

//imgs 
import apiImg from '@/components/menu/imgs/img-api.jpg';

export const Menu = () => {
  return(
    <header>
      <menu className={`menuHome flex flex-col items-center h-[100vh]`}>
        <h1 className={`text-blue-400 font-bold text-[30px] pt-4`}>APIExplore</h1>
        <SocialList footer={false}/>
        <MenuMessage/>
        <Image src={apiImg} data-testid={'mainMenuImg'} alt="Ilustração sobre API" className={``}/>
        <Techs/>
      </menu>
    </header>
  );
};