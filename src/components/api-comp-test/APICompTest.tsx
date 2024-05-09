import { useState, useEffect } from "react";

export const APICompTest = () => {
  const [data, setData] = useState<any>(null);
  const [active, setActive] = useState<boolean>(false);

    
    useEffect(() => {
      const getData = async () => {
        try{
          const request = await fetch('https://jsonplaceholder.typicode.com/todos/1');
          const data = await request.json();
          data && setData(data);
          console.log(data)
        }catch(error){
          if(error instanceof Error){
            console.log(error.message);
          };
        };
      };

      active ? getData() : setData(null);
    }, [active]);

  return(
    <div className={`flex flex-col items-center bg-zinc-700 p-3`}>
      <h1>Testando Componente API</h1>
      <br />
      <button onClick={() => setActive(val => !val)}
        className={`border border-white p-3 m-auto`}
      >Test API
      </button>
      <br />
      {data && 
        <div className={`flex flex-col items-center`}>
          <span>id: {data.id}</span>
          <p>{data.title}</p>
        </div>}
    </div>
  );
};