import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Tours = () => {
  const [ref, isVisible] = useFadeIn();

  const tourDates = [
    {
      date: 'March 15, 2026',
      venue: 'Madison Square Garden',
      location: 'New York, NY',
      ticketLink: '#',
      imageSrc: 'https://source.unsplash.com/featured/?new-york',
    },
    {
      date: 'March 20, 2026',
      venue: 'Staples Center',
      location: 'Los Angeles, CA',
      ticketLink: '#',
      imageSrc: 'https://source.unsplash.com/featured/?los-angeles',
    },
    {
      date: 'March 25, 2026',
      venue: 'United Center',
      location: 'Chicago, IL',
      ticketLink: '#',
      imageSrc: 'https://source.unsplash.com/featured/?chicago',
    },
  ];

  return (
    <section
      id="tours"
      ref={ref}
      className={`py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shows</h2>
        <div className="max-w-4xl mx-auto">
          <div className="hidden md:grid grid-cols-4 gap-4 font-bold mb-4">
            <div>Date</div>
            <div>Venue</div>
            <div>Location</div>
            <div></div>
          </div>
          {tourDates.map((tour, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-b border-gray-700 py-4">
              <div>{tour.date}</div>
              <div>{tour.venue}</div>
              <div className="flex items-center">
                <img src={tour.imageSrc} alt={tour.location} className="w-16 h-16 object-cover rounded-lg mr-4" />
                {tour.location}
              </div>
              <div className="text-right">
                <a
                  href={tour.ticketLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber text-dark-gray font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-all duration-300"
                >
                  Buy Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
