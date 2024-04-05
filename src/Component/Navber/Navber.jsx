import { Link, Outlet } from "react-router-dom";
import './Navber.css'
import Footer from "../Footer/Footer";
const Navber = () => {
    const styleName = {
        margin: '10px',
        padding:'20px'
    }
    
    return (
        <div >
            <div className="navber" >Welcome to mySite</div>
            <Link style={styleName} to="/home">Home</Link>
            <Link style={styleName} to='/users'>Users</Link>
            <Link style={styleName} to="/about">About</Link>
            <Link style={styleName} to="/contact">Contact Us</Link>
            <Link style={styleName} to='/posts'>Posts</Link>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Navber;