import { ElementType } from 'react';

type TSocialIcon = {
  Icon: ElementType,
  link: string,
};

export const SocialIcon = ({ Icon, link }: TSocialIcon) => 
  <a href={link} target='blank'>
    <Icon/>
  </a>