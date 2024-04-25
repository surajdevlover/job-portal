import React, {useEffect,useState} from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './../style/contact.css';

import heroImg from '../assets/images/contact.png';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  const [setCredentials] = useState({
    userName:undefined,
    email:undefined,
    password:undefined,
  });

  const handleChange = e => {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  };

  const handleClick = e=>{
    e.preventDefault()
  };

  // create a reacte hook for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  return <>
    <section>
      <Container>
        <Row>
            <Col lg='2'>
                <div className="contact__img-box-left">
                  <img src={heroImg} alt="" />
                </div>
            </Col>

            <Col>
                <div className="contact__content-left">
                    <h2 data-aos="fade-left"> 
                    Contact us
                    </h2>
                    <p data-aos="fade-right">
                    Thank you for your interest in <span className='highlight'> Manaswi Management Services </span> . 
                    Please contact us through any of the following options.
                    </p>
                </div>
            </Col>                
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='10' className='m-auto'>
            <div className="contact__container d-flex justify-content-between">
              <div className="contact__form">
                <h2>Get in touch</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <h5>Feel free to drop us a line below!</h5>
                    <p>Your name</p>
                    <input type="text" required id="text" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <p>Email address</p>
                    <input type="email" required id="email" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <p>Contact number</p>
                    <input type="contact" required id="number" onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <p>Message</p>
                    <textarea name="message" id="message"></textarea>
                  </FormGroup>
                  <Button className='btn primary__btn'><Link to='#'>Send Message</Link></Button>
                </Form>
              </div>
            </div>
          </Col>

          <Col>
            <div className='address'>
              <h2>Offices:</h2>
              <hr />
              <p>
                B-4/108A, Keshav Puram, Lawrence Road, Delhi - 110035 India.
              </p>
              <p>
                S 557, 7 Hira Complex, 3rd Floor, School Block, Delhi - 110092
              </p>
              <p>
                F-301, Mapple Woodz, Wagholi, Pune - 412207
              </p>
              <p>
                Govardhan Complex, B-Wing, 1st Floor 101, Guffa Road, Jogeshwari, East. Mumbai - 400060
              </p>
              <p>
                +91 11 41083973, +91 9811241672
              </p>
            </div>
          </Col>
        </Row>
      </Container>


    </section>
  </>
}

export default Contact
