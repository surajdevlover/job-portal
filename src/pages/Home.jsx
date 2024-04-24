import React, {useEffect} from 'react'
// import Slider from 'react-slick' 
import {Link} from 'react-router-dom'
import '../style/home.css'

import { Container, Row, Col, Button} from 'reactstrap';
import heroImg from '../assets/images/hr-services.png'
import heroImg1 from '../assets/images/welcome.png'
import Subtitle from './../Shared/Subtitle';
// import newSerVideo from '../assets/images/hero-video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'
import TourDetails from './TourDetails';

const Home = () => {

  // create a reacte hook for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  // const settings={
  //   dots:true,
  //   infinite:true,
  //   autoplay:true,
  //   speed:1000,
  //   swipeToSlide:true,
  //   autoplaySpeed:2000,
  //   slidesToShow:3,

  //   responsive:[
  //     {
  //       breakpoint:992,
  //       settings:{
  //         slidesToShow:2,
  //         slidesToScroll:1,
  //         infinite:true,
  //         dots:true,
  //       },
  //     },
  //     {
  //       breakpoint:575,
  //       settings:{
  //         slidesToShow:2,
  //         slidesToScroll:1,
  //       },
  //     },
  //   ]
  // }

  return <>

    {/* hero-section-right start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content-right">
                <div className="hero__subtitle d-flex align-items-center" data-aos="fade-right">
                  <Subtitle subtitle={'Discover the future with us'}/>
                </div>
                <h1 data-aos="fade-up"> 
                  Our HR Services
                </h1>
                <p data-aos="fade-up">We are a team of professionals and subject matter experts with over three decades of experience in HR Consulting, 
                  Training, Outsourcing, Executive Search, Recruitments, Temporary Staffing services in various sectors and verticals.
                </p>

              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box-right">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    {/* hero-section-right end */}

    {/* hero-section-left start */}
    <section>
      <Container>
        <Row>
          <Col lg='2'>
            <div className="hero__img-box-left">
              <img src={heroImg1} alt="" />
            </div>
          </Col>

          <Col>
            <div className="hero__content-left">
              <h1 data-aos="fade-left"> 
                Welcome to <br/>
                <span className='highlight' data-aos="fade-up">MANASWI MANAGEMENT SERVICES</span>
              </h1>
              <p data-aos="fade-right"> <span className='highlight'> Manaswi Management Services Pvt. Ltd.</span> is a Man Power Consulting & Outsourcing company 
              based in heart of India (Delhi ) Equipped, also with a Network in Mumbai, Pune.  On Track to become a Premier Manpower Consulting & 
              outsourcing Solutions , in India & abroad.<br/>
              A result driven, management practitioner, they were on Board of their last companies. 
              Their passion areas are Manpower Solutions, HR, OD Interventions and Leadership development through creative methods.
              </p>

              <div className="nav__right d-flex align-items-center gap-4">
                <div className="nav__btns d-flex align-items-center gap-4">
                  <Button className='btn primary__btn'><Link to='/about'>Know More</Link></Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* hero-section-left end */}

    {/* services start */}
    <section>
      <Container>
        <Row>
          <Col >
            <h5 className='services__subtitle' data-aos="fade-down">OUR SERVICES</h5>
            <h2 className='services__title' data-aos="fade-right">What We Do?</h2>
            <p className='services__p' data-aos="fade-left">We are the first Japanese-owned and managed HR solution service provider that started its business in 
              India and are eager to leverage this background for assisting our clients to develop human resources strategies 
              and fulfill HR needs.</p>
          </Col>
        </Row>
      </Container>
    </section>
    {/* services end */}

    {/* card start */}
    <section>
      <Container>
        <Row>
          <Col>
            <TourDetails/>
          </Col>
        </Row>
      </Container>
    </section>
    {/* card end */}

    {/* MANASWI MANAGEMENT SERVICES INDIA IN NUMBERS start */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5 featured'>
            <h4 className='featured__title' data-aos="fade-down">MANASWI MANAGEMENT SERVICES INDIA IN NUMBERS</h4>

            <div className="counter__wrapper d-flex align-items-center gap-5" data-aos="fade-right">
              <div className="counter__box1">
                <span>10+</span>
                <h6>Clients in India & Overseas</h6>
              </div>
              <div className="counter__box">
                <span>1,000+</span>
                <h6>People Placed</h6>
              </div>
              <div className="counter__box">
                <span>4</span>
                <h6>Branches</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* MANASWI MANAGEMENT SERVICES INDIA IN NUMBERS end */}

    {/* new services start */}
    {/* <section>
      <Container>
        <Row>
          <Col>
            <h5 className='new-services__subtitle' data-aos="fade-right">OUR SERVICES</h5>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg='2'>
            <div className="new__services-vid-left" data-aos="fade-up">
              <video muted autoPlay loop controls>
                <source src={newSerVideo}/>
              </video>
            </div>
          </Col>

          <Col>
            <div className="new__services-left">
              <h1 data-aos="fade-left"> 
                PRIDE - Performance Management Solution <br/>
              </h1>
              <p data-aos="fade-right"> <span className='highlight'> PRIDE PMS </span> 
                 is a multi-faceted performance management system that enables organizations to measure, 
                evaluate and improve employee performance. It’s a cloud based customizable Performance Management System 
                (SaaS) which facilities a performance driven work culture. <br/> <br />
                PRIDE PMS is also bilingual and support both English and Japanese languages.
              </p>

              <div className="nav__right d-flex align-items-center gap-4" data-aos="fade-left">
                <div className="nav__btns d-flex align-items-center gap-4">
                  <Button className='btn primary__btn'><Link to='/register'>Know More</Link></Button>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='2'>
            <div className="new__services-vid-right" data-aos="fade-up">
              <video muted autoPlay loop controls>
                <source src={newSerVideo}/>
              </video>
            </div>
          </Col>

          <Col>
            <div className="new__services-right">
              <h1 data-aos="fade-left">                 
              <span className='highlight' data-aos="fade-up">MANASWI MANAGEMENT SERVICES </span> <br/>  
                 Language Academy
              </h1>
              <p data-aos="fade-right"> <span className='highlight'> MANASWI MANAGEMENT SERVICES </span> 
              is happy to announce the launch of “Japanese Language Academy” which will provide Basic Japanese Language 
              learning to all aspiring people! The course is designed to build business Japanese language knowledge and fluency. 
              It is a thoughtfully crafted course to meet the needs of both Organizations and Individuals!
              </p>

              <div className="nav__right d-flex align-items-center gap-4" data-aos="fade-left">
                <div className="nav__btns d-flex align-items-center gap-4">
                  <Button className='btn primary__btn'><Link to='/register'>Know More</Link></Button>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section> */}
    {/* new services end */}
  </>
}

export default Home