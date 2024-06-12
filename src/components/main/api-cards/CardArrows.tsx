import { useContext } from "react";

//icons
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

//context
import ContextProvider from "@/context/ContextMaster";

//funcs
import { onClickBack } from "./onClickBack";
import { onClickForward } from "./onClickForward";

type TCardArrows = {
  setClickForward: React.Dispatch<React.SetStateAction<boolean>>,
  base: number,
  apiInfosLeng: number,
};

export const CardArrows = ({ 
  setClickForward, base, apiInfosLeng }: TCardArrows) => {

  const {lastIdCard, setLastIdCard} = useContext(ContextProvider);

  return(
    <div className={`w-[90%] flex mt-8`}>
      <button className={`mr-auto`}>
        <IconArrowLeft 
          className={`w-[35px] h-[35px] hover:text-blue-200`}
          onClick={() => onClickBack(lastIdCard, base, apiInfosLeng, 
            setLastIdCard, setClickForward)}/>
      </button>
      <button className={`ml-auto`}>
        <IconArrowRight 
          className={`w-[35px] h-[35px] hover:text-blue-200`}
          onClick={() => onClickForward(lastIdCard, base, apiInfosLeng, 
            setLastIdCard, setClickForward)}/>
      </button>
    </div>
  );
};