import mongoose from "mongoose";

const DB_CONNECTION_URL = `mongodb+srv://nagendra9640922:Lovelysis9573@cluster0.yjuike8.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = () => {
  console.log("DB connected on " + new Date());

  const options = {
    keepAlive: 1,
    autoReconnect: true,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  return mongoose.connect(DB_CONNECTION_URL, options);
};
export default connectDB;
