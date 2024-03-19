import express from "express";
import Event from "../database/eventSchema.js";
import Organisation from "../database/organisationSchema.js";
import User from "../database/userSchema.js";
import  bodyParser from "body-parser";
import multer from "multer";

const organisationRoute = express.Router();

const upload = multer();

//to create a new event
organisationRoute.post("/createEvent/:organisation_name", async (req, res) => {
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
     
     try {
       const savedEvent = await event.save();
   
       // Find the organization by its name
       const organisation = await Organisation.findOne({ organisation_name: req.params.organisation_name });
   
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
organisationRoute.patch("/updateEvent/:id", async (req, res) => {
  try {
    const updatedEvent = await Event.updateOne(
      { _id: req.params.id },
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
organisationRoute.get("/showEvents/:organisation_name", async (req, res) => {
  try {
    const organisation = await Organisation.findOne({ organisation_name: req.params.organisation_name });
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


export default organisationRoute;