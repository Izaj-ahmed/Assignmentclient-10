import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router';
import axios from 'axios';

const MyServices = () => {

    const [myService, setMyService] = useState([]);

    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`http://localhost:3000/my-services?email=${user?.email}`)  
        .then(res=>res.json())
        .then(data => setMyService(data))
        .catch(err=>console.log(err))
    },[user?.email])


    const handleDelete = (id) =>{
        axios.delete(`http://localhost:3000/delete/${id}`)
        .then(res=>{
            console.log(res.data);
            const remaining = myService.filter(service=> service._id != id);
            setMyService(remaining);
        })
        .catch(err=>{
            console.log(err);
        })
        
    }



    return (
        <div>
            <div className="overflow-x-auto mx-20">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Image</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>

                            {
                                myService?.map(service=>
                                    <tr>
                            
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                        src={service?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-sm opacity-50">{service?.category}</div>
                                            
                                        </td>
                                        <td>{service?.price}</td>
                                        <th>
                                        <div className='flex gap-4'>
                                            <button onClick={()=> handleDelete(service?._id)} className="btn btn-error btn-xs text-white">Delete</button>
                                            <Link to={`/update-services/${service?._id}`}><button className="btn btn-success btn-xs text-white">Edit</button></Link>
                                        </div>
                                        </th>
                                    </tr>
                                )
                            }
                    
                        </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default MyServices;