export const formatNumberWithCommas = (number: number): string => {
  if (number === null || number === undefined) {
    return '';
  }

  let numStr = number.toString();

  for (let i = numStr.length - 3; i > 0; i -= 3) {
    numStr = numStr.slice(0, i) + ',' + numStr.slice(i);
  }

  return numStr;
};