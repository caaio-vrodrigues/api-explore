import { apiInfos } from "@/utils/apiInfos";

type TForward = {
  counter: number;
};

export const Forward = ({ counter }: TForward) => {
  return(
    <>
      {apiInfos.map(card => {
    if(card.id <= counter) return;

    if(card.id > counter){
      counter++;
    };

    if(card.id > 4){
      return(
        <article key={card.id} className={`border border-white bg-zinc-200 rounded-md 
        text-center w-[40%] h-[200px] m-auto mt-8 text-blue-600`}>
          <h1>{card.api}</h1>
        </article>
      );
    };
  })}
    </>
  )
}