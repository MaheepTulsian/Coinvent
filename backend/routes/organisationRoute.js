import express from "express";
import Event from "../database/eventSchema.js";
import Organisation from "../database/organisationSchema.js";
import User from "../database/userSchema.js";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import multer from "multer";
import bcrypt from "bcrypt";

const organisationRoute = express.Router();

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

//to create a new event
organisationRoute.post("/createEvent", upload.none(), async (req, res) => {
  const event = new Event({
    event_title: req.body.event_title,
    event_date: req.body.event_date,
    no_of_days: req.body.no_of_days,
    event_description: req.body.event_description,
    event_venue: req.body.event_venue,
    rule_regulation: req.body.rule_regulation,
    eligibility: req.body.eligibility,
    cover_img_url: req.body.cover_img_url,
    nft_img_url: req.body.nft_img_url,
    max_tickets_available: req.body.max_tickets_available,
    ticket_price: req.body.ticket_price,
    ticket_sold: 0,
    ticket_available: req.body.max_tickets_available,
    max_ticket_per_person: req.body.max_ticket_per_person,
    wallet_address: req.body.wallet_address,
  });
  // const user = getUserClaims();

  try {
    const claims = getUserClaims(req, res);

    // Check if claims exist
    if (!claims) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    // const cookie = req.cookies["jwt"];

    // const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);
    const savedEvent = await event.save();

    // Find the organization by its name
    const organisation = await Organisation.findOne({
      _id: claims._id,
    });

    // Ensure organisation is found
    if (!organisation) {
      return res.status(404).json({ message: "Organization not found" });
    }

    // Associate the event with the organization by pushing its ID into the events array
    organisation.events.push(savedEvent._id);
    await organisation.save(); // Save the updated organisation

    res.json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//to update the event details
organisationRoute.patch("/updateEvent", async (req, res) => {
  try {
    const claims = getUserClaims(req, res);

    // Check if claims exist
    if (!claims) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const updatedEvent = await Event.updateOne(
      { _id: claims._id },
      {
        $set: {
          event_title: req.body.event_title,
          event_date: req.body.event_date,
          no_of_days: req.body.no_of_days,
          event_description: req.body.event_description,
          event_venue: req.body.event_venue,
          rule_regulation: req.body.rule_regulation,
          eligibility: req.body.eligibility,
          cover_img_url: req.body.cover_img_url,
          nft_img_url: req.body.nft_img_url,
          max_tickets_available: req.body.max_tickets_available,
          ticket_price: req.body.ticket_price,
          max_ticket_per_person: req.body.max_ticket_per_person,
          wallet_address: req.body.wallet_address,
        },
      }
    );
    res.json(updatedEvent);
  } catch (error) {
    res.json({ message: error });
  }
});

//to show all the events of an organisation
organisationRoute.get("/showEvents", async (req, res) => {
  try {
    const claims = getUserClaims(req, res);

    // Check if claims exist
    if (!claims) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const organisation = await Organisation.findOne({
      _id: claims._id,
    });
    if (!organisation) {
      return res.status(404).json({ message: "Organization events not found" });
    }
    // Find all events that have an ID that is in the organisation's events array and return them as an array of events
    const events = await Event.find({ _id: { $in: organisation.events } });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
organisationRoute.post("/login", upload.none(), async (req, res) => {
  try {
    const user = await Organisation.findOne({ email: req.body.email });

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

    // Send success message along with JWT token
    res.send({ message: "Successfully logged in", token });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
});

organisationRoute.post("/register", upload.none(), async (req, res) => {
  const saltRounds = 10; // Number of salt rounds
  try {
    // Ensure req.body.password is defined and not null
    if (!req.body.password) {
      return res.status(400).send({ message: "Password is required" });
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new Organisation({
      organisation_name: req.body.organisation_name,
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
organisationRoute.get("/user2", async (req, res) => {
  // Add async here
  try {
    const cookie = req.cookies["jwt"];

    const claims = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

    if (!claims) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }

    const user = await Organisation.findOne({ _id: claims._id }).populate(
      "events"
    );

    // const { ...data } = await user.toJSON();
    res.send(user);
    // res.send({ message: "successfully login" });
  } catch (error) {
    return res.status(401).send({
      message: "Unauthenticated",
    });
  }
});

organisationRoute.post("/logout", upload.none(), (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });

  res.send({
    message: "Successfully logout",
  });
});

export default organisationRoute;
