import React, { useEffect, useState } from "react";
import './StyleIt.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "../Components/Carousel";
import Stlyeit1 from "../Images/styleit1.jpg"
import Stlyeit2 from "../Images/styleit2.jpg"
import { client } from "../lib/Contentful";

export default function StyleIt() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await client.getEntries({ content_type: "collections" });
        const mapped = res.items.map((item) => ({
          title: item.fields.title,
          images: item.fields.collectionImages.map(
            (img) => "https:" + img.fields.file.url
          ),
        }));
        setCollections(mapped);

        console.log("✅ Collections from Contentful:", mapped);
      } catch (err) {
        console.error("❌ Error fetching collections:", err);
      }
    };

    fetchCollections();
  }, []);
    
  return (
    <>
        <div className="styleItHero">
            <Container className="styleItHeroContainer gap-5">
                <h1 className="logoFont">Yvie Style it</h1>
                <p className="styleItHeroText mont">Fashion is a superpower. It can change the narrative of where you are and tell the story of who you are. I live, breathe, and inspire fashion in my corner of the world plotting to redefine fashion in relation to conservation and expression. Explore as you join me in my journey to redefine art expressions through fashion.</p>
                <p className="styleItHeroText mont">~ Yvonne Amaria</p>
                <div className="heroButtonPair mont">
                    <button><a href="/shop" className="link">Shop Now</a></button>
                    <button><a href="#Collections" className="link">Explore Collections</a></button>
                </div>
            </Container>
        </div>
        <div className="styleItTabs">
            <Carousel />
        </div>
        <div className="styleItAbout homeAbout">
            <Container className="styleitContainer altMont">
                <h1>Create Your Own Style</h1>
                <Row className="homeAboutText">
                    <Col xs={12} sm={12} md={4} lg={4} className="homeAboutImgCol">
                        <img src={Stlyeit1} alt="homeAbout" className="homeAboutImg" />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} className="homeAboutTextCol">
                        <p className="styleittext1">
                            Designing is subjective—there are no rules, no boundaries.
                            I believe you can design anywhere, anytime, and out of anything. I create because I love it. Inspiration finds me at random moments, from daydreams on a bus ride to sketches I wake up to draw after dreaming about new designs. Sewing gives me the power to bring these visions to life, turning imagination into something real and greater than myself.
                            Even without the perfect tools or ideal workspace, I make it happen. I’ll sit on the floor of my room, sketch out illustrations to guide me, gather whatever fabrics I can find, and improvise when needed. I’ve sourced materials by calling for donations through Instagram, repurposing clothes that might otherwise end up in landfills. When I’m stuck on an elaborate project, I turn to thrift stores—buying new fabric is always my last resort.
                            I started without a sewing machine of my own. My first three collections were either hand-sewn or made with the help of a neighboring tailor’s machine. These experiences rooted my belief in building through community, and involving community in your art, especially when it’s tied to self-expression. Throughout college, I created entire collections using a $35, 5-pound travel machine. Today, I’m grateful to own both a computerized machine and a serger at home. Telling this story proves that limitations should never hinder the creative process. Not every idea I have comes out perfectly, and I haven’t been formally trained in every technique, but through the internet and accessible resources, I’ve taught myself to bring things together in my own little design classroom.
                        </p>
                    </Col>
                </Row>
                <Row className="homeAboutText">
                    <Col xs={12} sm={12} md={8} lg={8} className="homeAboutTextCol">
                        <p className="styleittext2">
                            Fashion isn’t just about making clothes; it’s about how they’re worn and embodied.
                            Fashion lives in interpretation and styling. Yvie Style It was created to push youth culture and encourage cultural preservation. I invite you to join the movement and create your own style. I love seeing my pieces styled differently than how they debuted. It reminds me of the endless possibilities a single design can hold.
                            Be inspired. Don’t let limitations hold you back during the making process and don’t box yourself in when it comes to styling. You can create your own style anywhere, under any condition.
                            Remember: designing is subjective, and creativity has no limits.
                        </p>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} className="homeAboutImgCol">
                        <img src={Stlyeit2} alt="homeAbout" className="homeAboutImg" />
                    </Col>
                </Row>
            </Container>
        </div>

        {/* Collections Section */}
      <div className="passions">
        <Container
          className="passionsContainer altMont gap-5 d-flex flex-column"
          id="Collections"
        >
          {collections.map((collection, idx) => (
            <Row className="Collection mb-5" key={idx}>
              <div className="collectionDetail altMont mb-5">
                <h1>{collection.title}</h1>
              </div>
              {collection.images.map((imgUrl, imgIdx) => (
                <Col
                  key={imgIdx}
                  xs={12}   // Full width on mobile
                  sm={6}    // 2 per row on tablets
                  md={4}    // 3 per row on medium screens
                  lg={3}    // 4 per row on large screens
                  className="d-flex justify-content-center image-wrapper"
                >
                  <img
                    src={imgUrl}
                    alt={`${collection.title}-${imgIdx}`}
                    className="collection-img"
                  />
                </Col>
              ))}
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
};