import React from 'react';
import { loadSiteConfig } from '../utils/contentLoader';

const Footer = () => {
  const data = loadSiteConfig();
  const siteName = data?.siteName || 'Luke Smith';
  const copyrightYear = data?.copyrightYear || '2026';
  const socialLinks = data?.socialLinks || [];

  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              className="hover:text-amber transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.platform}
            </a>
          ))}
        </div>
        <p>&copy; {copyrightYear} {siteName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
