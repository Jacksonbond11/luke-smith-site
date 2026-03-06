import yaml from 'js-yaml';
import contentYaml from '../content/content.yaml?raw';

let cachedContent = null;

const parseYaml = (raw) => {
  try {
    return yaml.load(raw);
  } catch (e) {
    console.error('YAML parse error:', e);
    return null;
  }
};

const loadContent = () => {
  if (!cachedContent) {
    cachedContent = parseYaml(contentYaml);
  }
  return cachedContent;
};

export const loadSiteConfig = () => {
  const content = loadContent();
  return content ? {
    siteName: content.siteName,
    copyrightYear: content.copyrightYear,
    socialLinks: content.socialLinks
  } : null;
};

export const loadAbout = () => {
  const content = loadContent();
  return content ? { bio: content.bio } : null;
};

export const loadProjects = () => {
  const content = loadContent();
  return content ? {
    spotifyEmbedUrl: content.spotifyEmbedUrl,
    projects: content.projects
  } : null;
};

export const loadTours = () => {
  const content = loadContent();
  return content ? { shows: content.shows } : null;
};

export const loadContact = () => {
  const content = loadContent();
  return content ? {
    email: content.email,
    management: content.management
  } : null;
};
