import React, { useState } from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  const [coverImgUrl, setCoverImgUrl] = useState(null);
  const [nftImgUrl, setNftImgUrl] = useState(null);
  
  async function uploadImageToCloudinary(imageFile) {
    const apiUrl = "http://localhost:3000/api/users/upload";

    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const responseData = await response.json();
      return responseData.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  }

  async function handleImageUpload(imageFile, setImageUrl) {
    try {
      const imageUrl = await uploadImageToCloudinary(imageFile);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const inputName = e.target.name; // Get the name of the input that triggered the change

    if (!file) {
      console.error("No file selected");
      return;
    }
    // Call the appropriate function based on the input name
    if (inputName === "cover_img_url") {
      handleImageUpload(file, setCoverImgUrl);
    } else if (inputName === "nft_img_url") {
      handleImageUpload(file, setNftImgUrl);
    }
  };

  const formik = useFormik({
    initialValues: {
      event_title: "",
      description: "",
      rule_regulation: "",
      eligibility: "",
      cover_img_url: "",
      nft_img_url: "",
      max_tickets_available: "",
      ticket_price: "",
      max_ticket_per_person: "",
      event_start_date: "",
      event_end_date: "",
      event_venue: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          "http://localhost:3000/organisations/createEvent",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({
              event_title: values.event_title,
              description: values.description,
              rule_regulation: values.rule_regulation,
              eligibility: values.eligibility,
              cover_img_url: coverImgUrl,
              nft_img_url: nftImgUrl,
              max_tickets_available: values.max_tickets_available,
              ticket_price: values.ticket_price,
              max_ticket_per_person: values.max_ticket_per_person,
              event_start_date: values.event_start_date,
              event_end_date: values.event_end_date,
              event_venue: values.event_venue,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Form submitted successfully");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      }
    },
  });

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg w-full ">
      <h2 className="text-2xl font-bold mb-4 text-white">Create a new Event</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Event Title */}
        <div className="mt-4">
          <label
            htmlFor="event_title"
            className="block text-sm font-medium text-white"
          >
            Event Title
          </label>
          <input
            type="text"
            id="event_title"
            name="event_title"
            className="mt-1 p-2 w-full border rounded-md"
            value={formik.values.event_title}
            onChange={formik.handleChange}
          />
        </div>

        {/* Description */}
        <div className="mt-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-white"
          >
            Description
          </label>
          <input
            as="textarea"
            id="description"
            name="description"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
        </div>

        {/* Rules & Regulations */}
        <div className="mt-4">
          <label
            htmlFor="rule_regulation"
            className="block text-sm font-medium text-white"
          >
            Rules & Regulations
          </label>
          <input
            as="textarea"
            id="rule_regulation"
            name="rule_regulation"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            value={formik.values.rule_regulation}
            onChange={formik.handleChange}
          />
        </div>

        {/* Eligibility */}
        <div className="mt-4">
          <label
            htmlFor="eligibility"
            className="block text-sm font-medium text-white"
          >
            Eligibility
          </label>
          <input
            as="textarea"
            id="eligibility"
            name="eligibility"
            className="mt-1 p-2 w-full border rounded-md"
            value={formik.values.eligibility}
            onChange={formik.handleChange}
          />
        </div>

        {/* Cover Image & NFT image */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="mt-4">
            <label
              htmlFor="cover_img_url"
              className="block text-sm font-medium text-white"
            >
              Cover Image
            </label>
            <input
              type="file"
              id="cover_img_url"
              name="cover_img_url"
              accept="image/*"
              onChange={handleFileChange}
              className="text-indigo-400"
            />
          </div>

          {/* Price of each Ticket */}
          <div className="mt-4">
            <label
              htmlFor="nft_img_url"
              className="block text-sm font-medium text-white"
            >
              NFT Image
            </label>
            <input
              type="file"
              id="nft_img_url"
              name="nft_img_url"
              accept="image/*"
              onChange={handleFileChange}
              className="text-indigo-400"
            />
          </div>
        </div>

        {/* No. of Tickets Available */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="max_tickets_available"
              className="block text-sm font-medium text-white"
            >
              No. of Tickets Available
            </label>
            <input
              type="number"
              id="max_tickets_available"
              name="max_tickets_available"
              className="mt-1 p-2 w-full border rounded-md"
              value={formik.values.max_tickets_available}
              onChange={formik.handleChange}
            />
          </div>

          {/* Price of each Ticket */}
          <div>
            <label
              htmlFor="ticket_price"
              className="block text-sm font-medium text-white"
            >
              Price of each Ticket
            </label>
            <input
              type="number"
              id="ticket_price"
              name="ticket_price"
              className="mt-1 p-2 w-full border rounded-md"
              value={formik.values.ticket_price}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Max no of Tickets a unique person can buy */}
        <div className="mt-4">
          <label
            htmlFor="max_ticket_per_person"
            className="block text-sm font-medium text-white"
          >
            Max no of Tickets a unique person can buy
          </label>
          <input
            type="number"
            id="max_ticket_per_person"
            name="max_ticket_per_person"
            className="mt-1 p-2 w-full border rounded-md"
            value={formik.values.max_ticket_per_person}
            onChange={formik.handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {/* Event Start Date */}
          <div className="mt-4">
            <label
              htmlFor="event_start_date"
              className="block text-sm font-medium text-white"
            >
              Event Start Date
            </label>
            <input
              type="date"
              id="event_start_date"
              name="event_start_date"
              className="mt-1 p-2 w-full border rounded-md"
              value={formik.values.event_start_date}
              onChange={formik.handleChange}
            />
          </div>

          {/* Event End Date */}
          <div className="mt-4">
            <label
              htmlFor="event_end_date"
              className="block text-sm font-medium text-white"
            >
              Event End Date
            </label>
            <input
              type="date"
              id="event_end_date"
              name="event_end_date"
              className="mt-1 p-2 w-full border rounded-md"
              value={formik.values.event_end_date}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        {/* Event Venue */}
        <div className="mt-4">
          <label
            htmlFor="event_venue"
            className="block text-sm font-medium text-white"
          >
            Event Venue
          </label>
          <input
            type="text"
            id="event_venue"
            name="event_venue"
            className="mt-1 p-2 w-full border rounded-md"
            value={formik.values.event_venue}
            onChange={formik.handleChange}
          />
        </div>

        {/* Next button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
