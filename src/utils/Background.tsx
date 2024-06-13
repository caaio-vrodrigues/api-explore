import { ReactElement } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type TBackground = {
  background: StaticImport,
};

export const Background = ({ background }: TBackground): ReactElement => 
  <Image fill alt='Imagem de background referente ao tema da API'
    src={background}>
  </Image>