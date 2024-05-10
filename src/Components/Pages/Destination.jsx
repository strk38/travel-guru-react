import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import bg_1 from '../../assets/images/Rectangle 1.png';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";

const Destination = () => {
    const destInfos = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);

    const destInfo = destInfos.find(info => info.id === idInt);
    // console.log(destInfo);

    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(null);

    return (
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${bg_1})` }}>
            <Navbar></Navbar>
            <div className="md:flex">
                <div className="md:w-1/2 mx-6 my-8 px-12 pt-8">
                    <h2 className="text-lg md:text-4xl text-white font-bold text-left mb-2">{destInfo.name}</h2>
                    <p className="text-white font-semibold text-sm md:text-xl">{destInfo.explanation}</p>
                </div>
                <div className="md:w-1/2 mx-6 my-8 px-12 pt-8">

                    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-xl font-semibold text-gray-800">Details</h2>
                            <div className="mt-4">
                                <label htmlFor="origin" className="block text-sm font-medium text-gray-700">Origin</label>
                                <input type="text" id="origin" name="origin" className="mt-1 block w-full border-b-2 border-gray-400 py-2 px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />

                                <label htmlFor="destination" className="block mt-4 text-sm font-medium text-gray-700">Destination</label>
                                <input type="text" id="destination" name="destination" className="mt-1 block w-full border-b-2 border-gray-400 py-2 px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />

                                <div className="flex">
                                    <div className="px-2" orange>
                                        <label htmlFor="fromDate" className="block mt-4 text-sm font-medium text-gray-700">From Date</label>
                                        <DatePicker id="fromDate" name="fromDate" className="mt-1 block w-full border-b-2 border-gray-400 py-2 px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" selected={fromDate} onChange={(date) => setFromDate(date)} />
                                    </div>

                                    <div className="px-2">
                                        <label htmlFor="toDate" className="block mt-4 text-sm font-medium text-gray-700">To Date</label>
                                        <DatePicker id="toDate" name="toDate" className="mt-1 block w-full border-b-2 border-gray-400 py-2 px-4 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" selected={toDate} onChange={(date) => setToDate(date)} />
                                    </div>
                                </div>
                            </div>
                            <Link to='/booking'><button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md">
                                Book Now
                            </button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Destination;