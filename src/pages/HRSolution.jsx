import React, {useEffect} from 'react'
import { Container, Row, Col} from 'reactstrap';
import './../style/hrsolution.css';
import heroImg from '../assets/images/hr-consulting.png';
import heroImg1 from '../assets/images/payrollll.png';
import heroImg2 from '../assets/images/HR-Outsourcing.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'
    
const HRSolution = () => {
  // create a reacte hook for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return <>
  <section>
    <Container>
      <Row>
        <Col lg='2'>
          <div className="hrsolution__img-box-header" data-aos="fade-scroll">
            <img src={heroImg} alt="" />
          </div>
        </Col>

        <Col>
          <div className="hrsolution__header">
              <h2 data-aos="fade-left"> 
              HR Consulting 
              </h2>
              <p data-aos="fade-right"> Every organisation is unique with distinct HR needs. 
              At Manaswi Management Services Pvt. Ltd. we deliver customized HR solutions
              </p>
          </div>
        </Col>                
      </Row>
    </Container>
  </section>

  <section className='hrsolution__content-main'>
    <Container>
      <Row>
        <Col>
          <div className='hrsolution__content'>
            <h3>
              HR Outsourcing
            </h3>
          </div>
        </Col>
      </Row>
    </Container>  
  </section>

  <section className='payroll-main'>
    <Container>
      <Row>
        <Col lg='2'>
          <div className="payroll__Profile-img">
            <img src={heroImg1} alt="" />
          </div>
        </Col>

        <Col>
          <div className="payroll__Profile">
            <h2> 
            Payroll Management
            </h2>
            <p className='desc'>
            &#x2022; Web-based / Email – Monthly Payroll Inputs from Client
            </p>
            <p className='desc'>
            &#x2022; Monthly Payroll Processing
            </p>
            <p className='desc'>
            &#x2022; Reimbursement Processing
            </p>
            <p className='desc'>
            &#x2022; Bank Advice Statement
            </p>
            <p className='desc'>
            &#x2022; Web-based Employee Self-Service
            </p>
            <p className='desc'>
            &#x2022; Customized Payroll Reports
            </p>
            <p className='desc'>
            &#x2022; Monthly Statutory Statements
            </p>
            <p className='desc'>
            &#x2022; Quarterly & Year-end processes (Form 24s & Form 16s)
            </p>
            <p className='desc'>
            &#x2022; Multiple modes of Query Management (Web-based, Email, Telephone, Help Desk)
            </p>
          </div>
        </Col>       
      </Row>
    </Container>
  </section>

  <section className='Statutory-main'>
    <Container>
      <Row>
        <Col >
          <div className="Statutory__Profile">
            <h2> 
            Statutory Management
            </h2>
            <p className='desc'>
            &#x2022; Statutory Registration (PF / PT/ Shops & Establishment….)
            </p>
            <p className='desc'>
            &#x2022; Remittance & Filing of returns towards <br/>
            <span>
            &#x2022; Income Tax
            </span><br/>
            <span>
            &#x2022; Professional Tax
            </span><br/>
            <span>
            &#x2022; Employee State Insurance
            </span><br/>
            <span>
            &#x2022; Provident Fund
            </span>
            </p>
            <p className='desc'>
            &#x2022; Statutory interface on a continuous basis
            </p>
          </div>
        </Col>   
        <Col >
          <div className="Statutory-img">
            <img src={heroImg2} alt="" />
          </div>
        </Col>    
      </Row>
    </Container>
  </section>
  </>
}

export default HRSolution