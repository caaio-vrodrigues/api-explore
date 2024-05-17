import { ApiCards } from "./api-cards/ApiCards";

export const Main = () => {
  return(
    <main className={`mainContent bg-blue-500 flex flex-col justify-center items-center`}>
      <ApiCards/>
    </main>
  );
};