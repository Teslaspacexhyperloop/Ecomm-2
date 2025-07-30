import mongoose from "mongoose";
import colors from "colors";



const MONGO_URL =
  "mongodb+srv://samarraj1304:samking1304@cluster1.eet2bpl.mongodb.net/ecommerce"; //it is our connection string
//in case you are using different db than ecoomerce replace the name ecoomeerce at end of mongo url by the name of db

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(
      `connected to mongodb database ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error in mongo db ${error}`.bgRed.white);
  }
};

export default connectDB;
