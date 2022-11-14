import { NextApiRequest, NextApiResponse } from 'next';

import connectMongo from '@/database/connect';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongo().catch(() => res.status(405).json({ err: 'Error in the connection' }));

  // type of request
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json({ method, name: 'GET Request' });
      break;
    case 'POST':
      res.status(200).json({ method, name: 'POST Request' });
      break;
    case 'PUT':
      res.status(200).json({ method, name: 'PUT Request' });
      break;
    case 'DELETE':
      res.status(200).json({ method, name: 'DELETE Request' });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} not allowed`);
  }
  // [GET, POST, PUT, DELETE]

  res.status(200).json({ name: 'John Doe' });
}
