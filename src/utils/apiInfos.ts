import { StaticImport } from "next/dist/shared/lib/get-img-props";

//imgs
import climaTempo from '@/components/main/imgs/clima-tempo.jpg';
import apiImg from '@/components/menu/imgs/img-api.jpg';

type TapiInfos = {
  id: number,
  apiName: string,
  descr: string,
  img: StaticImport,
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
    apiName: 'Name API 2',
    descr: '',
    img: apiImg,
  },
  {
    id: 3,
    apiName: 'Name API 3',
    descr: '',
    img: apiImg,
  },
  {
    id: 4,
    apiName: 'Name API 4',
    descr: '',
    img: apiImg,
  },
  {
    id: 5,
    apiName: 'Name API 5',
    descr: '',
    img: apiImg,
  },
  {
    id: 6,
    apiName: 'Name API 6',
    descr: '',
    img: apiImg,
  },
  {
    id: 7,
    apiName: 'Name API 7',
    descr: '',
    img: apiImg,
  },
  {
    id: 8,
    apiName: 'Name API 8',
    descr: '',
    img: apiImg,
  },
  {
    id: 9,
    apiName: 'Name API 9',
    descr: '',
    img: apiImg,
  },
  {
    id: 10,
    apiName: 'Name API 10',
    descr: '',
    img: apiImg,
  },
  {
    id: 11,
    apiName: 'Name API 11',
    descr: '',
    img: apiImg,
  },
  {
    id: 12,
    apiName: 'Name API 12',
    descr: '',
    img: apiImg,
  },
];