import { ApiCards } from "./ApiCards";

export const Main = () => {
  return(
    <main className={`mainContent bg-blue-500 flex flex-col justify-center items-center`}>
      <ApiCards/>
    </main>
  );
};