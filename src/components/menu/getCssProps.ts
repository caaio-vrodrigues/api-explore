type TgetCssProps = (isFooter: boolean) => 
  {
    cssPropUl: string,
    dataTest: string,
  };

export const getCssProps: TgetCssProps = (isFooter) => {
  let cssPropUl = 'socialList';
  let dataTest = 'socialListItem-Menu';

  if(isFooter){
    cssPropUl = 'socialListFoot';
    dataTest = '';
  };

  return {
    cssPropUl,
    dataTest,
  };
};