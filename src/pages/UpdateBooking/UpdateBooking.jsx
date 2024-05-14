import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";

const UpdateBooking = () => {
    const booked = useLoaderData();
    const [startDate, setStartDate] = useState(new Date());
    const {_id, room_image, room_name,} = booked;

    const handleDate = e => {
        e.preventDefault();
        const deadline = startDate
      
        
    
    const UpdateInfo = {deadline, room_image, room_name};
    // console.log(UpdateInfo)
    
      fetch(`https://hotel-hive-server-ten.vercel.app/addings/${_id}`, {
        method : 'PUT',
        headers : {
         'content-type' : 'application/json'
        },
        body : JSON.stringify(UpdateInfo)
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if(data.modifiedCount > 0){
          Swal.fire({
            title: 'Success!',
            text: 'Updated Date successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
    
      }

    return (
        <div>
            <h2 className="text-3xl text-[#E9967A] text-center mt-10 mb-20">Update Booking Date</h2>
            <div>
     <Helmet>
            <title>HotelHive | Update Booking  </title>
           </Helmet>
<div className="hero sm[900px] md:[600px] lg:h-[600px] rounded-xl mt-6">
      <div className="hero-content flex flex-col md:flex-col lg:flex-col gap-10 lg:gap-10 rounded-lg bg-purple-100 ">
       <div> <img className="rounded-lg shadow-2xl w-[400px] h-[520px] mr- ml-1" src={room_image}  /></div>
        <div className="space-y-4 text-red-50 rounded-2xl w-[400px] lg:w-[600px] h-[600px] lg:h-[220px] bg-purple-300 ml-4 p-4">
          <h1 className="text-3xl font-semibold">{room_name}</h1>
         <div>
          <form onSubmit={handleDate} >
          <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold text-white">Booking Date</span>
          </label>
          <DatePicker
          className='border p-1 rounded-lg text-black' 
           selected={startDate} onChange={(date) => setStartDate(date)} />
          <button
          className=' rounded-xl bg-purple-400 py-2 px-3 w-1/4 mt-2'>Update Date</button>
        </div>
       
          </form>
         </div>
          
         
        </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default UpdateBooking;