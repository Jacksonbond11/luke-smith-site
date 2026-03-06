import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Contact = () => {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
        <div className="max-w-lg mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-light-gray rounded-lg border border-gray-700 focus:outline-none focus:border-amber"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-light-gray rounded-lg border border-gray-700 focus:outline-none focus:border-amber"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 bg-light-gray rounded-lg border border-gray-700 focus:outline-none focus:border-amber"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-amber text-dark-gray font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
