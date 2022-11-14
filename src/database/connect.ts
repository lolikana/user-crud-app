import mongoose from 'mongoose';

const MONGO_URl =
  'mongodb+srv://nextjs-crud-admin:TDkvLv0Z30We8Rdo@nextjs-crud-users.kilq1hw.mongodb.net/?retryWrites=true&w=majority';

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URl);

    if (connection.readyState === 1) return console.log('Database Connected');
  } catch (err) {
    return Promise.reject(err);
  }
};

export default connectMongo;
