import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { loadAbout } from '../utils/contentLoader';

const About = () => {
  const [ref, isVisible] = useFadeIn();
  const data = loadAbout();
  const bio = data?.bio || [];

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen flex items-center justify-end transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-right mb-8">About Me</h2>
        <div className="text-right max-w-2xl ml-auto">
            {bio.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
      </div>
    </section>
  );
};

export default About;
