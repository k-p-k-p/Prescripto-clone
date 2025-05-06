import { assets } from '../assets/assets';
import React from 'react';
// import { useNavigate } from 'react-router-dom';

const About = () => {

  return (
    <div >
      {/* about us */}
      <div className='grid grid-cols-2 '>
      <p  className='text-end  text-gray-400 text-xl px-2'>ABOUT</p>
      <p className='text-start text-gray-900 text-xl '> US</p>
      </div>
      <div className='grid  flex-col  sm:grid-cols-2 gap-4'>
        {/* left side */}
        <div>
            <img src={assets.about_image} alt="" />
        </div>
        {/* right side */}
        <div className='text-gray-500 text-wrap'>
          <p >
          Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
          Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <p className='font-bold text-gray-700'>
          Our Vision
          </p>
          <p>
          Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>
      {/* why choose us and others */}
      <div>
        <h1 className='py-2'> WHY CHOOSE US ? </h1>
        <div className='grid grid-cols-3 border-gray-400  border-2 text-wrap overflow-hidden'>
          {/* 1 */}
          <div className='border-2 p-2'>
            <p>Efficiency</p>
            <p  className='text-gray-400 text-sm py-3'>
            Streamlined appointment scheduling that fits into your busy lifestyle.
            </p>
          </div>
          {/* 2 */}
          <div className='border-2 p-2'>
            <p>Convenience:</p>
            <p className='text-gray-400 text-sm py-3'>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          {/* 3 */}
          <div className='border-2 p-2'> 
            <p>Personalization:</p>
            <p className='text-gray-400 text-sm py-3'>Tailored recommendations and reminders to help you stay on top of your health.</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About;