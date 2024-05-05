/* eslint-disable max-len */
const pps = [new HTMLHtmlElement()];

export const ADHDify = () => {
  for (let i = 0; i < pps.length; i++) {
    pps[i].innerHTML = pps[i].innerText.split(' ').map((word) => {
      const { length } = word;
      return word[0] === '<' && word[length - 1] === '>' ? (
        `<span style="text-decoration: underline;">
                  <span style="font-weight: bold;">${word.slice(0, Math.floor(length / 2))}</span>${word.slice(Math.floor(length / 2), length)}
          </span>`
      ) : (
        `<span style="font-weight: bold;">${word.slice(0, Math.floor(length / 2))}</span>${word.slice(Math.floor(length / 2), length)}`
      );
    }).join(' ');
  }
};
