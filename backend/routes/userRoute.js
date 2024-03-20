import express from "express";
import Event from "../database/eventSchema.js";
import Organisation from "../database/organisationSchema.js";
import User from "../database/userSchema.js";
import bodyParser from "body-parser";
import multer from "multer";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const userRoute = express.Router();
userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({ extended: true }));
const upload = multer();
const getUserClaims = (req, res) => {
  try {
    const cookie = req.cookies["jwt"];

    const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

    if (!claims) {
      return null;
    }

    return claims;
  } catch (error) {
    return null;
  }
};

userRoute.get("/user2", async (req, res) => {
  const userClaims = getUserClaims(req, res);
  if (!userClaims) {
    return res.status(401).send({
      message: "Unauthenticated",
    });
  }
  res.send(userClaims._id);
});
//to show all event to the users that are active
userRoute.get("/allevents", async (req, res) => {
  const currentDate = new Date();
  try {
    const users = await Event.find({ event_start_date: { $gt: currentDate } });
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
userRoute.get("/favouriteEvents", async (req, res) => {
  try {
    const userClaims = getUserClaims(req, res);
    if (!userClaims) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }
    const user = await User.findOne({ _id: userClaims._id });
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
    res.json(favouriteEventObjects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
userRoute.get("/favouriteEvents1", async (req, res) => {
  try {
    const userClaims = getUserClaims(req, res);
    if (!userClaims) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }

    const user = await User.findOne({ _id: userClaims._id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // const { ...data } = await user.toJSON();
    res.send(user);
    // Check if the user has the 'favourites' property
    // if (!user.favourites || !Array.isArray(user.favourites)) {
    //   return res.json({ message: "No favourite events" });
    // }

    // const favouriteEvents = user.favourites;
    // const size = favouriteEvents.length;

    // if (size === 0) {
    //   return res.json({ message: "No favourite events" });
    // }

    // // Array to hold favourite event objects
    // const favouriteEventObjects = [];

    // for (let i = 0; i < size; i++) {
    //   const eventId = favouriteEvents[i];
    //   const event = await Event.findById(eventId);
    //   if (event) {
    //     favouriteEventObjects.push(event);
    //   }
    // }
    // res.json(favouriteEventObjects);
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

userRoute.post("/register", async (req, res) => {
  const saltRounds = 10; // Number of salt rounds
  try {
    // Ensure req.body.password is defined and not null
    if (!req.body.password) {
      return res.status(400).send({ message: "Password is required" });
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const result = await user.save();

    const { password, ...data } = await result.toJSON();

    res.send(data);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

userRoute.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(400).send({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET);
    console.log(token);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    try {
      const cookie = req.cookies["jwt"];

      const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

      if (!claims) {
        return res.status(401).send({
          message: "Unauthenticated",
        });
      }

      const user = await User.findOne({ _id: claims._id });

      const { ...data } = await user.toJSON();
      // const userData = {
      //   _id: user._id,
      //   username: user.username,
      //   name: user.name,
      //   favourites: user.favourites,
      //   email: user.email,
      //   password: user.password,
      //   nft: user.nft,
      //   // Include other fields as needed
      // };
      // res.send(user);
      res.send({ message: "successfully login" });
    } catch (error) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }
    // res.send({
    //   message: "Success",
    // });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});
userRoute.get("/userid", async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];

    const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

    if (!claims) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }
    res.send(claims);
  } catch (error) {
    return res.status(401).send({
      message: "Unauthenticated",
    });
  }
});

userRoute.post("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });

  res.send({
    message: "Success",
  });
});

export default userRoute;
