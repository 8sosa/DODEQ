// Instagram.jsx
import React from 'react';
import './insta.css';
import InstagramGrid from './InstaGrid';


export default function Instagram() {

  return (
    <section className="instaSect">
      <h2 className="inter text-2xl font-semibold mb-4 text-center">
        Follow on Instagram
      </h2>
      <InstagramGrid
        postUrls={[
          'https://www.instagram.com/p/DMbPd_UPj8Z/',
          'https://www.instagram.com/p/DFQKeU7RLT6/',
          'https://www.instagram.com/p/DGhrUGCO4Nj/',
          'https://www.instagram.com/p/DESH0E9x3jw/',
          'https://www.instagram.com/p/DAkTo25uc_U/',
          'https://www.instagram.com/p/DACGgMHy7RQ/'
        ]}
      />
    </section>
  );
}
