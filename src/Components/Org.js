import React, { useEffect, useState } from "react";
import { Row, Col, Spinner, Image } from "react-bootstrap";
import { client } from "../lib/Contentful";
import '../Pages/About.css'

export default function Orgs() {
  const [orgs, setOrgs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orgs from Contentful
  useEffect(() => {
    const fetchOrgs = async () => {
      try {
        const response = await client.getEntries({ content_type: "org" });
        setOrgs(response.items);
      } catch (error) {
        console.error("Error fetching orgs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrgs();
  }, []);

  return (
    <>
      <h1 className="altMont">Our Partners / Organizations</h1>
      <div className="container section">
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row lg={5} md={3} sm={2} xs={1} className="g-4">
            {orgs.map((org, index) => {
              const { name, logo } = org.fields;
              return (
                <Col key={index} className="text-center">
                  <div className="org-card">
                    {logo && (
                      <Image
                        src={logo.fields.file.url}
                        alt={name}
                        fluid
                        className="mb-2"
                        style={{
                          maxHeight: "100px",
                          objectFit: "contain",
                        }}
                      />
                    )}
                    <h6 className="namePersonnel">{name}</h6>
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