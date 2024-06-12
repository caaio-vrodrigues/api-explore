import { useContext } from "react";

//data
import { apiInfos } from "@/utils/apiInfos";

//context
import ContextProvider from "@/context/ContextMaster";

export const ChangeCards = () => {
  const { lastIdCard } = useContext(ContextProvider);

  return(
    <>
      {apiInfos.map(card => {
        if(card.id > lastIdCard && card.id < lastIdCard + 5){
          return (
            <article key={card.id} className={`border border-white bg-zinc-200 
            rounded-md text-center w-[40%] h-[200px] m-auto mt-8 text-blue-600`}>
              <h1>{card.api}</h1>
            </article>
          )
        };
      })}
    </>
  );
};