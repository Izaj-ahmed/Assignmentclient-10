import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    
    const {signInWithEmailPassword,setUser,SigninWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    


    const handleSignIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailPassword(email,password)
        .then (result =>{
            setUser(result.user)
            toast("Log In Successfull!");
            const redirectPath = location.state?.from || '/myprofile';
            navigate(redirectPath);
            
        })
        .catch (error =>{
            console.log(error);
        })
        
        
    }
    const handlegoogleSignIn = ()=>{
        SigninWithGoogle()
        .then(result =>{
            setUser(result.user)
            toast("Log In Successfull!");
            const redirectPath = location.state?.from || '/myprofile';
            navigate(redirectPath);
            
        })
        .catch (error =>{
            console.log(error);
        })
        
    }
    
    const handleForget = () =>{   
        navigate(`/forget/${email}`)
    }


    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignIn} className="fieldset">
                                <label className="label">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><button onClick={handleForget} className="link link-hover">Forgot password?</button></div>
                                <button onClick={handlegoogleSignIn} className='btn'><FcGoogle />Google</button>
                                <div>
                                    <span>Don't have any account?</span><Link className='text-blue-600 underline    ' to={'/signup'}>Sing up</Link>
                                </div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                
                            </form>
                            <ToastContainer></ToastContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;