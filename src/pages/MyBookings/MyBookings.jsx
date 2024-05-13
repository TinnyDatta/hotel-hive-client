import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyBookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myBooking/${user?.email}`, {credentials: 'include'})
    .then(res => res.json())
    .then(data => {
      setBookings(data)
    })
  },[user, control])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
      method : "DELETE",
    })
    .then(res => res.json())
    .then(data => {
     if(data.deletedCount> 0){
      setControl(!control)
     }
     if(data.deletedCount > 0){
      Swal.fire({
        title: "Deleted!",
        text: "Your booking has been deleted.",
        icon: "success"
      });
     }
    })
        
      }
    });
    
  }

    return (
        <div>
          <Helmet>
            <title>HotelHive | My Bookings </title>
           </Helmet>
            <h2 className="text-2xl font-semibold text-center"> My Booking</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Room Name</th>
        <th>Price Per Night</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
        bookings.map(booking => (
          <tr key={booking._id}>
        {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
                <img src={booking.room_image} />
              </div>
            </div>
            {/* <div>
              <div className="font-bold">{booking.room_name}</div>
             
            </div> */}
          </div>
        </td>
        <td>
          {booking.room_name}
          
          
        </td>
        <td>{'$'+booking.price_per_night}</td>
        <th>
          <button onClick={() => handleDelete(booking._id)} className="btn btn-ghost btn-xs bg-red-400">Cancel</button>
          
        </th>
        <th>
          <Link to={`/update/${booking._id}`}>
          <button className="btn btn-ghost btn-xs bg-green-400">Update date</button>
          </Link>
          
        </th>
      </tr>
        ))
      }
      
     
      
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default MyBookings;