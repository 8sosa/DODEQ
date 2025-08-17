import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Eng.css'
import AA from '../Images/eng/ff.png'
import AB from '../Images/eng/fg.png'

export default function Eng () {
  return (
    <>
        <Row className="engRow">
            <Col xs={12} sm={12} md={3} lg={3} className="engImgCol">
                <img src={AA} alt="Engineering" className="engImg" />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="engTextCol">
                <div className="resumeSummary inter">
                    <h1 className='altMont'>Yvonne Amaria O.</h1>
                    <h2 className='mont'>PhD Student, Materials Science & Engineering</h2>
                    <p className='inter'>
                        Inquisitive and determined student with a passion for building and creating innovative solutions to complex technological problems and a career goal in research and practical technology. With a push for societal impact, I founded a non-profit that has prompted various collaborations in volunteering activities and activism with a major goal to inspire as I grow within my diverse interests. I seek to learn, educate, have fun, and use technology to create impact on a global scale as I bridge the gap toward access to dream-fulfilling resources within my community.
                    </p>
                </div>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} className="engImgCol">
                <img src={AB} alt="Engineering" className="engImg" />
            </Col>
        </Row>
    </>
  )
}
