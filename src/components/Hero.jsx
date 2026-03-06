import React from 'react';

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/featured/?musician')" }}
    >
      <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full"></div>
      <div className="text-center z-10">
        <h2 className="text-5xl font-extrabold">Luke Smith</h2>
        <p className="mt-4 text-xl">Musician | Songwriter | Performer</p>
        <a
          href="#music"
          className="mt-8 inline-block bg-amber text-dark-gray font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300"
        >
          Listen Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
