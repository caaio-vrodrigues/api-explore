import { StaticImport } from "next/dist/shared/lib/get-img-props";

//imgs
import climaTempo from '@/components/main/imgs/clima-tempo.jpg';
import pokeApiImg from '@/components/main/imgs/pokeapi-bg.jpg';
import sabreLuz from '@/components/main/imgs/sabre-luz.jpg';

type TapiInfos = {
  id: number,
  apiName: string,
  descr: string,
  img: StaticImport | null,
}[];

export const apiInfos: TapiInfos = [
  {
    id: 1,
    apiName: 'Clima Tempo',
    descr: '',
    img: climaTempo,
  },
  {
    id: 2,
    apiName: 'PokeApi',
    descr: '',
    img: pokeApiImg,
  },
  {
    id: 3,
    apiName: 'Star Wars',
    descr: '',
    img: sabreLuz,
  },
  {
    id: 4,
    apiName: 'Empty',
    descr: '',
    img: null,
  },
  {
    id: 5,
    apiName: 'Empty',
    descr: '',
    img: null,
  },
  {
    id: 6,
    apiName: 'Empty',
    descr: '',
    img: null,
  },
  {
    id: 7,
    apiName: 'Empty',
    descr: '',
    img: null,
  },
  {
    id: 8,
    apiName: 'Empty',
    descr: '',
    img: null,
  },
];