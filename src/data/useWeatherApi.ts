import { useState, useEffect } from "react";

export const useWeatherApi = () => {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const getData = async () => {
      const apiKey = 'K9izveB1dCAARGFT2MoZjZ9X0X2mTMgR';
      const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${'New York'}`;
  
      const getCityKey = await fetch(url)
        .then(data => data.json())
        .catch(error => error);
  
      //data
      const data = await getCityKey;
      console.log(data)

      //cityKey
      const cityKey = data[0].Key;

      //país
      const country = data[0].Country.LocalizedName
      console.log(country);

      if(cityKey){
        const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apiKey}&language=pt-br`;

        const data = await fetch(url)
          .then(data => data.json())
          .catch(error => error);

        setApiData(data);
      };
    };

    // getData();
  }, []);
  
  return apiData;
};