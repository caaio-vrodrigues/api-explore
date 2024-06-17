import Image from 'next/image';
import { getTechsImgs } from './imgs/techs-imgs/getTechsImgs';

export const Techs = () => 
  <div className='techsContainer'>
    <div className='techsImgsWrap'>
      {getTechsImgs.map(tech => 
        <Image 
          key={tech.id} 
          src={tech.img} 
          alt={tech.alt} 
          data-testid='techImg'
          className='TechImg'/>
      )}
    </div>
  </div>