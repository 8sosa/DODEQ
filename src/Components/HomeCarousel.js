import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { client } from "../lib/Contentful";

export default function HomeCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCarousel = async () => {
      try {
        // fetch from the correct content type
        const res = await client.getEntries({ content_type: "homePageCarousel" });

        if (res.items.length > 0) {
          // your "images" field is an array of Assets
          const carouselImages = res.items[0].fields.images.map((asset) => ({
            url: "https:" + asset.fields.file.url,
            alt: asset.fields.title || "Carousel image",
          }));
          setImages(carouselImages);
        }
      } catch (err) {
        console.error("❌ Error fetching carousel:", err);
      }
    };

    fetchCarousel();
  }, []);

  return (
    <div className="carousel">
      <div className="slider-track">
        {images.map((img, i) => (
          <div key={i} className="carousel-item">
            <img
              src={img.url}
              alt={img.alt}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
