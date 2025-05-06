import React, { useContext, useEffect , useState} from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';

const Appointment = () => {
  const {docId} = useParams();
  const {doctors} = useContext(AppContext);
  const [docInfo , setDocInfo] = useState(null);
  
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);   
    
    
  }


  

  useEffect(
    () => {fetchDocInfo()  }
    ,[doctors, docId ]
  );

  return docInfo && (
    <div className='flex flex-col sm:grid grid-cols-[1fr_3fr]  '>
      {/* Doctor image*/}
      <div className='bg-blue-500 rounded-xl'>
        <img src={docInfo.image} alt="image" />
      </div>

      {/* docctor's details and appointment booking */}
      <div className='border border-gray-400 border-1 rounded-md mx-2 px-2  '>
        {/* details section */}
        <div className='flex flex-col pl-6 pt-8 gap-2'>
          <div className='flex flex-row gap-2 '>
            <p className='text-3xl font-semibold'>{docInfo.name}</p>
            <img src={assets.verified_icon} alt="verified"></img>
          </div>
          <div className='flex flex-row gap-2'>
            <p className='text-sm text-gray-700 '>{docInfo.degree}-{docInfo.speciality}</p>
            <p className='border rounded-full border-gray-800 border-1 text-xs text-gray-600 p-1'>{docInfo.experience}</p>
          </div>
          <div className='flex flex-row gap-2'>
            <p className='leading-3'>About</p>
            <img src={assets.info_icon} alt="info"></img>
          </div>
            <p className='text-gray-500'>{docInfo.about}</p>
          <p className='flex flex-row items-start text-gray-600 pt-2 pb-4'>Appointment fee:<p className='text-gray-800'>${docInfo.fees}</p>
          </p>
        </div>
        </div>

        {/* dummy div */}
        <div></div>
        {/* appointment section */}
        <div className='mx-2 px-2'>
          <p className=' pt-2 pb-2 text-gray-400 font-semibold '>Booking slots</p>
          <div className='flex flex-row flex-auto gap-2 pt-6 pb-6 '>
            <p className='border-2 border-gray-600 rounded-full text-black justify-center pb-1 w-full h-20 text-center pt-5'>MON</p>
            <p className='border-2 border-gray-600 rounded-full text-black justify-center pb-1 w-full h-20 text-center pt-5'>TUE</p>
            <p className='border-2 border-gray-600 rounded-full text-black justify-center pb-1 w-full h-20 text-center pt-5'>WED</p>
            <p className='border-2 border-gray-600 rounded-full text-black justify-center pb-1 w-full h-20 text-center pt-5'>THU</p>
            <p className='border-2 border-gray-600 rounded-full text-black justify-center pb-1 w-full h-20 text-center pt-5'>FRI</p>
            <p className='border-2 border-gray-600 rounded-full text-black justify-center pb-1 w-full h-20 text-center pt-5'>SAT</p>
          </div>
          <div className='flex flex-row flex-auto gap-2 pt-2 pb-6'>
            <p className='flex flex-row flex-auto justify-center h-6 overflow-hidden text-center rounded-full bg-blue-700 text-white'>1</p>
            <p className='flex flex-row flex-auto justify-center h-6 overflow-hidden text-center rounded-full bg-blue-700 text-white'>2</p>
            <p className='flex flex-row flex-auto justify-center h-6 overflow-hidden text-center rounded-full bg-blue-700 text-white'>3</p>
            <p className='flex flex-row flex-auto justify-center h-6 overflow-hidden text-center rounded-full bg-blue-700 text-white'>4</p>
            <p className='flex flex-row flex-auto justify-center h-6 overflow-hidden text-center rounded-full bg-blue-700 text-white'>5</p>
            <p className='flex flex-row flex-auto justify-center h-6 overflow-hidden text-center rounded-full bg-blue-700 text-white'>6</p>
            <p className='flex flex-row flex-auto justify-center h-6 overflow-hidden text-center rounded-full bg-blue-700 text-white'>7</p>
            <p className='flex flex-row flex-auto justify-center h-6 overflow-hidden text-center rounded-full bg-blue-700 text-white'>8</p>
          </div>
          <button className='bg-blue-600 p-2 rounded-full  text-white'>Book an appointment</button>
        </div>

      
    </div>
  );
}

export default Appointment;