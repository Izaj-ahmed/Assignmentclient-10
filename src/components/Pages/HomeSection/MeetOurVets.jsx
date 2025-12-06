import React from 'react';

const Veets = [
    
    {
        "id": 1,
        "image": "https://i.ibb.co/4RnF5V8/vet-doctor-1.jpg",
        "doctorName": "Dr. Sarah Thompson",
        "position": "Veterinary Surgeon",
        "experience": "8 years",
        "rating": 4.9,
        "specialty": "Surgery & Internal Medicine"
    },
    {
        "id": 2,
        "image": "https://i.ibb.co/8z6y6sM/vet-doctor-2.jpg",
        "doctorName": "Dr. Michael Lee",
        "position": "Animal Nutritionist",
        "experience": "5 years",
        "rating": 4.7,
        "specialty": "Pet Nutrition & Wellness"
    },
    {
        "id": 3,
        "image": "https://i.ibb.co/SVwdLhJ/vet-doctor-3.jpg",
        "doctorName": "Dr. Olivia Patel",
        "position": "Pet Behavior Specialist",
        "experience": "6 years",
        "rating": 4.8,
        "specialty": "Behavioral Therapy & Training"
    }


]

const MeetOurVets = () => {
    return (
        <div className='mt-8'>
            <div>
                <h3 className='text-center mb-5 text-3xl font-bold'>Doctors</h3>
            </div>
            <div className='md:grid md:grid-cols-3 px-8'>
                {
                    Veets.map(veet=>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                src={veet?.image}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                {veet?.doctorName}
                                <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">Fashion</div>
                                <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MeetOurVets;