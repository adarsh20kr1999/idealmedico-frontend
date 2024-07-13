import React, { useRef } from 'react';
import Button from "../layouts/Button";
import emailjs from '@emailjs/browser';

const Contact = ({ closeForm }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_l8jj2ze', 'template_2d0y5cj', form.current, 'bYNhzVJV8dQo46EEL')
      .then(
        () => {
          console.log('SUCCESS!');
          closeForm(); // Close the form on success
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form ref={form} onSubmit={sendEmail} className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl">
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">Your Query</h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="user_name"
              placeholder="Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </div>
          {/* <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              name="user_number"
              placeholder="Phone No."
              required
            />
          </div> */}
          <div>
            <textarea
              className="py-3 px-1 bg-[#d5f2ec] rounded-lg"
              name="message"
              cols="40"
              rows="5"
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <div className="flex gap-5">
            <Button title="Submit Query" />
            <button
              className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              type="button"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
