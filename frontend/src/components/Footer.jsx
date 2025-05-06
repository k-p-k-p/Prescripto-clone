import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='md:mx-10 '>
        {/* Top section  */}
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left section  */}
            <div>
                <img src={assets.logo} alt='logo' className='mb-5 w-40  ' />
                <p className='w-full md:w-2/3 text-gray-600 leading-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* Center section */}
            <div >
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li onClick={()=>{navigate('/')}} >Home</li>
                    <li onClick={()=>{navigate('/about')}}>About Us</li>
                    <li onClick={()=>{navigate('/contact')}}>Contact Us</li>
                    <li onClick={()=>{navigate('/contact')}}>Privacy Policy</li>
                </ul>
                
            </div>
            {/* Right section  */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>
        </div>   
        {/* bottom section  */}
        
        <div >
            <hr className='border-gray-600 border-1'/>
            <p className='text-gray-600 text-sm text-center'>Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer