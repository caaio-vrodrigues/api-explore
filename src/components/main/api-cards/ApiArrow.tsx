import { ElementType } from "react";

//funcs
import { onClickBack } from "./onClickBack";
import { onClickForward } from "./onClickForward";

type TApiArrow = {
  Icon: ElementType,
  arrowDirection: 'back' | 'forward',
  cardInfos: {
    lastCardId: number,
    base: number, 
    apiCardsLeng: number,
    setLastCardId: (base: number) => void,
    setClickArrow: (show: boolean) => void,
  },
};

export const ApiArrow = ({ Icon, arrowDirection, cardInfos }: TApiArrow) => {
  return(
    <button className={`${arrowDirection === 'back' && `mr-auto`}`}>
      <Icon 
        className={`w-[35px] h-[35px]`}
        onClick={() => arrowDirection === 'back' ? 
          onClickBack(cardInfos) : onClickForward(cardInfos)}
      />
    </button>
  );
};