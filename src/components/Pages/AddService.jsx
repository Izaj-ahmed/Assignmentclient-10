import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddService = () => {

    const { user } = useContext(AuthContext);
    const navigation = useNavigate();

    const handleSubmitForm = (e) => {
        e.preventDefault();


        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = parseInt(form.price.value);
        const address = form.address.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const image = form.image.value;

        const serviceData = {
            name,
            email,
            category,
            price,
            address,
            date,
            phone,
            image
        };

        console.log(serviceData);

        axios.post('https://assignmentserver-10.vercel.app/services', serviceData)
            .then(res => {
                console.log(res);
                navigation('/my-service');
                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true
                });
            })

    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-3xl text-center font-bold mb-6">Add Service</h2>

            <form onSubmit={handleSubmitForm} className="grid grid-cols-1 gap-4 bg-white p-6 rounded-2xl shadow">

                <div>
                    <label className="block font-medium mb-1">Name</label>
                    <input type="text" name="name" className="w-full border rounded-xl p-2 bg-gray-100" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input defaultValue={user?.email} type="email" name="email" className="w-full border rounded-xl p-2 bg-gray-100" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <select
                        name="category"
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
                    <input type="text" name="price" className="w-full border rounded-xl p-2 bg-gray-100" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Address</label>
                    <textarea name="address" rows="2" className="w-full border rounded-xl p-2"></textarea>
                </div>

                <div>
                    <label className="block font-medium mb-1">Pick-up Date</label>
                    <input type="date" name="date" className="w-full border rounded-xl p-2" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Phone</label>
                    <input type="text" name="phone" className="w-full border rounded-xl p-2" />
                </div>

                <div>
                    <label className="block font-medium mb-1">Image Url</label>
                    <input type="text" name="image" className="w-full border rounded-xl p-2" />
                </div>

                <button type="submit" className="w-full mt-4 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-900 transition cursor-pointer">Submit</button>
            </form>
        </div>
    );
};

export default AddService;
