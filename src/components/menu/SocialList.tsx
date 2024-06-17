//data
import { socialIcons } from '@/utils/socialIcons';

//funcs
import { getCssProps } from './getCssProps';

//components
import { SocialIcon } from './SocialIcon';

type TSocialList = {
  footer: boolean,
};

export const SocialList = ({ footer }: TSocialList) => {
  const { cssPropUl, dataTest } = getCssProps(footer);

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