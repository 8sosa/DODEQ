import React from "react";
import './About.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
// import Eng from "../Components/Eng";
// import HomeCarousel from "../Components/HomeCarousel";
import Logo from '../Images/logo.png';

// import HomeLivingCarousel from "../Components/HomeLivingCarousel";
import Personnel from "../Components/TeamGrid";
import Orgs from "../Components/Org";

export default function About () {
  const models = [
    "@atlas_studios",
    "@monteee",
    "@kjensen_",
    "@prxis",
    "@_simplynadia",
    "@andrea.redz",
    "@ashh.wipe",
    "@berithayes",
    "@cass_somethin.else",
    "@CreativeLenstudios",
    "@d.a.s_fotograph",
    "@detroitmade_zo",
    "@drewvicious",
    "@elliengassa",
    "@emily.spitler",
    "@goddess.merline",
    "@griotakan",
    "@ixchel0330",
    "@imaan.mr",
    "@janaexfawn",
    "@jenn.u.n",
    "@jermaine.ervin2",
    "@justme.shar",
    "@kapturaxkass",
    "@lady.shalay",
    "@laladanielleofficial",
    "@lucia_f4rah",
    "@majex.made.this",
    "@modelbymiciah",
    "@mykaleidoscope_world",
    "@natalierue",
    "@niresenoj_",
    "@poolside.chacos",
    "@risefashionevents",
    "@tiramisruu",
    "@trillpapishay_",
    "@txprettyjass",
    "@vicsueiro",
    "@yelirrrrrrrr",
    "@zenobiathegreat",
  ];

  return (
    <>
        <div className="homeHero">
            <Container className="homeHeroContainer">
              <img src={Logo} alt="SUA Logo" className="logo" />
            </Container>
        </div>
        <div className="homeAbout">
            <Container className="homeAboutContainer">
                <h1>Yvie DODEQ</h1>
                <p className="altMont">Yvie DODEQ is a profit-for-charity company that focuses on youth development and cultural preservation. This means all profit proceeds from every project we do go into charity and community service work. Unlike a full non-profit, we have a market and a scale of growth to measure, hence the phrasing. As an organization, we aim to build community and promote talent and skills across a wide range of the community spectrum through art, science, and expression.</p>
                <p className="altMont">Our goal is to create a space where people are inspired by everyday life and can establish their own communities within the activities they find joy in. The tagline Live, Work, Inspire reclaims the narrative of “we live to work and then we die.” It reframes it to: we live our lives, and in our lives, we work, and through the work we do, we inspire someone else to live—truly live—in the fullness and expression of who they are. And the circle continues. Our work inspires a life worth living, and within youth culture and pride in our “collective individuality,” nothing is off limits. From science and the ability to think technically, to art and the ability to create beauty and trigger emotions, to philosophy and the ability to think differently and inspire questions, everything intertwines in our human experience. We aim to show this.</p>
            </Container>
        </div>
        <section className="ngoSection">
          <div className="ngoDetails">
            <h2 className="altMont">Origin and Motivation</h2>
            <p className="altMont">
              I am Yvonne Amaria, and I started Yvie DODEQ when I was 12 years old in secondary school. Prior to that, I was obsessed with my future and what my image was going to represent. I would make up names and catchphrases to refer to myself and build narratives for how I wanted to be perceived. I doodled, heavily decorated, and recaptioned “DODEQ” on my class notes in 2014. By 2015, I had still not given a meaning to the acronym I wrote everywhere until I became inspired by the Descendants character Evie, whom I related to because of our shared interest in fashion design and her similar tagline. While I will reserve the full meaning of DODEQ for the future—because I believe it will make a very interesting interview question and puzzle piece for people to figure out—I have since branded and registered the name purposely to keep the child-like characteristics and soul of the organization. It represents the idea that a young person can turn their childhood fantasy into something that achieves a spectrum of impact.
            </p>
            <p className="altMont">In 2014, I had my first training session with the National Youth Service Corps Niger State as a resource person in Skill Acquisition and Entrepreneurship Development. Before that, as a serial hobbyist, I prided myself on gathering a platter of skills that I used passively to make money even as a child. I had become a skillful entrepreneur with enough experience to teach and motivate people using the skills I had gathered. By 2016, I had just graduated secondary school at a relatively early age and had become a regular participant in seasonal training courses, gaining significant exposure in the program. This development required the need for an official brand, and since I no longer had strict educational commitments, I began planning what the company would be. I looked through my most consistent doodle, assigned a profound meaning to it, and that was it. I would be training youth in skill acquisition and teaching them how to build a unique brand with my unique name.</p>
          </div>
          <div className="aboutSection">
            <div className="aboutContent altMont">
              <h3 >
                What Does the Strategy for Yvie DODEQ Look Like
              </h3>
              <p>
                Yvie DODEQ is designed to be a shapeless community for people. We have a marketable arm through which, using science, art, and the economy that needs science and art, we are able to build profit that will be used for charity and further community building. This development can be seen through our strong ties to organizations like Violet Care Foundation for Women and Nature, and Purple Pact Initiative (also known as the Fight Against Rape Initiative, which has a broader purpose of education and advocacy).
              </p>
              <p>Within science, we are working towards building Smart Self-Sustainable Communities. Within art, we aim to create a yearly festival and a year-round support platform for creatives of all kinds. A glimpse of the science work can be viewed through the lens of my PhD research, while the center of the art work is spearheaded by our fashion arm Yvie Style It, which expresses the type of culture we aim to preserve. With Yvie Style It, we treat the runway as a performance and slowly redefine what the stage should look like. As we grow as a company, more will be communicated and seen through the work we do. Until then, we hope you stick with us and join our community as you aim to live, work, and inspire in your own way!</p>
              {/* <div className="btnPair">
                <button className="primaryBtn">Learn More</button>
                <button className="primaryBtn">Donate Now</button>
              </div> */}
            </div>
          </div>
          <div className="homeAbout">
            <Container className="homeAboutContainer altMont">
                <h1>Credit and Appreciation</h1>
                <p>Our work would not be possible without the support of organizations we collaborate with, artists and individuals we have worked with, those we have featured, and the continued partnerships we have formed. Listed are those that allow us to stand in our mission:</p>
                <ul className="models-list">
                  {models.map((model, index) => {
                    const username = model.replace("@", "");
                    return (
                      <li key={index}>
                        <a
                          href={`https://www.instagram.com/${username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {model}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <Orgs />
                <Personnel />
            </Container>
          </div>
        </section>
    </>
  );
};