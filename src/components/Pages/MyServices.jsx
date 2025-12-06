import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const MyServices = () => {

    const [myService, setMyService] = useState([]);

    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`http://localhost:3000/my-services?email=${user?.email}`)  
        .then(res=>res.json())
        .then(data => setMyService(data))
        .catch(err=>console.log(err))
    },[user?.email])



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
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
                                                <div>
                                                    <div className="font-bold">{service?.productName}</div>
                                                    <div className="text-sm opacity-50">{service?.address}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
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