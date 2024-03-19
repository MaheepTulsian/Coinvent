import express from "express";
import Event from "../database/eventSchema";
import Organisation from "../database/organisationSchema";
import User from "../database/userSchema";
import  bodyParser from "body-parser";
import multer from "multer";

const userRoute = express.Router();
userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({ extended: true }));
const upload = multer();

//to show all event to the users
userRoute.get("/allevents", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

//to find previous/history events of the user
userRoute.get("/previousEvents/:username", async (req, res) => {
  try {
    const user = await User.find(req.params.username);
     const events = await user.Event.find();
     const size = events.length;
     if(size == 0){
       res.json({ message: "No previous events" });
     }
      
     //it will give response as array of events you have attended
     //you can use this array to show the events to the user in frontend through loop
     for (let i = 0; i < size; i++) {
       const event = await Event.findById(events[i]);
       res.json(event);
     }

     } catch (error) {
     res.json({ message: error });
     }
});

//to find the favourite events of the user
userRoute.get("/favouriteEvents/:username", async (req, res) => {
  try {
    const user = await User.find(req.params.username);
    const events = await user.favourites.find();
    const size = events.length;
    if(size == 0){
      res.json({ message: "No favourite events" });
    }
      
    //it will give response as array of events you have marked as favourite
    //you can use this array to show the events to the user in frontend through loop
    for (let i = 0; i < size; i++) {
      const event = await Event.findById(events[i]);
      res.json(event);
    }

    } catch (error) {
    res.json({ message: error });
    }
});

//to find the nft of the user
userRoute.get("/nft/:username", async (req, res) => {
  try {
    const user = await User.find(req.params.username);
    const events = await user.nft.find();
    const size = events.length;
    if(size == 0){
      res.json({ message: "No nft" });
    }
      
    //it will give response as array of nft you have
    //you can use this array to show the nft to the user in frontend through loop
    for (let i = 0; i < size; i++) {
      const event = await Event.findById(events[i]);
      res.json(event);
    }

    } catch (error) {
    res.json({ message: error });
    }
});

//to filter the events based on the category
userRoute.get("/filterEvents/:category", async (req, res) => {
  try {
    const events = await Event.find({ category: req.params.category });
    res.json(events);
  } catch (error) {
    res.json({ message: error });
  }
});







