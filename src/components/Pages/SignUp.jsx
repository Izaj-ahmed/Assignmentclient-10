import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase.init';
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

    const {registerWithEmailPAssword, setUser, SigninWithGoogle} = useContext(AuthContext);

    const handleSignUp = e =>{
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        e.preventDefault();
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

        if (!regex.test(password)) {
            return alert('Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one special character.');
        } 
        

        registerWithEmailPAssword(email , password)
        .then (result =>{
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoUrl
            })
            .then(() => {
                setUser(result.user)
                toast("Sign Up Successfull!");
                 
            })
            .catch((error) => {
                console.log(error);
            });
        })
        .catch(error =>{
            console.log(error)
        })
    }
    

    const handlegoogleSignUp = ()=>{
        SigninWithGoogle()
        .then(result =>{
            setUser(result.user)
            toast("Sign Up Successfull!");
        })
        .catch (error =>{
            console.log(error);
        })
    }
    

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignUp} className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Your Name" />
                                <label className="label">Photo Url</label>
                                <input name='photoUrl' type="text" className="input" placeholder="Photourl" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <div>
                                    <span>Already have an account?</span><Link className='text-blue-600 underline' to={'/login'}>Log in</Link>
                                </div>
                                <button className="btn btn-neutral mt-4">Sign Up</button>
                            </form>
                            <button onClick={handlegoogleSignUp} className='btn'><FcGoogle />Google</button>


                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;