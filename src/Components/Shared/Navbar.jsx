import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { AuthContext } from '../Providers/AuthProviders';
import { useContext } from "react";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch(e => console.error(e))
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><NavLink to='/destination'>Destination</NavLink></li> */}
        <li><NavLink to='/booking'>Booking</NavLink></li>
        <li><NavLink to='/contacts'>Contacts</NavLink></li>

    </>
    return (

        <div className=" navbar px-16 text-white font-semibold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="w-28 bg-white p-1">
                    <img src={logo} />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="form-control mr-4">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto border border-white bg-transparent" />
                </div>

                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link onClick={handleSignOut} to='/' className="btn border-none bg-yellow-500 text-white font-bold">Signout</Link> :
                        <Link to='/login' className="btn border-none bg-yellow-500 text-white font-bold">Login</Link>
                }
            </div>
        </div>

    );
};

export default Navbar;