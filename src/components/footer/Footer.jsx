import React, {useEffect} from 'react';
import './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';


import Aos from 'aos'
import 'aos/dist/aos.css'

const quick__links=[
  {
    path:'/home',
    display:'HR Consulting'
  },
  {
    path:'/about',
    display:'HR Outsourcing'
  },
  {
    path:'/contact',
    display:'Outplacement'
  },
  {
    path:'/home',
    display:'Training & Organization Development'
  },
  {
    path:'/about',
    display:'Talent Acquisition'
  },
  {
    path:'/contact',
    display:'Staffing Solutions'
  },
]

const quick__links2=[
  {
    path:'/home',
    display:'About us'
  },
  {
    path:'/about',
    display:'Contact us'
  },
  {
    path:'/contact',
    display:'Blog'
  },
  {
    path:'/home',
    display:'Pasona In News'
  },
  {
    path:'/about',
    display:'Terms of Use'
  },
  {
    path:'/contact',
    display:'Privacy Policy'
  },
]

const quick__links3=[
  {
    path:'/home',
    display:'Job Search'
  },
  {
    path:'/about',
    display:'Job Seeker’s Guide'
  },
]

const quick__links4=[
  {
    path:'/home',
    display:'Japanese Website'
  },
]

const Footer = () => {

  // create a reacte hook for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])


  const year = new Date().getFullYear() 

  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3' data-aos="fade-right">
          <div className='logo'>
            <img src={logo} alt="Logo" />
            <p>Find us on</p>
          </div>
          <div className='social__links d-flex align-items-center gap-4'>
            <span>
              <Link to='#'>
                <i class="ri-facebook-fill"></i>
              </Link>
            </span>
            <span>
              <Link to='#'>
                <i class="ri-linkedin-fill"></i>
              </Link>
            </span>
            <span>
              <Link to='#'>
                <i class="ri-instagram-line"></i>
              </Link>
            </span>
            <span>
              <Link to='#'>
              <i class="ri-twitter-line"></i>
              </Link>
            </span>
          </div>
        </Col>
        
        <Col lg='3' data-aos="fade-down">
          <h5 className='footer__link-title'>HR Solutions</h5>
          
          <ListGroup className='footer__quick-links'>
            {
              quick__links.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3' data-aos="fade-down">
          <h5 className='footer__link-title'>Corporate</h5>
          
          <ListGroup className='footer__quick-links'>
            {
              quick__links2.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3' data-aos="fade-down">
          <h5 className='footer__link-title'>For Job Seekers</h5>
          
          <ListGroup className='footer__quick-links'>
            {
              quick__links3.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>

          <h5 className='footer__link-title'>Organizations</h5>
          
          <ListGroup className='footer__quick-links'>
            {
              quick__links4.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>        
      </Row>
    </Container>

    <Container>
      <Row>
        <Col className='copy text-center'>
          <p className='copyright' data-aos="fade-left">
          Disclaimer: PASONA INDIA is only in the business of providing HR solution services in four (4) domains i.e., 
          Talent Acquisition solution services (placement), staffing, HR consulting and Training services. 
          Please note PASONA INDIA never asks for any payment or any other information via WhatsApp or any other social platform. 
          We never ask for any payment from any candidate for placement service. 
          Please contact service.assurance@pasona.in for verification of any service, payment request, doubtful claims, 
          business request, dubious, misleading, or malicious emails... <br />
          Copyright {year}, PASONA India Private Limited</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer