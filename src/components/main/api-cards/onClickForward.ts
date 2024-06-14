type TClickForward = (
  cardInfos: {
    lastCardId: number,
    base: number, 
    apiCardsLeng: number,
    setLastCardId: (base: number) => void,
    setClickArrow: (show: boolean) => void,
  },
) => void

export const onClickForward: TClickForward = ({
  lastCardId, base, apiCardsLeng, setLastCardId, setClickArrow}) => {

  if(lastCardId === 0){
    setLastCardId(base);
  };
  if(lastCardId !== 0){
    setLastCardId(lastCardId + base);
  };
  if(apiCardsLeng === lastCardId + 4){
    setLastCardId(0);
  };
  
  setClickArrow(true);
};