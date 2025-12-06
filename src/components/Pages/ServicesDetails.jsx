import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServicesDetails = () => {

    const [services, setServices] = useState([]);
    const {Id} = useParams();

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data => setServices(data))
        .catch(err=>console.log(err))
    },[])


    const findResult= services.find(service => service.serviceId == Id);
    console.log(findResult);
    

    return (

        //price : 25 providerEmail : "info@pawcare.com" providerName : "PawCare Studio" rating : 4.9 serviceId : 1 serviceName : "Winter Coat Fitting for Dogs" slotsAvailable : 4
        
        <div className='flex flex-col items-center my-20'>
            <img className='w-max h-[500px] rounded-3xl' src={findResult?.image} alt="" />
            <p><span className='text-2xl'>ProviderName:</span> {findResult?.providerName}</p>
            <p><span className='text-2xl'>Service Name:</span> {findResult?.serviceName}</p>
            <p><span className='text-2xl'>Category:</span> {findResult?.category}</p>
            <p><span className='text-2xl'>Email:</span> {findResult?.providerEmail}</p>
            <p><span className='text-2xl'>Description:</span>{findResult?.description}</p>
            <p><span className='text-2xl'>Price:</span> {findResult?.price}</p>


        </div>
    );
};

export default ServicesDetails;