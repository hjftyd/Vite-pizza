export const calcPriceSize = (price: number, size: number) => {
  let result = 0;

  switch (size) {
    case 25:
      result = price;
      break;
    case 30:
      result = price + 160;
      break;
    case 35:
      result = price + 350;
      break;
  }

  return Math.round(result);
};
