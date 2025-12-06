import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase.init';

const Profile = () => {
    const {user,setUser} = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenForm = ()=>{
        setIsOpen(!isOpen)
    }

    const handleUpdateProfile = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photourl = e.target.photourl.value;
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
        })
        .then(() => {
            setUser({...user, displayName: name, photoURL: photourl})
                
        })
        .catch((error) => {
            console.log(error);
        });

    }


    return (
        <div className='flex flex-col justify-center items-center m-[100px] gap-4'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={user?.photoURL} />
                </div>
            </div>
            <h2 className='text-2xl font-bold'>Name: {user?.displayName}</h2>
            <h2 className='text-2xl font-bold'>Email: {user?.email}</h2>
            <button onClick={handleOpenForm} className='btn btn-primary'>Update Profile</button>
            {
                isOpen && (
                    <form onSubmit={handleUpdateProfile} className="fieldset">
                        <label className="label">Email</label>
                        <input defaultValue={user?.displayName} name='name' type="text" className="input" placeholder="Your Name" />
                        <label className="label">Photo URL</label>
                        <input defaultValue={user?.photoURL} type="text" name="photourl" className='input' placeholder='PhotoURL' />
                        
                        <button className="btn btn-neutral mt-4">Update</button>
                    </form>
                )
                
            }
        </div>
    );
};

export default Profile;