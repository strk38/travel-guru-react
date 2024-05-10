import Map from "../Map";
import Navbar_black from "../Shared/Navbar_black";
import bg_26 from '../../assets/images/Rectangle 26.png';
import bg_27 from '../../assets/images/Rectangle 27.png';
import bg_28 from '../../assets/images/Rectangle 28.png';

const Booking = () => {
    return (
        <div>
            <Navbar_black></Navbar_black>

            <div className="lg:flex justify-center">

                <div className="lg:w-1/2 mx-4 my-4">
                    <h2 className="font-bold text-lg md:text-xl ml-6">Stay in Cox's Bazar</h2>
                    <div className="flex flex-row ml-6 mb-2 card bg-base-100 shadow-xl">
                        <figure className="w-1/2 lg:w-1/3 px-2 py-4">
                            <img src={bg_26} alt="" className="rounded-xl" />
                        </figure>

                        <div className="items-center text-start mt-2 mb-6 px-1 pt-5">
                            <h2 className="font-bold text-normal md:text-lg">Light bright airy stylish apt & safe
                                peaceful stay</h2>
                            <p className="font-normal text-base">4 guests | 2 bedrooms | 2 beds | 2 baths</p>
                            <p className="font-normal text-base">Wifi Air Conditions Kitchen</p>
                            <p className="font-normal text-base">Cancellation flexibility available</p>
                            <p className="font-semibold text-sm">$34/night</p>
                        </div>
                    </div>

                    <div className="flex flex-row ml-6 mb-2 card bg-base-100 shadow-xl">
                        <figure className="w-1/2 lg:w-1/3 px-2 py-4">
                            <img src={bg_27} alt="" className="rounded-xl" />
                        </figure>

                        <div className="items-center text-start mt-2 mb-6 px-1 pt-5">
                            <h2 className="font-bold text-normal md:text-lg">Light bright airy stylish apt & safe
                                peaceful stay</h2>
                            <p className="font-normal text-base">4 guests | 2 bedrooms | 2 beds | 2 baths</p>
                            <p className="font-normal text-base">Wifi Air Conditions Kitchen</p>
                            <p className="font-normal text-base">Cancellation flexibility available</p>
                            <p className="font-semibold text-sm">$30/night</p>
                        </div>
                    </div>

                    <div className="flex flex-row ml-6 mb-2 card bg-base-100 shadow-xl">
                        <figure className="w-1/2 lg:w-1/3 px-2 py-4">
                            <img src={bg_28} alt="" className="rounded-xl" />
                        </figure>

                        <div className="items-center text-start mt-2 mb-6 px-1 pt-5">
                            <h2 className="font-bold text-normal md:text-lg">Light bright airy stylish apt & safe
                                peaceful stay</h2>
                            <p className="font-normal text-base">4 guests | 2 bedrooms | 2 beds | 2 baths</p>
                            <p className="font-normal text-base">Wifi Air Conditions Kitchen</p>
                            <p className="font-normal text-base">Cancellation flexibility available</p>
                            <p className="font-semibold text-sm">$38/night</p>
                        </div>
                    </div>

                </div>

                <div className="mx-5 my-4">
                    <Map></Map>
                </div>

            </div>
        </div>
    );
};

export default Booking;