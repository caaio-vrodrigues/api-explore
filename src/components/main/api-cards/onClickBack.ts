type TClickBack = (
  lastIdCard: number, 
  base: number, 
  apiLeng: number, 
  setLastIdCard: (base: number) => void, 
  setClickForward: (show: boolean) => void,
) => void

export const onClickBack: TClickBack = (
  lastIdCard, base, apiLeng, setLastIdCard, setClickForward ) => {
  if(lastIdCard === 0){
    setLastIdCard(apiLeng - base);
  };
  if(lastIdCard !== 0){
    setLastIdCard(lastIdCard - base);
  };
  setClickForward(true);
};