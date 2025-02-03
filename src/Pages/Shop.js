import React from 'react'
import './Shop.css'
import { Container, Col, Row } from 'react-bootstrap'
import Placeholder from "../Images/ph.png";

const products = [
    { id: 1, name: "StyleIt Shirt", price: 200 },
    { id: 2, name: "StyleIt Shirt", price: 200 },
    { id: 3, name: "StyleIt Shirt", price: 200 },
    { id: 4, name: "StyleIt Shirt", price: 200 },
    { id: 5, name: "StyleIt Shirt", price: 200 },
    { id: 6, name: "StyleIt Shirt", price: 200 },
    { id: 7, name: "StyleIt Shirt", price: 200 },
    { id: 8, name: "StyleIt Shirt", price: 200 },
];

export default function Shop() {
  return (
    <>
      <div className='shopPage'>
        <Container className='shopPageContainer altMont'>
          <h1>Shop YvieStyleIt</h1>
          <Row className='items'>
            {products.map((product) => (
              <Col key={product.id} xs={6} sm={6} md={4} lg={3}>
                <div className='item'>
                  <img src={Placeholder} alt={product.name} className="p1x1" />
                  <div className='itemDetail altMont'>
                    <h3>{product.name}</h3>
                    <h3>${product.price}</h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}
