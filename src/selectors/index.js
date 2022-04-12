export default function convertToReadable(value = 0) {
  const regex = /^-?\d+(?:\.\d{0,3})?/;
  let modifiedNumber;
  let unit;

  if (value < 1e3) return String(value);

  if (value >= 1e3 && value < 1e6) {
    unit = 'k';
    modifiedNumber = (value / 1e3).toString().match(regex);
  }
  else if (value >= 1e6 && value < 1e9) {
    unit = 'M';
    modifiedNumber = (value / 1e6).toString().match(regex);
  }
  else if (value >= 1e9 && value < 1e12) {
    unit = 'B';
    modifiedNumber = (value / 1e9).toString().match(regex);
  }
  else if (value >= 1e12 && value < 1e15) {
    unit = 'T';
    modifiedNumber = (value / 1e12).toString().match(regex);
  }
  else if (value >= 1e15 && value < 1e18) {
    unit = 'Q';
    modifiedNumber = (value / 1e15).toString().match(regex);
  }

  const numberToString = modifiedNumber.toString();

  if (numberToString[numberToString.length - 1] === '0') {
    if (numberToString[numberToString.length - 2] === '0') {
      if (numberToString[numberToString.length - 3] === '0') {
        modifiedNumber = Number(modifiedNumber).toFixed(0);
        return `${modifiedNumber}${unit}`;
      }
      modifiedNumber = Number(modifiedNumber).toFixed(1);
      return `${modifiedNumber}${unit}`;
    }
    modifiedNumber = Number(modifiedNumber).toFixed(2);
    return `${modifiedNumber}${unit}`;
  }
  return `${modifiedNumber}${unit}`;
}
