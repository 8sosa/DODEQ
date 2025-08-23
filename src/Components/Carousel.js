import React, { useEffect, useState } from "react";
import './Carousel.css';
import { client } from "../lib/Contentful";

export default function Carousel() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await client.getEntries({ content_type: "collections" });
        const mapped = res.items.map((item) => ({
          title: item.fields.title,
          firstImage: item.fields.collectionImages?.[0]
            ? "https:" + item.fields.collectionImages[0].fields.file.url
            : null,
        }));
        setCollections(mapped);
      } catch (err) {
        console.error("❌ Error fetching collections:", err);
      }
    };

    fetchCollections();
  }, []);

  return (
    <div className="carousel">
      <div className="slider-track">
        {collections.map((col, i) => (
          <a key={i} href="#Collections" className="carousel-item">
            <div>
              {col.firstImage ? (
                <img
                  src={col.firstImage}
                  alt={col.title}
                  className="carousel-image"
                />
              ) : (
                <div className="carousel-placeholder">No Image</div>
              )}
            </div>
            <div className="caption logoFont">{col.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
