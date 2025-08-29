import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./rec.css";
import { Carousel } from "react-responsive-carousel";
import { client } from "../../lib/Contentful";

export const Recommendations = () => {
  const [shows, setShows] = useState([]);
  const [articles, setArticles] = useState([]);
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Fetch Shows
        const showsRes = await client.getEntries({ content_type: "shows" });
        setShows(
          showsRes.items.map((item) => ({
            title: item.fields.title,
            image: "https:" + item.fields.image.fields.file.url,
            link: item.fields.link || null,
          }))
        );

        // Fetch Articles
        const articlesRes = await client.getEntries({ content_type: "article" });
        setArticles(
          articlesRes.items.map((item) => ({
            title: item.fields.articleTitle,
            description: item.fields.description,
            image: "https:" + item.fields.image.fields.file.url,
          }))
        );

        // Fetch Music
        const musicRes = await client.getEntries({ content_type: "music" });
        setMusic(
          musicRes.items.map((item) => ({
            title: item.fields.title,
            image: "https:" + item.fields.coverImage.fields.file.url,
            link: item.fields.link || null,
          }))
        );
      } catch (err) {
        console.error("Error fetching recommendations:", err);
      }
    };

    fetchContent();
  }, []);

  return (
    <section className="recMain">
      <p className="recTitle inter">My recommendations for the month</p>
      <h2 className="recMonth altMont">Here lies July...</h2>

      <div className="recommendations">
        {/* Shows Section */}
        <div className="moviesRecs Inter" id="movies">
          <h3>Movies & Shows</h3>
          <div className="moviesRecsBox">
            {shows.map((show, idx) => (
              <div className="movieRec" key={idx}>
                {show.link ? (
                  <a href={show.link} target="_blank" rel="noopener noreferrer">
                    <img src={show.image} alt={show.title} />
                  </a>
                ) : (
                  <img src={show.image} alt={show.title} />
                )}
                <div>
                  <h3>{show.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Articles Section */}
        {articles.length > 0 && (
        <div id="articles">
          <h3>Articles</h3>
          <Carousel
            className="articlesRecs"
            showThumbs={false}
            infiniteLoop
            autoPlay
          >
            {articles.map((article, idx) => (
              <div className="articlesRecsBox" key={idx}>
                <img src={article.image} alt={article.title} />
                <div>
                  <h4 className="text-lg font-semibold">{article.title}</h4>
                  <p>{article.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        )}

        {/* Music Section */}
        <div id="Music">
          <h3>Music</h3>
          <div className="musicRecs">
            {music.map((track, idx) => (
              <div className="musicRec" key={idx}>
                {track.link ? (
                  <a href={track.link} target="_blank" rel="noopener noreferrer">
                    <img src={track.image} alt={track.title} />
                  </a>
                ) : (
                  <img src={track.image} alt={track.title} />
                )}
                <div>
                  <h4>{track.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
