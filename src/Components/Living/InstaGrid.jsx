// InstagramGrid.jsx
import React, { useEffect } from 'react';

/**
 * Normalize an Instagram post URL to canonical form:
 * keeps only the /p/<id>/ path and ensures trailing slash.
 */
function normalizeInstagramPostUrl(raw) {
  try {
    const url = new URL(raw);
    if (!/instagram\.com$/.test(url.hostname) && !/instagram\.com$/.test(url.hostname.replace(/^www\./, ''))) {
      return null;
    }
    const match = url.pathname.match(/^\/p\/[^/]+\/?/);
    if (!match) return null;
    let path = match[0];
    if (!path.endsWith('/')) path += '/';
    return `https://www.instagram.com${path}`;
  } catch {
    return null;
  }
}

export default function InstagramGrid({ postUrls = [] }) {
  // load embed.js once
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        }
      };
    } else if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, []);

  // re-process whenever postUrls change
  useEffect(() => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, [postUrls]);

  const normalized = postUrls
    .map(normalizeInstagramPostUrl)
    .filter(Boolean)
    // dedupe preserving order
    .filter((v, i, arr) => arr.indexOf(v) === i);

  if (normalized.length === 0) {
    return <div>No valid Instagram post URLs provided.</div>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gap: 24,
        gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
        maxWidth: 1000,
        margin: '0 auto',
      }}
    >
      {normalized.map((url) => (
        <blockquote
          key={url}
          className="instagram-media"
        //   data-instgrm-captioned
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: 3,
            boxShadow:
              '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: 1,
            maxWidth: 540,
            minWidth: 326,
            padding: 0,
            width: '100%',
          }}
        ></blockquote>
      ))}
    </div>
  );
}
