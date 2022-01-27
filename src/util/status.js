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

export const statusOfLetters = Array.from(alphabet);

export const status = (guess, correctWord) => {
  const status = [];

  guess.split("").map((letter, i) => {
    const index = correctWord.indexOf(letter);

    if (index > -1) {
      if (index == i) {
        statusOfLetters[statusOfLetters.indexOf(letter)] = "YES";
        status.push("YES");
      } else {
        status.push("KINDA");
        statusOfLetters[statusOfLetters.indexOf(letter)] = "KINDA";
      }
    } else {
      statusOfLetters[statusOfLetters.indexOf(letter)] = "NO";
      status.push("NO");
    }
  });

  return [status];
};
