import { useContext } from "react";

//icons
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

//context
import ContextProvider from "@/context/ContextMaster";

//components
import { ApiArrow } from "./ApiArrow";

type TCardArrows = {
  setClickArrow: React.Dispatch<React.SetStateAction<boolean>>,
  base: number,
  apiCardsLeng: number,
};

export const ApiArrowsCont = ({ 
  setClickArrow, base, apiCardsLeng }: TCardArrows) => {

  const { lastCardId, setLastCardId} = useContext(ContextProvider);

  const cardInfos = {
    lastCardId,
    base,
    apiCardsLeng,
    setLastCardId,
    setClickArrow,
  };

  return(
    <div className={`cardArrows w-[90%] flex mt-8`}>
      <ApiArrow Icon={IconArrowLeft} arrowDirection={'back'} cardInfos={cardInfos}/>
      <ApiArrow Icon={IconArrowRight} arrowDirection={'forward'} cardInfos={cardInfos}/>
      {/* <button className={`mr-auto`}>
        <IconArrowLeft 
          className={`w-[35px] h-[35px]`}
          onClick={() => onClickBack(cardInfos)}/>
      </button>
      <button className={`ml-auto`}>
        <IconArrowRight 
          className={`w-[35px] h-[35px]`}
          onClick={() => onClickForward(cardInfos)}/>
      </button> */}
    </div>
  );
};