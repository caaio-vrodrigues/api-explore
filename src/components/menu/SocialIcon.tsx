import { ElementType } from 'react';

type TSocialIcon = {
  Icon: ElementType,
  link: string,
};

export const SocialIcon = ({ Icon, link }: TSocialIcon) => {
  return(
    <a href={link} target='blank' className={`cursor-pointer`}>
      <Icon/>
    </a>
  );
};