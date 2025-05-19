import React from 'react';
import './Carousel.css';
import Collections from '../Collection/collection.json';

const images = {};
function importAll(r) {
  r.keys().forEach((key) => {
    const fileName = key.replace('./', '');
    images[fileName] = r(key).default || r(key);
  });
}
importAll(require.context('../Collection', false, /\.(png|jpe?g|svg)$/));

export default function Carousel() {
  // const handleClick = (e) => {
  //   const target = e.target.closest('.carousel-item');
  //   if (target) {
  //     const index = Array.from(target.parentNode.children).indexOf(target);
  //     console.log('Clicked item index:', index);
  //   }
  // };
  return (
    <div className="carousel">
      <div className="slider-track">
        {Collections.map((col, i) => (
          <a key={i} href="#Collections" className="carousel-item">
            <div>
              <img
                src={require(`../Collection/${col.p1x2}`)}
                alt={col.p1x2Alt}
                className='carousel-image'
              />
            </div>
            <div className="caption logoFont">{col.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
