import React from 'react';
import { Formik, Form, Field } from 'formik';

const SignUpForm = () => {
  const handleSubmit = (values) => {
    // Handle form submission logic here
    console.log(values); // For demonstration, you can replace this with your submission logic
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-3xl shadow-lg w-full ">
      <h2 className="text-2xl font-bold mb-4 text-white">Create a new Event</h2>

      <Formik
        initialValues={{
          event_title: '',
          description: '',
          rule_regulation: '',
          eligibility: '',
          cover_img_url: null,
          nft_img_url: null,
          max_tickets_available: '',
          ticket_price: '',
          max_ticket_per_person: '',
          event_start_date: '',
          event_end_date: '',
          event_venue: ''
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            {/* Event Title */}
            <div className="mt-4">
              <label htmlFor="event_title" className="block text-sm font-medium text-white">
                Event Title
              </label>
              <Field
                type="text"
                id="event_title"
                name="event_title"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Description */}
            <div className="mt-4">
              <label htmlFor="description" className="block text-sm font-medium text-white">
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Rules & Regulations */}
            <div className="mt-4">
              <label htmlFor="rule_regulation" className="block text-sm font-medium text-white">
                Rules & Regulations
              </label>
              <Field
                as="textarea"
                id="rule_regulation"
                name="rule_regulation"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Eligibility */}
            <div className="mt-4">
              <label htmlFor="eligibility" className="block text-sm font-medium text-white">
                Eligibility
              </label>
              <Field
                as="textarea"
                id="eligibility"
                name="eligibility"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Cover Image & NFT image */}
            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="mt-4">
                <label htmlFor="cover_img_url" className="block text-sm font-medium text-white">
                    Cover Image
                </label>
                <Field
                    type="file"
                    id="cover_img_url"
                    name="cover_img_url"
                    accept="image/*"
                    className="text-indigo-400"
                />
                </div>

              {/* Price of each Ticket */}
              <div className="mt-4">
                <label htmlFor="nft_img_url" className="block text-sm font-medium text-white">
                    NFT Image
                </label>
                <Field
                    type="file"
                    id="nft_img_url"
                    name="nft_img_url"
                    accept="image/*"
                    className="text-indigo-400"
                />
                </div>
            </div>

            {/* No. of Tickets Available */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="max_tickets_available" className="block text-sm font-medium text-white">
                  No. of Tickets Available
                </label>
                <Field
                  type="number"
                  id="max_tickets_available"
                  name="max_tickets_available"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              {/* Price of each Ticket */}
              <div>
                <label htmlFor="ticket_price" className="block text-sm font-medium text-white">
                  Price of each Ticket
                </label>
                <Field
                  type="number"
                  id="ticket_price"
                  name="ticket_price"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>

            {/* Max no of Tickets a unique person can buy */}
            <div className="mt-4">
              <label htmlFor="max_ticket_per_person" className="block text-sm font-medium text-white">
                Max no of Tickets a unique person can buy
              </label>
              <Field
                type="number"
                id="max_ticket_per_person"
                name="max_ticket_per_person"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Event Start Date */}
                <div className="mt-4">
                    <label htmlFor="event_start_date" className="block text-sm font-medium text-white">
                        Event Start Date
                    </label>
                    <Field
                        type="date"
                        id="event_start_date"
                        name="event_start_date"
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>

                {/* Event End Date */}
                <div className="mt-4">
                    <label htmlFor="event_end_date" className="block text-sm font-medium text-white">
                        Event End Date
                    </label>
                    <Field
                        type="date"
                        id="event_end_date"
                        name="event_end_date"
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div>
            </div>

            {/* Event Venue */}
            <div className="mt-4">
              <label htmlFor="event_venue" className="block text-sm font-medium text-white">
                Event Venue
              </label>
              <Field
                type="text"
                id="event_venue"
                name="event_venue"
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            {/* Next button */}
            <div className="mt-6">
              <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
