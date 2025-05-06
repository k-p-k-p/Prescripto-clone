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
      <p  className='text-gray-600' >Browse through the doctors specialist.</p>

      <div className='flex flex-col sm:flex-row items-start gap-5'>

        {/* left side */}
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={() => navigate(`/doctors/General physician`) } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="General physician" ? "bg-indigo-300 text-black" : ""}`}>General physician</p>
          <p onClick={()  =>navigate(`/doctors/Gynecologist`)       }  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gynecologist" ? "bg-indigo-300 text-black" : ""}`}>Gynecologist</p>
          <p onClick={() => navigate(`/doctors/Dermatologist`)      }  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Dermatologist" ? "bg-indigo-300 text-black" : ""}`}>Dermatologist</p>
          <p onClick={() =>navigate(`/doctors/Pediatricians`)     }  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Pediatricians" ? "bg-indigo-300 text-black" : ""}`}>Pediatricians</p>
          <p onClick={() =>navigate(`/doctors/Neurologist`)       } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Neurologist" ? "bg-indigo-300 text-black" : ""}`} >Neurologist</p>
          <p onClick={() =>navigate(`/doctors/Gastroenterologist`)  } className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gastroenterologist" ? "bg-indigo-300 text-black" : ""}`} >Gastroenterologist</p>
        </div>

        {/* right side */}  
        <div className='grid  md:grid-cols-4 gap-4'>
          {filteredDoctors.map((doctor,index)=>(
            <div key={doctor._id} onClick={() => navigate(`/appointment/${doctor._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] hover:shadow-md transition-all duration-500 '>
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