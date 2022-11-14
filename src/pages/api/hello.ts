// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@/database/connect';

type Data = {
  name: string;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  connectMongo();
  res.status(200).json({ name: 'John Doe' });
}
