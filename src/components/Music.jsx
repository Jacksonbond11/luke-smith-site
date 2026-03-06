import React from 'react';
import useFadeIn from '../hooks/useFadeIn';
import { loadProjects } from '../utils/contentLoader';

const Music = () => {
  const [ref, isVisible] = useFadeIn();
  const data = loadProjects();
  const spotifyEmbedUrl = data?.spotifyEmbedUrl || '';
  const projects = data?.projects || [];

  return (
    <section
      id="music"
      ref={ref}
      className={`py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Music</h2>
        <div className="max-w-2xl mx-auto mb-16">
          <iframe 
            src={spotifyEmbedUrl}
            width="100%" 
            height="350" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </div>
        {projects.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-light-gray rounded-lg p-6 flex flex-col md:flex-row gap-6">
                  <img 
                    src={project.imagePath} 
                    alt={project.title}
                    className="w-40 h-40 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex flex-col justify-center">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p className="text-gray-400 mb-2">{project.year}</p>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      {project.spotifyLink && (
                        <a 
                          href={project.spotifyLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm hover:text-amber transition-colors"
                        >
                          Spotify
                        </a>
                      )}
                      {project.appleLink && (
                        <a 
                          href={project.appleLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm hover:text-amber transition-colors"
                        >
                          Apple Music
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Music;
