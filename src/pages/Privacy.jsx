import React, {useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { Container, Row, Col} from 'reactstrap';
import './../style/privacy.css';

import heroImg from '../assets/images/team-bg.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Privacy = () => {

  // create a reacte hook for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return <>
    <section>
      <Container>
        <Row>
          <Col lg='2'>
            <div className="privacy__img-box-left" data-aos="fade-scroll">
              <img src={heroImg} alt="" />
            </div>
          </Col>

          <Col>
            <div className="privacy__content-left">
              <h2 data-aos="fade-left"> 
              Privacy Policy
              </h2>
            </div>
          </Col>                
        </Row>
      </Container>
    </section>
  </>
}

export default Privacy