import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar_black from "../Shared/Navbar_black";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Login = () => {
    const { signInUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);

    const handleSignIn = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');


        // console.log(email, password);


        signInUser(email, password)
            .then(result => {
                // console.log('login', result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(e => {
                alert(e);
            })


    }

    return (
        <div>
            <Navbar_black></Navbar_black>
            <div className=" flex flex-col items-center my-4 py-2 ">

                <div className="card shrink-0 w-full max-w-sm bg-base-100 border border-gray-300">

                    <h2 className="text-3xl text-center mt-4">Login your account</h2>

                    <form onSubmit={handleSignIn} className="card-body">

                        <span className="label-text font-semibold">Email</span>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                        <span className="label-text font-semibold">Password</span>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                        <button className="btn btn-active">Login</button>

                        <h2 className="font-semibold text-sm text-center text-slate-700">Dont’t Have An Account ?
                            <NavLink to='/register' className="text-orange-600 ">Register</NavLink>
                        </h2>

                    </form>
                </div>

                <div>
                    <div className="flex items-center ">
                        <hr className="w-full border-none bg-black h-0.5 mx-auto" />
                        <h2 className="font-bold "> &nbsp;&nbsp; Or &nbsp;&nbsp;</h2>
                        <hr className="w-full border-none bg-black h-0.5 mx-auto" />
                    </div>

                    <button className="btn w-full bg-transparent border-blue-300 mb-2">
                        <FaGoogle />
                        Login with Google
                    </button>
                    <button className="btn w-full bg-transparent border-slate-300 mb-2">
                        <FaFacebook />
                        Login with Facebook
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Login;