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

//to show all event to the users that are active
userRoute.get("/allevents", async (req, res) => {
  const currentDate = new Date();
  try {
    const users = await Event.find({event_date: { $gt: currentDate }});
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

//to find previous/history events of the user
userRoute.get("/previousEvents/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const attendedEvents = user.attendedEvents;
    const size = attendedEvents.length;

    if (size === 0) {
      return res.json({ message: "No previous events" });
    }

    // Array to hold attended event objects
    const attendedEventObjects = [];

    for (let i = 0; i < size; i++) {
      const eventId = attendedEvents[i];
      const event = await Event.findById(eventId);
      if (event) {
        attendedEventObjects.push(event);
      }
    }

    // Sending all attended events in a single response
    res.json(attendedEventObjects);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



//to find the favourite events of the user
userRoute.get("/favouriteEvents/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const favouriteEvents = user.favourites;
    const size = favouriteEvents.length;

    if (size === 0) {
      return res.json({ message: "No favourite events" });
    }

    // Array to hold favourite event objects
    const favouriteEventObjects = [];

    for (let i = 0; i < size; i++) {
      const eventId = favouriteEvents[i];
      const event = await Event.findById(eventId);
      if (event) {
        favouriteEventObjects.push(event);
      }
    }
    // Sending all favourite events in a single response
    res.json(favouriteEventObjects);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//to find the nft image url of the user
userRoute.get("/nft/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const nft = user.nft;
    const size = nft.length;

    if (size === 0) {
      return res.json({ message: "No nft" });
    }

    // Array to hold image URLs
    const imageUrls = [];

    for (let i = 0; i < size; i++) {
      // Assuming nft[i].nft_img_url contains the URL of the image
      imageUrls.push(nft[i].nft_img_url);
    }

    // Sending all image URLs in a single response
    res.json(imageUrls);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
