import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';

const UpdateServices = () => {

    const { user } = useContext(AuthContext);

    const { id } = useParams();

    const [service, setService] = useState();
    const [category, setCategory] = useState(service?.category);
    const navigation = useNavigate();

    useEffect(() => {
        axios.get(`https://assignmentserver-10.vercel.app/services/${id}`)
            .then(res => {
                setService(res.data);
                setCategory(res.data.category);
            })

    }, [id])
    console.log(service);


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const address = form.address.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const image = form.image.value;

        const serviceData = {
            email,
            category,
            price,
            address,
            date,
            phone,
            image,
            createdAt: service?.createdAt
        };

        axios.put(`https://assignmentserver-10.vercel.app/update/${id}`, serviceData)
        .then(res=>{
            console.log(res.data);
            navigation('/my-service');
            
        })
        .catch(err=>{
            console.log(err);
            
        })

    }
    console.log(service);

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-3xl text-center font-bold mb-6">Update Service</h2>

            <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-4 bg-white p-6 rounded-2xl shadow">
                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input value={service?.email} type="email" name="email" className="w-full border rounded-xl p-2 bg-gray-100" />
                </div>

                

                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <select
                        name="category"
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                        className="w-full border rounded-xl p-2 bg-gray-100"
                    >
                        <option value="">Select Category</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Pet Food">Pet Food</option>
                        <option value="Shelter">Shelter</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Price</label>
                    <input defaultValue={service?.price} type="text" name="price" className="w-full border rounded-xl p-2 bg-gray-100" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Address</label>
                    <textarea defaultValue={service?.address} name="address" rows="2" className="w-full border rounded-xl p-2"></textarea>
                </div>

                <div>
                    <label className="block font-medium mb-1">Pick-up Date</label>
                    <input defaultValue={service?.date} type="date" name="date" className="w-full border rounded-xl p-2" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Phone</label>
                    <input defaultValue={service?.phone} type="text" name="phone" className="w-full border rounded-xl p-2" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Image Url</label>
                    <input defaultValue={service?.image} type="text" name="image" className="w-full border rounded-xl p-2" />
                </div>

                <button type="submit" className="w-full mt-4 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-900 transition cursor-pointer">Update</button>
            </form>
        </div>
    );
};

export default UpdateServices;