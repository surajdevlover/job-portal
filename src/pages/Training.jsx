import React, {useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { Container, Row, Col} from 'reactstrap';
import './../style/traning.css';

import heroImg from '../assets/images/training_2.png';
import heroImg1 from '../assets/images/corporate.png';
import heroImg2 from '../assets/images/corporate1.png';
import img1 from '../assets/images/training_1.png';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Training = () => {

    // create a reacte hook for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return <>
  <section>
    <Container>
        <Row>
            <Col lg='2'>
                <div className="training__img-box-left" data-aos="fade-scroll">
                    <img src={heroImg} alt="" />
                </div>
            </Col>

            <Col>
                <div className="training__content-left">
                    <h2 data-aos="fade-left"> 
                    Training & Organisation Development 
                    </h2>
                </div>
            </Col>                
        </Row>
    </Container>

    <Container>
        <Row>
            <Col>
                <div className='training__img-box' data-aos="fade-right">
                    <img src={img1} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>

  <section>
    <Container>
        <Row>
            <Col>
            <div className='trainig__program' data-aos="fade-scroll">
                <h2> Corporate Training </h2>
            </div>
            </Col>
        </Row>
    </Container>

    <Container>
        <Row>
            <Col lg='6'>
                <div className='non-techTraining' data-aos="fade-right">
                    <h4> Non-Technical Training </h4>
                    <ul>
                        <li>Time Management and Goal Setting.</li>
                        <li>Creative Problem Solving.</li>
                        <li>Conflict Resolution.</li>
                        <li>Team Management.</li>
                        <li>Team Dealing.</li>
                        <li>Dealing with Problems.</li>
                        <li>Change management.</li>
                        <li>Structural Framework.</li>
                        <li>Leadership.</li>
                        <li>Time Management.</li>
                        <li>Stress Management.</li>
                        <li>Presentation Skill and Training.</li>
                        <li>Writing Skill.</li>
                    </ul>
                </div>
            </Col>

            <Col lg='2'>
                <div className="non-techTraining__img" data-aos="fade-scroll">
                    <img src={heroImg1} alt="" />
                </div>
            </Col>
        </Row>
    </Container>

    <Container>
        <Row>
            <Col lg='6'>
                <div className="techTraining__img" data-aos="fade-scroll">
                    <img src={heroImg2} alt="" />
                </div>
            </Col>
            <Col lg='4'>
                <div className='techTraining' data-aos="fade-left">
                    <h4> Technical Training </h4>
                    <ul>
                        <li>Equipment Detailing.</li>
                        <li>Installation Procedure of the Equipment's.</li>
                        <li>Project Operation & Maintenance.</li>
                        <li>Quality Control.</li>
                    </ul>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
  </>
}

export default Training