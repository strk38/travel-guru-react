import Navbar from "../Shared/Navbar";
import bg_1 from '../../assets/images/Rectangle 1.png';
import Carousel from "./Carousel.jsx";
import { useEffect, useState } from "react";
// import { set } from "firebase/database";
// import { useLoaderData } from "react-router-dom";

const Home = () => {
    // const info = useLoaderData();
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('../../../info.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])

    console.log('home', info);
    return (
        <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${bg_1})` }}>
            <div >

                <Navbar></Navbar>
                <Carousel key={info.id} info={info}></Carousel>
            </div>
        </div>
    );
};

export default Home;