// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: 'John Doe' });
}

const pps = document.querySelectorAll('p');

const ADHDify = (paragraphList: NodeList) => {
  for (let i = 0; i < paragraphList.length; i++) {
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

ADHDify(pps);
