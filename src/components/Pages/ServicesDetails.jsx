import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const ServicesDetails = () => {

    const [service, setService] = useState([]);
    const { Id } = useParams();

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://assignmentserver-10.vercel.app/services/${Id}`)
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => console.log(err))
    }, [Id])


    const handleOrder = (e) =>{
        e.preventDefault();

        const form = e.target;
        const productName= form.productName.value;
        const buyerName= form.buyerName.value;
        const quantity = parseInt(form.quantity.value);
        const price = parseInt(form.price.value);
        const email = form.email.value;
        const phone = form.phone.value;
        const additionalNote = form.additionalNote.value;

        const orderData = {
            productId: Id,
            productName,
            buyerName,
            quantity,
            price,
            email,
            phone,
            additionalNote,
            date: new Date()
        };
        
        axios.post('https://assignmentserver-10.vercel.app/orders', orderData)
        .then(res=>{
            console.log(res);
            navigate('/my-orders')
            
        })
        .catch(err=>{
            console.log(err)
        })
    }



    return (

        //price : 25 providerEmail : "info@pawcare.com" providerName : "PawCare Studio" rating : 4.9 serviceId : 1 serviceName : "Winter Coat Fitting for Dogs" slotsAvailable : 4

        <div className='flex flex-col items-center my-20'>
            <img className='w-max h-[500px] rounded-3xl' src={service?.image} alt="" />
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn mt-6" onClick={() => document.getElementById('my_modal_3').showModal()}>Addapt/Order</button>
            <dialog id="my_modal_3" className="modal">
                <div className="flex justify-center items-center modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleOrder} className=" fieldset rounded-box w-xs  p-4">
                        <legend className="fieldset-legend">Order details</legend>

                        <label className="label">Product Name</label>
                        <input  type="text" className="input" name='productName' placeholder="My awesome page" />

                        <label className="label">Buyer Name</label>
                        <input defaultValue={user?.displayName} name='buyerName' type="text" className="input" placeholder="Buyer Name" />

                        <label className="label">Quantity</label>
                        <input type="number" name='quantity' className="input" placeholder="Quantity" />

                        <label className="label">Price</label>
                        <input type="number" name='price' className="input" placeholder="Price" />

                        <label className="label">Email</label>
                        <input readOnly defaultValue={user?.email} name='email' type="email" className="input" placeholder="Email" />

                        <label className="label">Phone</label>
                        <input type="text" name='phone' className="input" placeholder="Phone" />
                        
                        <label className="label">Additional Note</label>
                        <textarea type="text" name='additionalNote' className="input"/>

                        <button  type='submit' className="w-full btn btn-primary">Order</button>
                    </form>
                </div>
            </dialog>


        </div>
    );
};

export default ServicesDetails;