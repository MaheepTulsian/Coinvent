import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    organisation_name: {
      type: String,
    },
    event_title: {
      type: String,
    },
    event_start_date: {
      type: Date,
    },
    event_end_date: {
      type: Date,
    },
    event_description: {
      type: String,
      default: null,
    },
    event_venue: {
      type: String,
    },
    rule_regulation: {
      type: String,
    },
    eligibility: {
      type: String,
    },
    cover_img_url: {
      type: String,
    },
    nft_img_url: {
      type: String,
    },
    ticket_price: {
      type: Number,
    },
    ticket_sold: {
      type: Number,
    },
    ticket_available: {
      type: Number,
    },
    max_ticket_per_person: {
      type: Number,
    },
    wallet_address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
