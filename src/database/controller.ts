import { NextApiRequest, NextApiResponse } from 'next';

import Users from '@/model/user';

/** Controller */

// get : http://localhost:3000/api/users
export async function getUsers(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: 'Data not Found' });
    return res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: 'Error while fetching data' });
  }
}

// post : http://localhost:3000/api/users
export async function postUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formData = req.body;
    if (!formData) {
      return res.status(404).json({ error: 'Form data not provided' });
    } else {
      Users.create(formData, function (_err: unknown, data: typeof Users) {
        return res.status(200).json(data);
      });
    }
  } catch (error) {
    return res.status(404).json({ error: ' Error while posting data' });
  }
}

// put : http://localhost:3000/api/users/?userId=[id]
export async function upadteUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const updatedUser = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(updatedUser);
    }
    res.status(404).json({ error: 'No user found' });
  } catch (error) {
    return res.status(404).json({ error: ' Error while updating data' });
  }
}

// delete : http://localhost:3000/api/users/?userId=[id]
export async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;

    if (userId) {
      const deletedUser = await Users.findByIdAndDelete(userId);
      res.status(200).json(deletedUser);
    }
    res.status(404).json({ error: 'No user found' });
  } catch (error) {
    return res.status(404).json({ error: ' Error while deleting data' });
  }
}

// げt : http://localhost:3000/api/users/?userId=[id]
export async function getUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;
    const user = await Users.findById(userId);
    if (!user) return res.status(404).json({ error: 'No user found' });
    return res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: 'Error while fetching data' });
  }
}
