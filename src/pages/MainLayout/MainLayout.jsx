
import { Outlet } from "react-router-dom";
// import Footer from "../Shared/Footer/Footer";
// import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
            <ToastContainer/>
        </div>
    );
};

export default MainLayout;