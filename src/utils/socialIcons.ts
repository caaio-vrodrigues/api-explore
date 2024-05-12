import { ElementType } from 'react';

//icons
import { 
    IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp, 
    IconBrandInstagram, IconBrandFacebook 
} from '@tabler/icons-react';

type TSocialIcons = {
  id: number,
  icon: ElementType,
  link: string,
}[];

export const socialIcons: TSocialIcons = [
  {
    id: 1,
    icon: IconBrandLinkedin,
    link: 'https://www.linkedin.com/in/caio-vrodrigues-front-dev/',
  },
  {
    id: 2,
    icon: IconBrandGithub,
    link: 'https://github.com/caaio-vrodrigues',
  },
  {
    id: 3,
    icon: IconBrandWhatsapp,
    link: '',
  },
  {
    id: 4,
    icon: IconBrandInstagram,
    link: '',
  },
  {
    id: 5,
    icon: IconBrandFacebook,
    link: '',
  },
];