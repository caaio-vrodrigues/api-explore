import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import cssImg from './icone-css.png';
import htmlImg from './icone-html.png';
import javascriptImg from './icone-javascript.png';
import nextJsImg from './next-js.png';
import reactJsImg from './react-js.png';
import typescriptImg from './typescript.png';

type TgetTechsImgs = {
  id: number,
  img: StaticImport,
  alt: string,
}[];

export const getTechsImgs: TgetTechsImgs = [
  {
    id: 1,
    img: cssImg,
    alt: 'CSS logo',
  },
  {
    id: 2,
    img: htmlImg,
    alt: 'HTML logo'
  },
  {
    id: 3,
    img: javascriptImg,
    alt: 'Javascript logo'
  },
  {
    id: 4,
    img: nextJsImg,
    alt: 'Next-Js logo'
  },
  {
    id: 5,
    img: reactJsImg,
    alt: 'React-Js logo'
  },
  {
    id: 6,
    img: typescriptImg,
    alt: 'Typescript logo'
  },
];