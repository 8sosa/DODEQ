import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./rec.css";
import Filma from './assets/filma.jpeg'
import Filmb from './assets/filmb.jpeg'
import Filmc from './assets/filmc.jpeg'
import { Carousel } from 'react-responsive-carousel';

export const Recommendations = () => {
  return (
    <>
        <section className='recMain'>
            <p className='recTitle inter'>My recommendations for the month</p>
            <h2 className="recMonth altMont">Here lies July...</h2>
            <div className="recommendations">
                <div className='moviesRecs Inter' id="movies">
                    <h3>Movies & Shows</h3>
                    <div className="moviesRecsBox">
                        <div className='movieRec'>
                            <img src={Filma} alt="first film" />
                            <div>
                                <h3>First Film</h3>
                                <p>i really liked ...</p>
                            </div>
                        </div>
                        <div className='movieRec'>
                            <img src={Filmb} alt="second film" />
                            <div>
                                <h3>Second Film</h3>
                                <p>i really liked ...</p>
                            </div>
                        </div>
                        <div className='movieRec'>
                            <img src={Filmc} alt="Third film" />
                            <div>
                                <h3>A `Show`</h3>
                                <p>i really liked ...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="articles">
                    <h3>Articles</h3>
                    <Carousel className='articlesRecs' showThumbs={false} infiniteLoop autoPlay>
                        <div className='articlesRecsBox'>
                            <img src={Filma} alt="first film" />
                            <div>
                                <h4 className="text-lg font-semibold">"The Art of Stillness"</h4>
                                <p>Exploring the value of slowing down in a fast-paced world.</p>
                            </div>
                        </div>
                        <div className='articlesRecsBox'>
                            <img src={Filmc} alt="first film" />
                            <div>
                                <h4 className="text-lg font-semibold">"Tech & Empathy"</h4>
                                <p>How technology can enhance our emotional connections.</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div id="Music">
                    <h3>Music</h3>
                    <div className='musicRecs'>
                        <div className='musicRec'>
                            <img src={Filma} alt="first music" />
                            <div>
                                <h4>"Chill Vibes"</h4>
                                <p>A perfect playlist for relaxing evenings.</p>
                            </div>
                        </div>
                        <div className='musicRec'>
                            <img src={Filmb} alt="second music" />
                            <div>
                                <h4>"Morning Motivation"</h4>
                                <p>Upbeat tracks to kickstart your day.</p>
                            </div>
                        </div>
                        <div className='musicRec'>
                            <img src={Filmb} alt="second music" />
                            <div>
                                <h4>"Morning Motivation"</h4>
                                <p>Upbeat tracks to kickstart your day.</p>
                            </div>
                        </div>
                        <div className='musicRec'>
                            <img src={Filmb} alt="second music" />
                            <div>
                                <h4>"Morning Motivation"</h4>
                                <p>Upbeat tracks to kickstart your day.</p>
                            </div>
                        </div>
                        <div className='musicRec'>
                            <img src={Filmb} alt="second music" />
                            <div>
                                <h4>"Morning Motivation"</h4>
                                <p>Upbeat tracks to kickstart your day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
