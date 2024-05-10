import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
  const {user, logout} = useContext(AuthContext)
 
    const navLinks = <>
    <li><NavLink to='/' className={({isActive}) => isActive? ' text-[#E9967A]  border border-[#FFE4B5] p-2' : ''}>Home</NavLink></li>
    <li><NavLink className={({isActive}) => isActive? ' border p-2 border-[#FFE4B5] text-[#E9967A]' : ''} to='/allTouristsSpot'>Rooms</NavLink></li> 
    {
      user && <>
      <li><NavLink className={({isActive}) => isActive? ' border p-2 border-[#FFE4B5] text-[#E9967A]' : ''} to='/addTouristsSpot'>My Bookings</NavLink></li>
      </>
    }
    
    </>

    return (
        <div className="navbar bg-base-100 sm:mx-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0}  role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0}  className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-red-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a  className="btn btn-ghost text-2xl font-bold text-[#E9967A] bg-[#FFE4B5]">HotelHive</a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  
  <div className="navbar-end">
  {
    user?.email? 
    <div className="flex items-center gap-1">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full" title={user?.displayName || 'not found'}>
      <img alt="" src={user?.photoURL || 'https://i.ibb.co/s21kx6n/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg'} />
    </div>
  </div>
  <button onClick={logout} className="btn btn-sm btn-ghost">Logout</button>
      </div>
:
<div className="flex flex-row gap-2">
    <Link to='/login' className="btn" >Login</Link>
    
    <Link to='/register' className="btn">Register</Link>
</div>
  }
    
  </div>
</div>
    );
};

export default Navbar;