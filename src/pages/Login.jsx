import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../style/login.css'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

const Login = () => {

  const [credentials, setCredentials] = useState({
    email:undefined,
    password:undefined,
  });

  const handleChange = e => {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  };

  const handleClick = e=>{
    e.preventDefault()
  };

  return (
    <section>

        <Container>
            <Row>
                <Col>
                    <div className='login__container-header'>
                        <h4> 
                        Welcome to the <br/>
                        <span className='highlight' data-aos="fade-up">Candidate Portal</span>
                        </h4>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col lg='8' className='m-auto'>
                    <div className="login__container d-flex justify-content-between">
                        <div className="login__img">
                            <img src={loginImg} alt="" />
                        </div>

                        <div className="login__form">
                            <div className="user">
                                <img src={userIcon} alt="" />
                            </div>
                            <h2>Sign In</h2>

                            <Form onSubmit={handleClick}>
                                <FormGroup>
                                    <input type="email" placeholder='Email' required id="email" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <input type="password" placeholder='Password' required id="password" onChange={handleChange}/>
                                </FormGroup>
                                <Button className='btn secondary__btn auto_btn' type='submit'>Login</Button>
                            </Form>
                            <p>Don’t have an account?<Link to="/register">Register Now</Link></p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Login