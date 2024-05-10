import { Link } from "react-router-dom";

const Carousel = ({ info }) => {
    // const { name, explanation, image } = info
    console.log('carousol', info);
    const max = info.length;

    return (
        <div className="carousel carousel-center w-fit bg-transparent rounded-box md:my-32 mx-12">
            {
                info.map((item, index) => (
                    <div id={`slide${index}`} key={index} className="grid grid-cols-1 justify-center carousel-item  w-fit">
                        <div className="md:w-9/12 md:h-72 md:flex justify-center items-center md:mx-60">
                            <div className="md:w-1/2 justify-left ">
                                <h2 className=" sm:text-normal md:text-4xl text-white font-bold text-left md:mb-2">{item.name}</h2>
                                <p className="text-white md:font-semibold sm:text-xs md:text-xl">{item.explanation.slice(0, 200)} ...</p>
                                <Link to={`/destination/${item.id}`} className="text-red-400 font-semibold"><div className="mt-4 w-fit px-4 py-1 bg-orange-500 text-white rounded">Booking</div></Link>
                            </div>

                            <div className="grid place-items-center h-72 w-40 mx-12">
                                <img src={item.image} className="rounded-box border border-white" />
                            </div>
                        </div>

                        <div className="flex justify-center w-1/2 mx-16 md:mx-96">
                            <a href={`#slide${index === 0 ? max - 1 : (index - 1) % max}`} className="btn btn-circle bg-transparent text-white mr-1">❮</a>
                            <a href={`#slide${(index + 1) % max}`} className="btn btn-circle bg-transparent text-white ml-1">❯</a>
                        </div>
                    </div>
                )
                )
            }


        </div >
    );
};

export default Carousel;