export const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "ENTER",
  "BACK",
];

export const keyboardAlphabet = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];

export const status = (
  guess,
  correctWord,
  statusOfLetters,
  setStatusOfLetters
) => {
  const status = [];
  const copyOfStatuses = [...statusOfLetters];

  guess.split("").map((letter, i) => {
    const index = correctWord.indexOf(letter);
    if (index > -1) {
      if (index == i) {
        copyOfStatuses[statusOfLetters.indexOf(letter)] = "YES";

        status.push("YES");
      } else {
        status.push("KINDA");
        copyOfStatuses[statusOfLetters.indexOf(letter)] = "KINDA";
      }
    } else {
      copyOfStatuses[statusOfLetters.indexOf(letter)] = "NO";
      status.push("NO");
    }
  });
  setStatusOfLetters(copyOfStatuses);

  return [status];
};
