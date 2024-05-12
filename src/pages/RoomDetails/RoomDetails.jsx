
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import DatePicker from "react-datepicker";
import Swal from 'sweetalert2'

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../AuthProvider/AuthProvider';


const RoomDetails = () => {
  const {user} = useContext(AuthContext);
const id = useParams();
console.log(id)

const [startDate, setStartDate] = useState(new Date());
  const [room, setRoom] = useState({});

useEffect(() => {
fetch(`http://localhost:5000/singleRoom/${id.id}`)
.then(res => res.json())
.then(data => {
    setRoom(data)
    console.log(data)
})
},[id])
  
const {availability, price_per_night, room_description, room_image, room_name, room_size, special_offers } = room
  useEffect(()=> {
    Aos.init({duration: 2000});
  },[]);

  const handleDate = e => {
    e.preventDefault();
    const deadline = startDate
    const email = user?.email
    

const info = {email, deadline, availability, price_per_night, room_description, room_image, room_name, room_size, special_offers};
console.log(info)

  fetch('http://localhost:5000/addings', {
    method : 'POST',
    headers : {
     'content-type' : 'application/json'
    },
    body : JSON.stringify(info)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.insertedId){
      Swal.fire({
        title: 'Success!',
        text: 'Booked a room successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
  })

  }

  return (
  <div>
     <Helmet>
            <title>HotelHive | Booking Details </title>
           </Helmet>
           <div  data-aos = "zoom-in" className="hero h-[500px] rounded-3xl my-8" style={{backgroundImage: 'url(../images/detailsBanner.jpg)'}}>
  <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl text-white font-bold">Explore to show Details</h1>
      <p className="mb-5">If you are feel interested in any rooms, you can learn detailed information from here. </p>
    </div>
  </div>
</div>
<div className="hero sm[900px] md:[600px] lg:h-[600px] rounded-xl mt-6">
      <div className="hero-content flex flex-col md:flex-row-reverse lg:flex-row-reverse gap-10 lg:gap-20 rounded-lg bg-purple-100 ">
       <div> <img className="rounded-lg shadow-2xl w-[400px] h-[520px] mr- ml-1" src={room.room_image}  /></div>
        <div className="space-y-4 text-red-50 rounded-2xl w-[400px] lg:w-[600px] h-[600px] lg:h-[520px] bg-purple-300 ml-4 p-4">
          <h1 className="text-3xl font-semibold">{room.room_name}</h1>
          <h1 className="text-3xl">{room.room_description}</h1>
          <h1 className="text-xl font-semibold  flex flex-row items-center gap-2">Room Size : {room.room_size}</h1>
          <p className="py-3 font-semibold text-xl">Price Per Night : $ {room.price_per_night}</p>
          
          <p  className="text-lg font-semibold">Availability: {room.availability}   </p>
         <p  className="text-lg font-semibold"> Special Offer : {room.special_offers}  </p>
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
          className=' rounded-xl bg-purple-400 py-2 px-3 w-1/4'>Book Now</button>
        </div>
       
          </form>
         </div>
          
         
        </div>
      </div>
    </div>
  </div>
  );
};

export default RoomDetails;