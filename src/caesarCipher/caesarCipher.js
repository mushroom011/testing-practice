const alphabetString = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray = alphabetString.split("");

const caesarCipher = (string, shift) => {
  if (shift > 25 || shift < 0)
    return "Shift must be less than 25 and more than 0";
  if (shift === 0) return string;

  let cipher = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      cipher += string[i];
      continue;
    }

    let indexOfLetter = alphabetArray.indexOf(string[i]);
    cipher += alphabetArray[indexOfLetter + shift];
  }

  return cipher;
};

export default caesarCipher;
