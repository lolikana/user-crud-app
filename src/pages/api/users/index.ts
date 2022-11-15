import { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@/database/connect';
import { deleteUser, getUsers, postUser, upadteUser } from '@/database/controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongo().catch(() => res.status(405).json({ err: 'Error in the connection' }));

  // type of request
  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(req, res);
      break;
    case 'POST':
      postUser(req, res);
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
  // [GET, POST, PUT, DELETE]

  //   res.status(200).json({ name: 'John Doe' });
}
