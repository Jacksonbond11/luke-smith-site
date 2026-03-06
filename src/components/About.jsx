import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const About = () => {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="text-center max-w-2xl mx-auto">
            <p className="mb-4">
              Luke Smith is a singer-songwriter who has been captivating audiences with his unique blend of folk, rock, and soul. His powerful vocals and heartfelt lyrics have earned him a dedicated following and critical acclaim.
            </p>
            <p>
              From intimate coffeehouse sets to sold-out theater shows, Luke's performances are always an unforgettable experience. He is currently in the studio working on his highly anticipated debut album.
            </p>
          </div>
      </div>
    </section>
  );
};

export default About;
