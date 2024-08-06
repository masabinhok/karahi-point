import React from "react";

const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center p-10 bg-gradient-to-r from-green-400 to-green-800 text-white">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Contact Us
        </h1>
      </div>
      <div className="w-full max-w-md">
        <form className="bg-white rounded-lg shadow-lg p-8 text-gray-800">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none resize-none focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-300 w-full text-gray-800 font-semibold rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
