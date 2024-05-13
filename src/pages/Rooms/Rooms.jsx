import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Rooms = () => {

// const bookings = useLoaderData();
const [bookings, setBookings] = useState([]);
// const [filter, setFilter] = useState('');

useEffect(() => {
  fetch('http://localhost:5000/bookings')
  .then(res => res.json())
  .then(data => {
    setBookings(data)
  })
},[])

    return (
        <div className="max-w-6xl mx-auto mb-10">
          <Helmet>
            <title>HotelHive | Rooms </title>
           </Helmet>
          <div >
          <div className="text-center my-8">
          {/* <select 
          onChange={e => setFilter(e.target.value) }
          value={filter}
          name='category'
          id='category'
          >
            <option value='' >Filter By Price</option>
            <option value='$0-$200'>$0-$200 </option>
            <option value='$200-$300'>$200-$300</option>
            <option value='$300-$500'>$300-$500</option>
          </select> */}
          </div>
            <h2 className="text-3xl text-[#E9967A] text-center my-10">Available Rooms</h2>
             <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
             {
            bookings.map(booking => (
                
                <Link 
                to={`/roomDetails/${booking._id}`}
                key={booking._id} className="card card-compact w-[350px] h-[350px] bg-base-100 shadow-xl transition border-2 hover:scale-105 hover-border-[#E9967A]">
  <figure><img className="w-[350px] h-[350px]" src={booking.room_image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-[#E9967A]">{booking.room_name}</h2>
    <p className="font-light text-xl">{booking.room_description}</p>
    <p className="font-light text-xl">Price Per Night : {'$'+booking.price_per_night}</p>
    
  </div>
</Link>
            ))
           }
             </div>
        </div>
        </div>
    );
};

export default Rooms;
