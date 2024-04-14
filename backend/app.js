import express from "express";
import userRoute from "./routes/userRoute.js";
import organisationRoute from "./routes/organisationRoute.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectingDatabase from "./database/connect.js";
import cookieParser from "cookie-parser";
import uploadRoute from "./routes/routeUpload.js";

dotenv.config({
  path: "./.env",
});
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const port = 3000 || process.env.PORT;
userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({ extended: true }));
organisationRoute.use(bodyParser.json());
organisationRoute.use(bodyParser.urlencoded({ extended: true }));

//jwt
app.use(express.json());
app.use(cookieParser());
// app.use(cors());

//routes
app.use("/user", userRoute);
app.use("/organisations", organisationRoute);
app.use("/api/users", uploadRoute);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
