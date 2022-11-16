import { model, models, Schema } from 'mongoose';

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  avatar: String,
  phone: String,
  email: String,
  role: String,
  createdOn: Date,
  status: String
});

const Users = models.User || model('User', userSchema);

export default Users;
