import React, { useContext , useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const Doctors = () => {

  const {speciality} = useParams();
  // console.log(speciality);9/58
  const {doctors} = useContext(AppContext);
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilteredDoctors(doctors.filter(doc => doc.speciality === speciality))
    }
    else{
      setFilteredDoctors(doctors)
    }
  }
  //if any of doctors or speciality gets changed then the applyafilter gets called
  useEffect(
    () => {
      applyFilter()
    },[doctors,speciality]
  )
  return (
    <div>
      <p  >Browse through the doctors specialist.</p>

      <div className='flex flex-row gap-10'>

        {/* left side */}
        <div className='flex flex-col gap-6'>
          <p onClick={() => navigate(`/doctors/General physician`)} className='text-2xl  w-25   border-2 border-gray-300 rounded-md'>General physician</p>
          <p onClick={() => navigate(`/doctors/Gynecologist`)} className='text-2xl  w-25 border-2 border-gray-300 rounded-md'>Gynecologist</p>
          <p onClick={() => navigate(`/doctors/Dermatologist`)} className='text-2xl  w-25 border-2 border-gray-300 rounded-md'>Dermatologist</p>
          <p onClick={() => navigate(`/doctors/Pediatricians`)} className='text-2xl  w-25 border-2 border-gray-300 rounded-md'>Pediatricians</p>
          <p onClick={() => navigate(`/doctors/Neurologist`)} className='text-2xl  w-25 border-2 border-gray-300 rounded-md'>Neurologist</p>
          <p onClick={() => navigate(`/doctors/Gastroenterologist`)} className='text-2xl  w-25 border-2 border-gray-300 rounded-md'>Gastroenterologist</p>
        </div>

        {/* right side */}  
        <div className='grid  md:grid-cols-4 gap-4'>
          {filteredDoctors.map((doctor,index)=>(
            <div key={doctor.id} onClick={() => navigate(`/doctors/${doctor._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] hover:shadow-md transition-all duration-500 '>
              <img className='bg-blue-50' src={doctor.image} alt={doctor.name} />
              <div className='flex items-center gap-2 text-sm text-gray-500 '>
                <p className='w-2 h-2 bg-green-500 rounded-full '></p><p className='text-green-500'>Available</p>
              </div>
              <p>{doctor.name}</p>
              <p className='text-sm text-gray-500'>{doctor.speciality}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Doctors;