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
}[];

export const getTechsImgs: TgetTechsImgs = [
  {
    id: 1,
    img: cssImg,
  },
  {
    id: 2,
    img: htmlImg,
  },
  {
    id: 3,
    img: javascriptImg,
  },
  {
    id: 4,
    img: nextJsImg,
  },
  {
    id: 5,
    img: reactJsImg,
  },
  {
    id: 6,
    img: typescriptImg,
  },
];