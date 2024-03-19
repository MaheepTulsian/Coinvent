import mongoose from "mongoose";

//username and password to be added
const user1 = process.env.USER;

const password = process.env.PASSWORD;
const Bridge = "Bridge";
// const uri = `mongodb+srv://${user1}:${password}@cluster0.kg9taog.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${user1}:${password}@ticket.ltlxtvo.mongodb.net/?retryWrites=true&w=majority&appName=ticket`;

const connectingDatabase = async () => {
  try {
    await mongoose.connect(uri, {
      // Add this option if you're using a version of the MongoDB Node.js driver that requires it.
    });
    console.log("Database is connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

connectingDatabase();

export default connectingDatabase;
