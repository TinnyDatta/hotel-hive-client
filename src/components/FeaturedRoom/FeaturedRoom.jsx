import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const FeaturedRoom = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/bookings')
    .then(res => res.json())
    .then(data => {
      setFeatures(data)
    })
  },[])

    return (
        <div className="my-10">
            <h2 className="text-2xl font-semibold text-center">Featured Books</h2>
    <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {
      features?.map((feature) => (
        <div key={feature._id} className="card w-96 bg-[#FFE4B5] shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{feature.room_name}</h2>
              <p>{feature.room_description}</p>
              <div className="card-actions justify-start">
                <Link
                  to={`/roomDetails/${feature._id}`}
                >
                <button className="btn border-none mt-3 bg-[#E9967A] ">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
      ))
    }
    </div>
        </div>
    );
};

export default FeaturedRoom;

