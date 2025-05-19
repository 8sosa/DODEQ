import React from "react";
import './Writeit.css'
import { Col, Row } from "react-bootstrap";
import Placeholder from "../Images/ph.png";

export default function Writeit () {

  return (
    <>
    {/* <!-- Hero Section --> */}
  <div class="homeHero">
    <div class="container homeHeroContainer">
      <h1 class="kavoon">Yvie Writes It</h1>
      <p class="mont">Explore my world of words—from heartfelt poetry to captivating stories.</p>
      <div class="heroButtonPair">
        <button class="btn-custom"><a href="#poetry" class="link">Poetry</a></button>
        <button class="btn-custom"><a href="#blogs" class="link">Blogs</a></button>
        <button class="btn-custom"><a href="#challenge" class="link">Challenge</a></button>
      </div>
    </div>
  </div>

  {/* <!-- Poetry Cards Section --> */}
    <div class="container section d-flex flex-column align-items-center" id="poetry">
        <h2 className="sectTitle altMont">Poetry</h2>
        <Row className="profileRow" xl={4}>
            <Col className="p-3">
                <div class="flip-card1">
                    <div class="flip-card1-inner">
                        <div class="flip-card1-front">
                            <div className="profile">
                                <img src={Placeholder} alt="placeholder"/>
                                <p className="mont">Poem</p>
                            </div>
                        </div>
                        <div className="flip-card1-back mont">
                            <h3>Whispers of the Wind</h3>
                            <p>
                                The wind hums secrets to the trees,
                                A song that floats upon the breeze.
                                It dances through the golden grain,
                                And murmurs soft before the rain.

                                The river laughs, the mountains sigh,
                                As clouds drift lazy ‘cross the sky.
                                The sun bows low, the stars take flight,
                                And weave their dreams into the night.

                                Oh, fleeting wind, where do you roam?
                                Through endless seas, through fields unknown?
                                Or do you chase the morning light,
                                And fade into the hush of night?
                            </p>
                        </div>
                    </div>
                </div>    
            </Col>
            <Col className="p-3">
                <div class="flip-card1">
                    <div class="flip-card1-inner">
                        <div class="flip-card1-front">
                            <div className="profile">
                                <img src={Placeholder} alt="placeholder"/>
                                <p className="mont">Poem</p>
                            </div>
                        </div>
                        <div className="flip-card1-back mont">
                            <h3>Whispers of the Wind</h3>
                            <p>
                                The wind hums secrets to the trees,
                                A song that floats upon the breeze.
                                It dances through the golden grain,
                                And murmurs soft before the rain.

                                The river laughs, the mountains sigh,
                                As clouds drift lazy ‘cross the sky.
                                The sun bows low, the stars take flight,
                                And weave their dreams into the night.

                                Oh, fleeting wind, where do you roam?
                                Through endless seas, through fields unknown?
                                Or do you chase the morning light,
                                And fade into the hush of night?
                            </p>
                        </div>
                    </div>
                </div>    
            </Col>
            <Col className="p-3">
                <div class="flip-card1">
                    <div class="flip-card1-inner">
                        <div class="flip-card1-front">
                            <div className="profile">
                                <img src={Placeholder} alt="placeholder"/>
                                <p className="mont">Poem</p>
                            </div>
                        </div>
                        <div className="flip-card1-back mont">
                            <h3>Whispers of the Wind</h3>
                            <p>
                                The wind hums secrets to the trees,
                                A song that floats upon the breeze.
                                It dances through the golden grain,
                                And murmurs soft before the rain.

                                The river laughs, the mountains sigh,
                                As clouds drift lazy ‘cross the sky.
                                The sun bows low, the stars take flight,
                                And weave their dreams into the night.

                                Oh, fleeting wind, where do you roam?
                                Through endless seas, through fields unknown?
                                Or do you chase the morning light,
                                And fade into the hush of night?
                            </p>
                        </div>
                    </div>
                </div>    
            </Col>
            <Col className="p-3">
                <div class="flip-card1">
                    <div class="flip-card1-inner">
                        <div class="flip-card1-front">
                            <div className="profile">
                                <img src={Placeholder} alt="placeholder"/>
                                <p className="mont">Poem</p>
                            </div>
                        </div>
                        <div className="flip-card1-back mont">
                            <h3>Whispers of the Wind</h3>
                            <p>
                                The wind hums secrets to the trees,
                                A song that floats upon the breeze.
                                It dances through the golden grain,
                                And murmurs soft before the rain.

                                The river laughs, the mountains sigh,
                                As clouds drift lazy ‘cross the sky.
                                The sun bows low, the stars take flight,
                                And weave their dreams into the night.

                                Oh, fleeting wind, where do you roam?
                                Through endless seas, through fields unknown?
                                Or do you chase the morning light,
                                And fade into the hush of night?
                            </p>
                        </div>
                    </div>
                </div>    
            </Col>
        </Row>
    </div>

  {/* <!-- Story Blogs Section --> */}
  <div class="container section" id="blogs">
    <h2 class="kavoon text-center mb-5">Story Blogs</h2>
    <Row>
        <Col>
            <div class="blog-post">
                <h3>Blog Title 1</h3>
                <img src={Placeholder} alt="placeholder"/>
                <p>Excerpt from blog post 1...</p>
                <a href="#blogs" class="btn-custom">Read More</a>
            </div>
        </Col>
        <Col>
            <div class="blog-post">
                <h3>Blog Title 1</h3>
                <img src={Placeholder} alt="placeholder"/>
                <p>Excerpt from blog post 1...</p>
                <a href="#blogs" class="btn-custom">Read More</a>
            </div>
        </Col>
        <Col>
            <div class="blog-post">
                <h3>Blog Title 1</h3>
                <img src={Placeholder} alt="placeholder"/>
                <p>Excerpt from blog post 1...</p>
                <a href="#blogs" class="btn-custom">Read More</a>
            </div>
        </Col>
        <Col>
            <div class="blog-post">
                <h3>Blog Title 1</h3>
                <img src={Placeholder} alt="placeholder"/>
                <p>Excerpt from blog post 1...</p>
                <a href="#blogs" class="btn-custom">Read More</a>
            </div>
        </Col>
    </Row>
  </div>

  {/* <!-- Writing Challenge Section --> */}
  <div class="container section" id="challenge">
    <h2 class="kavoon text-center mb-5">Writing Challenge</h2>
    <div class="challenge mont">
      <h3 className="altMont">Current Challenge: A Folktale on Evil.</h3>
      <p>Share your creative story within 24 hours!</p>
      <form>
        <div class="form-group">
          <label for="submission">Your Submission:</label>
          <textarea class="form-control" id="submission" rows="15" placeholder="Write your story..."></textarea>
        </div>
        <button type="submit" class="btn-custom">Submit</button>
      </form>
      {/* <div class="mt-4">
        <p>Community Voting:</p>
        <div className="voteBtns">
            <button class="btn-custom">Vote Up</button>
            <button class="btn-custom">Vote Down</button>
        </div>
      </div> */}
    </div>
  </div>
    </>
  )
}