import { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@/database/connect';
import { deleteUser, getUser, upadteUser } from '@/database/controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongo().catch(() => res.status(405).json({ error: 'Error in the connection' }));

  const { method } = req;

  switch (method) {
    case 'GET':
      getUser(req, res);
      break;
    case 'PUT':
      upadteUser(req, res);
      break;
    case 'DELETE':
      deleteUser(req, res);
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} not allowed`);
  }
}
