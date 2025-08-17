import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './book.css';
import Booka from './assets/booka.jpeg';
import Bookb from './assets/bookb.jpeg';
import Bookc from './assets/bookc.jpeg';
import Bookd from './assets/bookd.jpeg';

export const BookCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const books = [
    { src: Booka, title: "Atomic Habits – James Clear" },
    { src: Bookb, title: "Creativity Inc. – Ed Catmull" },
    { src: Bookc, title: "Creativity Inc. – Ed Catmull" },
    { src: Bookd, title: "Creativity Inc. – Ed Catmull" }
  ];

  return (
    <>
        <section className="book-carousel-section">
        <h2 className="altMont">Currently Reading</h2>
        <div className="carousel-wrapper">
            <div className="scroll-button left" onClick={() => scroll('left')}>&lt;</div>
            <motion.div 
            className="book-scroll"
            ref={scrollRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            >
            {books.map((book, idx) => (
                <motion.div 
                className="book"
                key={idx}
                whileHover={{ scale: 1.05 }}
                >
                <img src={book.src} alt={book.title} />
                <p className="legend altMont">{book.title}</p>
                </motion.div>
            ))}
            </motion.div>
            <div className="scroll-button right" onClick={() => scroll('right')}>&gt;</div>
            <div className="gradient left"></div>
            <div className="gradient right"></div>
        </div>
        </section>
    </>
  );
};
