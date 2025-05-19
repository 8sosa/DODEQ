import React from "react";
import './Living.css'
import { Col, Row } from "react-bootstrap";

export default function Living () {
    return (
        <>
             {/* <!-- Hero Section --> */}
            <div class="homeHero">
                <div class="container homeHeroContainer">
                <h1 class="kavoon">Yvie’s Just Living</h1>
                <p class="mont">A glimpse into my everyday life, inspirations, and daily adventures.</p>
                </div>
            </div>

            {/* <!-- Daily Updates --> */}
            <div class="container section">
                <h2 class="sectTitle mont text-center mb-5">Daily Updates</h2>
                    <Row xl={2}>
                        <Col>
                            <div className="post">
                                <h3 className="altMont">Mastering the Art of Productivity: Hacks for Overcoming Procrastination</h3>
                                <p className="mont">Struggling with staying productive? Learn proven techniques to beat procrastination, manage your time effectively, and get things done without burnout.</p>
                                <p><a href="https://www.instagram.com/yvie_dodeq" target="_blank" rel="noreferrer">View on Instagram</a></p>                            
                            </div>
                        </Col>
                        <Col>
                            <div className="post">
                                <h3 className="altMont">The Rise of AI in Everyday Life: How It's Changing the Way We Live</h3>
                                <p className="mont">From smart assistants to AI-driven recommendations, artificial intelligence is shaping our daily experiences. Explore how AI is evolving and what it means for the future.</p>
                                <p><a href="https://www.instagram.com/yvie_dodeq" target="_blank" rel="noreferrer">View on Instagram</a></p>
                            </div>
                        </Col>
                        <Col>
                            <div className="post">
                                <h3 className="altMont">Budgeting 101: How to Take Control of Your Finances</h3>
                                <p className="mont">Whether you’re saving for a big purchase or just want better financial stability, this guide covers the best budgeting strategies to help you manage money wisely.</p>
                                <p><a href="https://www.instagram.com/yvie_dodeq" target="_blank" rel="noreferrer">View on Instagram</a></p>                            
                            </div>
                        </Col>
                        <Col>
                            <div className="post">
                                <h3 className="altMont">The Ultimate Guide to Launching Your First Online Business</h3>
                                <p className="mont">Want to start an online business but don’t know where to begin? This step-by-step guide will walk you through product selection, branding, marketing, and scaling your business.</p>
                                <p><a href="https://www.instagram.com/yvie_dodeq" target="_blank" rel="noreferrer">View on Instagram</a></p>                            
                            </div>
                        </Col>
                    </Row>
            </div>
            {/* <!-- Instagram Feed Integration --> */}
            <div class="container section instagram-feed">
                <h2 class="kavoon">Instagram Feed</h2>
                {/* <!-- Replace with your actual Instagram embed widget --> */}
                <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                <iframe src="//lightwidget.com/widgets/06f61a4768f35b5ca39bdddf2712d656.html" allowtransparency="true" class="lightwidget-widget" title="Instagram Feed"></iframe>
            </div>
        </>
    )
}
