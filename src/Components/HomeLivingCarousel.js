import React, { useEffect, useState, useRef } from "react";
import "./Carousel.css";
import { client } from "../lib/Contentful";

export default function HomeLivingCarousel() {
  const [items, setItems] = useState([]);
  const trackRef = useRef(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [books, shows, music, articles] = await Promise.all([
          client.getEntries({ content_type: "books", limit: 1 }),
          client.getEntries({ content_type: "shows", limit: 1 }),
          client.getEntries({ content_type: "music", limit: 1 }),
          client.getEntries({ content_type: "article", limit: 1 }),
        ]);

        const mapped = [
          ...books.items.map((i) => ({
            type: "Book",
            title: i.fields.title,
            image: "https:" + i.fields.image.fields.file.url,
          })),
          ...shows.items.map((i) => ({
            type: "Show",
            title: i.fields.title,
            image: "https:" + i.fields.image.fields.file.url,
          })),
          ...music.items.map((i) => ({
            type: "Music",
            title: i.fields.title,
            image: "https:" + i.fields.coverImage.fields.file.url,
          })),
          ...articles.items.map((i) => ({
            type: "Article",
            title: i.fields.articleTitle,
            image: "https:" + i.fields.image.fields.file.url,
          })),
        ];

        setItems(mapped);
      } catch (err) {
        console.error("Error fetching content:", err);
      }
    };

    fetchContent();
  }, []);

  // Wheel -> horizontal scroll for small screens / touchpads
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function onWheel(e) {
      // only transform wheel to horizontal scroll on narrower screens
      if (window.innerWidth <= 1024) {
        // prevent default vertical scroll
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    }

    // add non-passive listener so we can call preventDefault
    track.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      track.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <>
      <section className="Recomendations">
        <h1 className="Mont">YVIE'S JUST LIVING</h1>
        <h6 className="Mont">Some Recomendations...</h6>

        <div className="carousel">
          {/* give the scroll container a ref */}
          <div className="slider-track1" ref={trackRef}>
            {items.map((item, i) => (
              <div key={i} className="carousel-item">
                <img src={item.image} alt={item.title} className="carousel-image" />
                <div className="carousel-caption">
                  <h3>{item.title}</h3>
                  <p>{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
