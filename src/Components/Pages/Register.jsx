import { NavLink } from "react-router-dom";
import Navbar_black from "../Shared/Navbar_black";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const f_name = form.get('firstName');
        const l_name = form.get('lastName');
        const email = form.get('email');
        const password = form.get('password');
        const c_password = form.get('confirmPassword');

        // console.log(f_name, l_name, email, password, c_password);

        if (password === c_password) {
            createUser(email, password)
                .then(result => {
                    // console.log(result.user);
                })
                .catch(e => {
                    alert(e);
                })
        }
        else {
            alert('Password doesnt match');
        }

    }

    return (
        <div>
            <Navbar_black></Navbar_black>
            <div className=" flex flex-col items-center my-4 py-2 ">

                <div className="card shrink-0 w-full max-w-sm bg-base-100 border border-gray-300">

                    <h2 className="text-3xl text-center mt-2">Create an account</h2>

                    <form onSubmit={handleRegister} className="card-body">

                        <input type="text" name='firstName' placeholder="First Name" className="input input-bordered" required />
                        <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered" required />

                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <input type="password" name='confirmPassword' placeholder="Confirm Password" className="input input-bordered" required />


                        <button className="btn btn-accent">Create an account</button>

                        <h2 className="font-semibold text-sm text-center text-slate-700">Already have an account ?
                            <NavLink to='/login' className="text-orange-600"> Log in</NavLink>
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

export default Register;