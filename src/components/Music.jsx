import React from 'react';
import useFadeIn from '../hooks/useFadeIn';

const Music = () => {
  const [ref, isVisible] = useFadeIn();

  return (
    <section
      id="music"
      ref={ref}
      className={`py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Music</h2>
        <div className="max-w-2xl mx-auto">
          <iframe 
            src="https://open.spotify.com/embed/artist/0VBnm3tIXHgpZAvOMVEFBg?utm_source=generator&theme=0" 
            width="100%" 
            height="350" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Music;
