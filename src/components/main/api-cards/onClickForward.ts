type TClickForward = (
  lastIdCard: number, 
  base: number, 
  apiLeng: number, 
  setLastIdCard: (base: number) => void, 
  setClickForward: (show: boolean) => void,
) => void

export const onClickForward: TClickForward = (
  lastIdCard, base, apiLeng, setLastIdCard, setClickForward) => {
  if(lastIdCard === 0){
    setLastIdCard(base);
  };
  if(lastIdCard !== 0){
    setLastIdCard(lastIdCard + base);
  };
  if(apiLeng === lastIdCard + 4){
    setLastIdCard(0);
  };
  setClickForward(true);
};