import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-amber">Twitter</a>
          <a href="#" className="hover:text-amber">Instagram</a>
          <a href="#" className="hover:text-amber">Facebook</a>
          <a href="#" className="hover:text-amber">Spotify</a>
        </div>
        <p>&copy; 2026 Luke Smith. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
