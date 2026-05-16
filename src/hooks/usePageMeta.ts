import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  schema?: any | any[];
}

export const usePageMeta = ({ 
  title, 
  description, 
  keywords, 
  canonicalPath = '', 
  ogImage = 'https://i.ibb.co/CsSD4Zfk/Robert-Bedrijfsauto-562x272png.png',
  schema
}: PageMetaProps) => {
  useEffect(() => {
    document.title = title;
    
    // Helper to update or create tags
    const setMetaTag = (selector: string, attribute: string, value: string, createFn: () => HTMLElement) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = createFn();
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Description
    setMetaTag('meta[name="description"]', 'content', description, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      return meta;
    });

    // Keywords
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'content', keywords, () => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', 'keywords');
        return meta;
      });
    }

    // Canonical
    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}${canonicalPath}`;
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'content', title, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      return meta;
    });
    setMetaTag('meta[property="og:description"]', 'content', description, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      return meta;
    });
    setMetaTag('meta[property="og:url"]', 'content', fullUrl, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:url');
      return meta;
    });
    setMetaTag('meta[property="og:image"]', 'content', ogImage, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:image');
      return meta;
    });

    // Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image', () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:card');
      return meta;
    });
    setMetaTag('meta[name="twitter:title"]', 'content', title, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:title');
      return meta;
    });
    setMetaTag('meta[name="twitter:description"]', 'content', description, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:description');
      return meta;
    });
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage, () => {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'twitter:image');
      return meta;
    });

    // Schema.org JSON-LD
    let scriptTag = document.querySelector('script[id="schema-org-data"]');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('type', 'application/ld+json');
        scriptTag.setAttribute('id', 'schema-org-data');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    } else if (scriptTag) {
      document.head.removeChild(scriptTag);
    }

  }, [title, description, keywords, canonicalPath, ogImage, schema]);
};
