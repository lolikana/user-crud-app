import { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@/database/connect';
import { getUsers, postUser } from '@/database/controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongo().catch(() => res.status(405).json({ error: 'Error in the connection' }));

  // type of request
  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(req, res);
      break;
    case 'POST':
      postUser(req, res);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} not allowed`);
  }
  // [GET, POST, PUT, DELETE]

  //   res.status(200).json({ name: 'John Doe' });
}
