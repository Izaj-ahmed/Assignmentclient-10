import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MyOrders = () => {


    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        axios.get('https://assignmentserver-10.vercel.app/orders')
            .then(res => {
                setMyOrders(res.data);
            })
            .catch(err => {
                console.log(err);

            })
    }, [])
    console.log(myOrders);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Additional Note</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order?.productName}</td>
                                    <td>{order?.quantity}</td>
                                    <td>{order?.price}</td>
                                    <td>{order?.additionalNote}</td>
                                    <td>
                                        {new Date(order?.date).toLocaleString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                            hour: 'numeric',
                                            minute: 'numeric',
                                            hour12: true
                                        })}
                                    </td>
ß
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;