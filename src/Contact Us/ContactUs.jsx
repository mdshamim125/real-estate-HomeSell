import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";

const ContactUs = () => {
  const { user } = useAuth();
  console.log(user);
  const [formData, setFormData] = useState({
    name: `${user.displayName}`,
    email: `${user.email}`,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="max-w-md w-full mx-auto" data-aos="slide-right">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="hidden lg:block w-1/2" data-aos="slide-left">
          <img
            src="https://i.ibb.co/ws2kq68/pexels-element-digital-1550337.jpg"
            alt="Contact Us"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
