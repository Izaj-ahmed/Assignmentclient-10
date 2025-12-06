import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServicesDetails = () => {

    const [service, setService] = useState([]);
    const {Id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:3000/services/${Id}`)  
        .then(res=>res.json())
        .then(data => setService(data))
        .catch(err=>console.log(err))
    },[Id])


    
    

    return (

        //price : 25 providerEmail : "info@pawcare.com" providerName : "PawCare Studio" rating : 4.9 serviceId : 1 serviceName : "Winter Coat Fitting for Dogs" slotsAvailable : 4
        
        <div className='flex flex-col items-center my-20'>
            <img className='w-max h-[500px] rounded-3xl' src={service?.image} alt="" />
            <p><span className='text-2xl'>Product Name:</span> {service?.productName}</p>
            {/* <p><span className='text-2xl'>Category:</span> {findResult?.category}</p> */}
            {/* <p><span className='text-2xl'>Email:</span> {service?.providerEmail}</p> */}
            <p><span className='text-2xl'>Address:</span> {service?.address}</p>
            <p><span className='text-2xl'>Price:</span> {service?.price}</p>


        </div>
    );
};

export default ServicesDetails;