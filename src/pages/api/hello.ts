// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  res.status(200).json({ name: 'John Doe' });
};
