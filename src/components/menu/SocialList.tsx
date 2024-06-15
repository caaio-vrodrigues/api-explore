import { socialIcons } from '@/utils/socialIcons';
import { SocialIcon } from './SocialIcon';

type TSocialList = {
  footer: boolean,
};

export const SocialList = ({ footer }: TSocialList) => {
  let cssPropUl = 'socialList';
  let dataTest = 'socialListItem-Menu';

  if(footer){
    cssPropUl = 'socialListFoot';
    dataTest = '';
  };

  return(
    <ul className={cssPropUl}>
      {socialIcons.map(icon => 
        <li 
          key={icon.id} 
          data-testid={dataTest}>
            <SocialIcon 
              Icon={icon.icon} 
              link={icon.link}/>
        </li>)}
    </ul>
  );
};