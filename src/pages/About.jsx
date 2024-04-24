import React, {useEffect} from 'react'
// import {Link} from 'react-router-dom'
import { Container, Row, Col} from 'reactstrap';
import './../style/about.css';

import heroImg from '../assets/images/about-us.jpg';
import heroImg1 from '../assets/images/our-philosophy.png';
import heroImg2 from '../assets/images/our-people.png';
import heroImg3 from '../assets/images/team.png';
import heroImg4 from '../assets/images/team-bg.jpg';


import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    // create a reacte hook for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return <>
    <section>
        <Container>
            <Row>
                <Col lg='2'>
                    <div className="about__img-box-left" data-aos="fade-scroll">
                    <img src={heroImg} alt="" />
                    </div>
                </Col>

                <Col>
                    <div className="about__content-left">
                        <h2 data-aos="fade-left"> 
                        About Manaswi Management Services Pvt. Ltd. 
                        </h2>
                        <p data-aos="fade-right">
                        This division is running by highly experienced finance specialists possesses a Chartered Accountants 
                        degree from (ICAI) Delhi, and carrying a wide 15 years of experience with them.
                        </p>
                    </div>
                </Col>                
            </Row>
        </Container>

        <Container>
            <Row>
                <Col>
                    <div className="about__other-pera">
                        <p data-aos="fade-right">
                        We are the renowned service providers in the FOREIGN TRADE INDUSTRY (DGFT). A result driven, management 
                        practitioner, they were on Board of their last companies. Their passion areas are Manpower Solutions, HR, 
                        OD Interventions and Leadership development through creative methods.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col lg='6'>
                    <div className="about__content-right">
                        <h1 data-aos="fade-up"> 
                        Our Philosophy
                        </h1>
                        <p data-aos="fade-up">
                        Delivering workable solutions in diverse and complex areas with a strong focus on implementation and integration.
                        Providing superior service to clients to help them achieve competitive advantage in the global market place. 
                        Maintaining long-term relationship with our clients. Attracting and retaining the best talents and developing 
                        a winning team through continuous learning in a collaborative environment.
                        </p>
                    </div>
                </Col>

                <Col lg='2'>
                    <div className="about__img-box-right">
                        <img src={heroImg1} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col lg='6'>
                    <div className="about__content-card">
                        <h1 data-aos="fade-left"> 
                        OUR EXPERTISE IN RECRUITMENT
                        </h1>
                        <ol data-aos="fade-left">
                            <li>
                            Campus Recruitment – Having Tie-ups with Mahatma Gandhi University/IGNOU Study 
                            Centers/Out side Delhi-Kanpur, Lucknow, Bombay,Pune, Bihar. 
                            </li>
                            <li>
                            Recruiting manpower for Heavy Engineering Manufacturing/German Consulting/ Banking/Telecom/Hotel Industries.
                            <li>
                            Bulk hiring for Technical/Non Technical Profiles for Leading BPOs. 
                            </li>
                            </li>
                            <li>
                            Filled up the requirements of Middle Level to Senior Level. (Asst. Managers/Trainers /L&D Managers/BD/Researchers CFO)
                            </li>
                            <li>
                            We are specialized in fresher recruitment of Chartered Accountants for BIG FOURs.
                            </li>
                            <li>
                            Settlement of Labor Disputes.
                            </li>
                        </ol>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>



    {/* Our__People section */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="Our__People">
                        <h1 data-aos="fade-up"> 
                        Our People
                        </h1>
                        <h5 data-aos="fade-left">
                        Our people are the most valuable asset, they are the cornerstones of our 
                        growth and success, making us who we are today.
                        </h5>
                        <p data-aos="fade-up">Our team consists of highly motivated, enthusiastic and passionate industry and domain experts.
                        Each and every person on the team plays a crucial role in driving the organizational goal. 
                        Ethics, Integrity and Commitment are the bedrock of our work culture.
                        </p>
                    </div>
                </Col>

                <Col lg='2'>
                    <div className="Our__People-img-box-right">
                        <img src={heroImg2} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    {/* Our__People section */}


    <section>
        <Container>
            <Row>
                <Col lg='14'>
                    <div className="Management">
                        <h1 data-aos="fade-right"> 
                        Management Team
                        </h1>
                    </div>
                    <div className="Management-img" data-aos="fade-up">
                        <img src={heroImg3} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>


    <section className='Company__Profile-main'>
        <Container>
            <Row>
                <Col lg='2'>
                    <div className="Company__Profile-img">
                    <img src={heroImg4} alt="" />
                    </div>
                </Col>

                <Col>
                    <div className="Company__Profile">
                        <h2 data-aos="fade-left"> 
                        Company Profile
                        </h2>
                        <p data-aos="fade-right" className='head'>
                        Corporate Name
                        </p>
                        <p data-aos="fade-right" className='desc'>
                        Manaswi Management Services Pvt. Ltd.
                        </p>
                        <p data-aos="fade-right" className='head'>
                        Registered Office
                        </p>
                        <p data-aos="fade-right" className='desc'>
                        S 557, 7 Hira Complex, 3rd Floor, School Block, Delhi - 110092
                        </p>
                        <p data-aos="fade-right" className='head'>
                        Branch Office
                        </p>
                        <p data-aos="fade-right" className='desc'>
                        F-301, Mapple Woodz, Wagholi, Pune - 412207 <br/>
                        Govardhan Complex, B-Wing, 1st Floor 101, Guffa Road, Jogeshwari, East.Mumbai - 400060
                        </p>
                        <p data-aos="fade-right" className='head'>
                        Business Activities
                        </p>
                        <p data-aos="fade-right" className='desc'>
                        All business consultancy at one roof top. We are a group of 20 CA , CS , Advocate and MBA  with under one umbrella.
                        ISO Certified Company , covered in peer review  of Chartered Accountants. Consultancy , Cases At ITAT  , Placement  
                        I, Start Up Business support is our core competency. Preparation of CMA Data , Loan consultancy , Loan restructuring.
                        </p>
                        {/* <p data-aos="fade-right" className='head'>
                        Managing Director
                        </p>
                        <p data-aos="fade-right" className='desc'>
                        Ranen Gupta
                        </p> */}
                    </div>
                </Col>                
            </Row>
        </Container>
    </section>
    </>
}

export default About