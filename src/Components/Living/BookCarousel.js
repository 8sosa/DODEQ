import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../lib/Contentful";
import "./book.css";

export const BookCarousel = () => {
  const scrollRef = useRef(null);
  const [books, setBooks] = useState([]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await client.getEntries({ content_type: "books" });

        const mapped = res.items.map((item) => ({
          title: item.fields.title,
          image: item.fields.image.fields.file.url,
          link: item.fields.link || null,
        }));

        setBooks(mapped);
        console.log(books);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };

    fetchBooks();
  }, [books]);

  return (
    <section className="book-carousel-section">
      <h2 className="altMont">Currently Reading</h2>
      <div className="carousel-wrapper">
        <div className="scroll-button left" onClick={() => scroll("left")}>
          &lt;
        </div>
        <motion.div
          className="book-scroll"
          ref={scrollRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {books.map((book, idx) => (
            <motion.div
              className="book"
              key={idx}
              whileHover={{ scale: 1.05 }}
            >
              {book.link ? (
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <img src={book.image} alt={book.title} />
                </a>
              ) : (
                <img src={book.image} alt={book.title} />
              )}
              <p className="legend altMont">{book.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="scroll-button right" onClick={() => scroll("right")}>
          &gt;
        </div>
        <div className="gradient left"></div>
        <div className="gradient right"></div>
      </div>
    </section>
  );
};
