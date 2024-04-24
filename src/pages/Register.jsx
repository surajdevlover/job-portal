import React, { useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../style/register.css'

// import registerImg from '../assets/images/register.png'
// import userIcon from '../assets/images/user.png'

const Register = () => {

  const [credentials, setCredentials] = useState({
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

  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='m-auto'>
                    <div className="register__container">
                        <div className="register__form">
                            <Form onSubmit={handleClick} onTouchCancel={handleClick}>
                            <h4>Register with <span>Manaswi Management Services Pvt. Ltd. </span></h4>
                            <hr />
                                <FormGroup>
                                    <h5>Create your credentials<span className="crc-form-mandatory"> *</span></h5>
                                    <p>Email</p>
                                    <input type="email" required id="email" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <p>Password</p>
                                    <input type="password" required id="password" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <p>Re-enter password</p>
                                    <input type="password" required id="password" onChange={handleChange}/>
                                </FormGroup>

                                <FormGroup>
                                    <h5>Basic Info<span className="crc-form-mandatory">*</span></h5>
                                    <p>First Name</p>
                                    <input type="text" required id="first_name" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <p>Last Name</p>
                                    <input type="text" required id="second_name" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <p>Mobile</p>
                                    <input type="text" required id="number" onChange={handleChange}/>
                                </FormGroup>

                                <FormGroup>
                                    <h5>Address Information<span className="crc-form-mandatory"> *</span></h5>
                                    <p>Street</p>
                                    <input type="text" required id="street" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <p>City</p>
                                    <input type="text" required id="city" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <p>State/Province</p>
                                    <input type="text" required id="state" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <p>Zip/Postal Code</p>
                                    <input type="text" required id="zip_code" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <p>Country</p>
                                    <input type="text" required id="country" onChange={handleChange}/>
                                </FormGroup>


                                <FormGroup>
                                    <h5>Professional Details<span className="crc-form-mandatory"> *</span></h5>
                                    <p>Current Job Title</p>
                                    <input type="text" required id="job-title" onChange={handleChange}/>
                                </FormGroup>
                                <FormGroup>
                                    <p>Skill Set</p>
                                    <input type="text" required id="skill" onChange={handleChange}/>
                                </FormGroup>

                                <FormGroup>
                                    <h5>Educational Details<span className="crc-form-mandatory">*</span></h5>
                                    <p>Institute / School</p>
                                    <input type="text" required id="school" onChange={handleChange}/>
                                    <p>Major / Department</p>
                                    <input type="text" required id="department" onChange={handleChange}/>
                                    <p>Degree</p>
                                    <input type="text" required id="degree" onChange={handleChange}/>
                                    <p>Duration</p>
                                    <input type="month" required id="duration" onChange={handleChange}/> To <input type="month" required id="street" onChange={handleChange}/>
                                    <input type="checkbox" required id="checkbox" placeholder='I currently work here'/> 
                                    <span className="checkbox">I currently work here</span>
                                    <p>Mode of Education</p>
                                    <input type="dropdown" required id="mode" onChange={handleChange}/>
                                    <p>+Add More</p>
                                </FormGroup>

                                <FormGroup>
                                    <h5>Experience Details</h5>
                                    <p>Occupation / Title</p>
                                    <input type="text" required id="school" onChange={handleChange}/>
                                    <p>Company</p>
                                    <input type="text" required id="department" onChange={handleChange}/>
                                    <p>Summary</p>
                                    <input type="text" required id="degree" onChange={handleChange}/>
                                    <p>Work Duration</p>
                                    <input type="month" required id="duration" onChange={handleChange}/> To 
                                    <input type="month" required id="street" onChange={handleChange}/>
                                    <br />
                                    <input type="checkbox" required id="checkbox" placeholder='I currently work here'/>
                                    <span className="checkbox">I currently work here</span>
                                    <p>+Add More</p>
                                </FormGroup>

                                <FormGroup>
                                    <h5>Attachment Information<span className="crc-form-mandatory"> *</span></h5>
                                    <p>Resume</p>
                                    <input type="text" required id="job-title" onChange={handleChange}/>
                                </FormGroup>

                                <Button className='btn1' type='cancel' id='cancel'>Cancel</Button>
                                <Button className='btn2' type='submit' id='create'>Create</Button>
                                <p>Already have an account?<Link to="/Login">Login</Link></p>
                            </Form>
                            
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Register;