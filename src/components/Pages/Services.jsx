import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/services')
            .then(res=>res.json())
            .then(data => setServices(data))
            .catch(err=>console.log(err))
    },[])
    console.log(services)

    return (
        <div className='mt-8'>
            <h3 className='text-3xl font-bold text-center'>Popular Winter Care Services</h3>
            <div className='md:grid md:grid-cols-3 gap-8 px-10 mt-5'>
                {
                    services.map(service=>
                        <motion.div initial={{scale:0}} animate={{
                                        scale: 0.9,
                                        transition: { duration: 1 }
                                    }} className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img className='h-[300px] w-full object-cover'
                                src={service?.image}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service?.productName}</h2>
                                <p>{service?.date}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/details/${service?._id}`}><button className="btn btn-primary">View details</button></Link>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;