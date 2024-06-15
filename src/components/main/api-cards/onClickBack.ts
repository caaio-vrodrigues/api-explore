type TClickBack = (
  cardInfos: {
    lastCardId: number,
    base: number, 
    apiCardsLeng: number,
    setLastCardId: (base: number) => void,
    setClickArrow: (show: boolean) => void,
  }
) => void

export const onClickBack: TClickBack = ({
  lastCardId, base, apiCardsLeng, setLastCardId, setClickArrow}) => {

  if(lastCardId === 0){
    setLastCardId(apiCardsLeng - base);
  };
  if(lastCardId !== 0){
    setLastCardId(lastCardId - base);
  };
  
  setClickArrow(true);
};