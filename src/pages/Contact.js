import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    contactmail: '',
    contactnumber: '',
    subject: '',
    enquiry: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://ways-service.onrender.com/api/viewer/contact', formData);
      // Handle success or perform any other actions
      setFormData({
        contactmail: '',
        contactnumber: '',
        subject: '',
        enquiry: ''
      });
      console.log('Form data sent successfully');
    } catch (error) {
      // Handle error or perform any other actions
      console.error('Error sending form data:', error);
    }
  };

  return (
    <section className=" left-0 right-0 z-0 rounded-lg overflow-hidden ">
      <div className="pt-3 pb-2 lg:pb-4 px-4 mx-auto max-w-screen-md bg-[#242526] rounded-xl border border-[#7e817d] ">
        <h2 className="mb-2 text-3xl tracking-tight font-extrabold text-center text-white">Contact Us</h2>
        <p className="mb-4 lg:mb-8 font-light text-center text-gray-200 sm:text-xl">Let's get in touch for any enquiries:</p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">Your email</label>
            <input
              type="email"
              id="email"
              name="contactmail"
              value={formData.contactmail}
              onChange={handleChange}
              className="shadow-sm border block w-full p-2.5 border-gray-600 bg-[#4e4e52] placeholder-gray-400 text-white shadow-sm-light"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="contactnumber" className="block mb-1 text-sm font-medium text-gray-300">Contact Number</label>
            <input
              type="text"
              id="contactnumber"
              name="contactnumber"
              value={formData.contactnumber}
              onChange={handleChange}
              className="block p-3 w-full text-sm rounded-lg border shadow-sm bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white shadow-sm-light"
              placeholder="Contact No: e.g. +9779800000000"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 text-sm font-medium text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="block p-3 w-full text-sm rounded-lg border shadow-sm bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-300">Your message</label>
            <textarea
              id="message"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              rows="6"
              className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-[#4e4e52] border-gray-600 placeholder-gray-400 text-white"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 md:w-[35%] w-fit  px-5 text-sm font-medium text-center text-white ml-[30%]   bg-blue-800 hover:bg-blue-700 contactSend"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;