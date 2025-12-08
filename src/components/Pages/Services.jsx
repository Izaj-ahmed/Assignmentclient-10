import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from "motion/react";

const Services = () => {
    const [services, setServices] = useState([]);
    const [category, setCategory] = useState('');


    useEffect(() => {
        fetch(`http://localhost:3000/services?category=${category}`)
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.log(err))
    }, [category])
    console.log(services)

    return (
        <div className='mt-8 px-10'>
            <div className='flex justify-end'>
                <select onChange={(e)=>setCategory(e.target.value)} defaultValue="Choose a category" className="select select-ghost">
                    <option disabled={true}>Choose a category</option>
                    <option value="">All</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Pet Food">Pet Food</option>
                    <option value="Shelter">Shelter</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <h3 className='text-3xl font-bold text-center'>Popular Winter Care Services</h3>
            <div className='md:grid md:grid-cols-3 gap-8 mt-5'>
                {
                    services.map(service =>
                        <motion.div initial={{ scale: 0 }} animate={{
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
                                <div className='flex justify-between'>
                                    <p>{service?.category}</p>
                                    <p className='text-end'>{service?.price}</p>
                                </div>
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