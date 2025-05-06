import React from 'react'
import { assets } from '../assets/assets';


const Contact = () => {
  return (
    <div >
      <p className='text-center text-xl text-gray-400 font-bold '>CONTACT US</p>
      <div className='grid flex-col sm:grid-cols-2 p-4'>
        {/* left component */}
      <div>
        <img src={assets.contact_image} alt="contact_image" />
      </div>
      {/* right component */}
      <div className='flex flex-col m-4'>
          <p className='text-gray-500 font-bold py-4'>OUR OFFICE</p>
          <br />
          <br /> 
          <p className='text-wrap w-40'>54709 Willms Station 
          Suite 350, Washington, USA</p>
          <br />
          <p>Tel: (415) 555‑0132 <br />Email: greatstackdev@gmail.com</p>
          <br />
          <p className='text-gray-500 font-bold'>Careers at PRESCRIPTO</p>
          <br />
          <p>Learn more about our teams and job openings.</p>
          <br />
          <button className='border-2 border-x-gray-400 w-22'>Explore Jobs</button>
      </div>
      </div>
    </div>
  );
}

export default Contact;