import express from "express";
import userRoute from "./routes/userRoute.js";
import organisationRoute from "./routes/organisationRoute.js";
import cors from "cors";

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;


//routes
app.use("/user", userRoute);
app.use("/organisations", organisationRoute);


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