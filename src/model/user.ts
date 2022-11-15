import { model, models, Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  avatar: String,
  phone: String,
  email: String,
  role: String,
  createdOn: String,
  status: String
});

const Users = models.User || model('User', userSchema);

export default Users;
