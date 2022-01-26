export const status = (guess, correctWord) => {
  const status = [];

  guess.split("").map((letter, i) => {
    const index = correctWord.indexOf(letter);

    if (index > -1) {
      if (index == i) {
        status.push("YES");
      } else {
        status.push("KINDA");
      }
    } else {
      status.push("NO");
    }
  });

  return [status];
};
