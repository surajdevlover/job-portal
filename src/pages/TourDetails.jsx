import React, {useEffect} from 'react';
import '../style/tourdetails.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

import img1 from './../assets/images/gallery-01.jpg';
import img2 from './../assets/images/gallery-01.jpg';
import img3 from './../assets/images/gallery-01.jpg';
import img4 from './../assets/images/gallery-01.jpg';

const data=[
  {
    title: 'Talent Acquisition',
    img: img1,
    desc: 'Redefine your workforce with our transformative Talent Acquisition service, tailored to your unique needs, and powered by our extensive network and proven methodologies that ensure you acquire the best talent for every role.'
  },
  {
    title: 'Training',
    img: img2,
    desc: 'We offer a wide range of Learning & Development solutions to ensure that you can get the best out of your people. From creating a training strategy to executing the training and measuring its impact...'
  },
  {
    title: 'HR Consulting',
    img: img3,
    desc: 'Our HR specialists help organizations maximize the effectiveness and efficiency of their HR operations. Be it advisory and implementation activities, human capital strategy...'
  },
  {
    title: 'HR Outsourcing',
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
              <img src={d.img} alt="img" />
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