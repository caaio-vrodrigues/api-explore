import { ApiMain } from "./api-cards/ApiMain";

export const Main = () => {
  return(
    <main className={`mainContent bg-blue-500 flex flex-col justify-center items-center`}>
      <ApiMain/>
    </main>
  );
};