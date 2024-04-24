import React, {useEffect} from 'react';
import './footer.css';

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


import Aos from 'aos'
import 'aos/dist/aos.css'

const quick__links=[
  {
    path:'/hr-solution',
    display:'HR Consulting'
  },
  {
    path:'/hr-solution',
    display:'HR Outsourcing'
  },
  {
    path:'/hr-solution',
    display:'Outplacement'
  },
  {
    path:'/training',
    display:'Training & Organization Development'
  },
]

const quick__links2=[
  {
    path:'/about',
    display:'About us'
  },
  {
    path:'/contact',
    display:'Contact us'
  },
  {
    path:'/terms-of-use',
    display:'Terms of Use'
  },
  {
    path:'/privacy-policy',
    display:'Privacy Policy'
  },
]

const quick__links3=[
  {
    path:'/career',
    display:'Job Search'
  },
  {
    path:'/home',
    display:'Job Seeker’s Guide'
  },
]

// const quick__links4=[
//   {
//     path:'/home',
//     display:'Japanese Website'
//   },
// ]

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
          <h6 className='footer__link-title'>HR Solutions</h6>
          
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
          <h6 className='footer__link-title'>Corporate</h6>
          
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
          <h6 className='footer__link-title'>For Job Seekers</h6>
          
          <ListGroup className='footer__quick-links'>
            {
              quick__links3.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>

          {/* <h6 className='footer__link-title'>Organizations</h6>
          
          <ListGroup className='footer__quick-links'>
            {
              quick__links4.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup> */}
        </Col>        
      </Row>
    </Container>

    <Container>
      <Row>
        <Col className='copy text-center'>
          <p className='copyright'>
          Disclaimer: MANASWI MANAGEMENT SERVICES is only in the business of providing HR solution services in four (4) domains i.e., 
          Talent Acquisition solution services (placement), staffing, HR consulting and Training services. 
          Please note MANASWI MANAGEMENT SERVICES never asks for any payment or any other information via WhatsApp or any other social platform. 
          We never ask for any payment from any candidate for placement service. 
          Please contact www.msil.org.in/hr for verification of any service, payment request, doubtful claims, 
          business request, dubious, misleading, or malicious emails... <br />
          Copyright {year}, MANASWI MANAGEMENT SERVICES Pvt. Ltd.</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer