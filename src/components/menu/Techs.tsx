import Image from "next/image";
import { getTechsImgs } from "./imgs/techs-imgs/getTechsImgs";

export const Techs = () => {
  return(
    <div className={`bg-zinc-400 mt-[30%] w-[220px] p-3 rounded-md`}>
      <div className={`m-auto flex items-center justify-center flex-wrap w-[200px]`}>
      {getTechsImgs.map(tech => {
        return(
          <Image key={tech.id} src={tech.img} alt={tech.alt} data-testid={'techImg'}
            className={`m-2 w-[40px] h-[40px]`}/>
        )
      })}
      </div>
    </div>
  );
};