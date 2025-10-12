import React, { useEffect, useState } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { client } from "../lib/Contentful";

export default function Personnel() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch personnel from Contentful
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const response = await client.getEntries({ content_type: "personnel" });
        setPeople(response.items);
      } catch (error) {
        console.error("Error fetching personnel:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPeople();
  }, []);

  return (
    <>
      <h1 className=" altMont">Our Team</h1>
      <div className="container section">
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row lg={4}>
            {people.map((person, index) => {
              const { name, role, instagram, twitter, linkedIn } = person.fields;
              return (
                <Col key={index} className="mb-5">
                  <div className="team-card text-center">
                    <h4 className="namePersonnel">{name}</h4>
                    <p className="namePersonnel">{role}</p>
                    <div className="social-links">
                      {instagram && (
                        <a href={instagram} target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-instagram"></i>
                        </a>
                      )}
                      {twitter && (
                        <a href={twitter} target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-twitter"></i>
                        </a>
                      )}
                      {linkedIn && (
                        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </>
  );
}