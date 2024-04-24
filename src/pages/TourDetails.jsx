import React, {useEffect} from 'react';
import '../style/tourdetails.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

import img1 from './../assets/images/campus.png';
import img2 from './../assets/images/lateral.png';
import img3 from './../assets/images/corporate.png';
import img4 from './../assets/images/payroll.png';

const data=[
  {
    title: 'Fresher Campus Recruitment',
    img: img1,
    desc: 'Campus recruitment is a process whereby businesses approach academic institutions like a college or university to select and hire students for different job positions...'
  },
  {
    title: 'Lateral Recruitment',
    img: img2,
    desc: 'Lateral recruitment, also known as lateral hiring or specialized hiring, is the process of hiring candidates from other companies to fill roles that are similar to their current positions...'
  },
  {
    title: 'Corporate Training',
    img: img3,
    desc: 'An improvement in task management, a boost of confidence, the targeting of necessary skills, and a better understanding of the employee expectations can all contribute to an increase in productivity as a result of the well-organized and efficient training program...'
  },
  {
    title: 'HR OutSourcing Payroll & Statutory',
    img: img4,
    desc: 'Our HR Outsourcing strategy centers around your organizational goals and vision, enabling us to help you transition smoothly and focus on your business growth...'
  }
]

const TourDetails = () => {

  // create a reacte hook for scroll animation
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='main-card'>
      <div className='cards mt-20'>
        {data.map((d) => (
          <div className='main__head' data-aos="fade-right">
            <div className='card__img' data-aos="fade-up">
              <img src={d.img} alt="img"/>
            </div>
            <div className='card__deatail' data-aos="fade-up">
              <p className='title'>{d.title}</p>
              <p className='desc'>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TourDetails