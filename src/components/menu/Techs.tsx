import Image from 'next/image';
import { getTechsImgs } from './imgs/techs-imgs/getTechsImgs';

export const Techs = () => {
  return(
    <div className='techsContainer'>
      <div className='techsImgsWrap'>
        {getTechsImgs.map(tech => {
          return(
            <Image 
              key={tech.id} 
              src={tech.img} 
              alt={tech.alt} 
              data-testid='techImg'
              className='TechImg'/>
          );
        })}
      </div>
    </div>
  );
};