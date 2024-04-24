import React, {useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { Container, Row, Col} from 'reactstrap';
import './../style/term.css';

import heroImg from '../assets/images/team-bg.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Term = () => {

    // create a reacte hook for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return <>
    <section>
        <Container>
            <Row>
                <Col lg='2'>
                    <div className="term__img-box-left" data-aos="fade-scroll">
                    <img src={heroImg} alt="" />
                    </div>
                </Col>

                <Col>
                    <div className="term__content-left">
                        <h2 data-aos="fade-left"> 
                        Terms of Use
                        </h2>
                        {/* <p data-aos="fade-right">
                        This division is running by highly experienced finance specialists possesses a Chartered Accountants 
                        degree from (ICAI) Delhi, and carrying a wide 15 years of experience with them.
                        </p> */}
                    </div>
                </Col>                
            </Row>
        </Container>
    </section>
  </>
}
export default Term