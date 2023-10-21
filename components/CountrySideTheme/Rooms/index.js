import React from 'react'
import Carousel from 'better-react-carousel';
import { BiSolidBed } from "react-icons/bi";
import { MdSquareFoot, MdLandscape } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { useInView } from 'react-intersection-observer';

function Rooms({ allHotelDetails, rooms, roomDetailLoader }) {

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.1,    // Trigger animation when 10% of the element is in view
    });

    return (
        <section className='bg-custom-dark-green'>
            <div ref={ref} className={`pt-28 ${inView ? 'animate-slide-in' : 'opacity-0'}`}>
                <div className='px-8 lg:px-20'>
                    <div className='pb-20'>
                        <div className='lg:mx-0'>
                            <div className='text-center'>
                                <span className='text-white tracking-wider font-family-jost-regular'>Welcome To {allHotelDetails?.property_name}</span>
                            </div>
                            <h3 className='mt-5 font-family-marcellus text-center text-white text-4xl lg:text-5xl'>Select Your Cozy Room</h3>
                            <div className='lg:mt-10'>
                                <Carousel cols={1} rows={1} gap={0} loop={false}
                                    responsiveLayout={[
                                        {
                                            breakpoint: 640,
                                            cols: 3,
                                            rows: 1,
                                            gap: 0,
                                            loop: false,
                                            autoplay: 1000
                                        },
                                        {
                                            breakpoint: 768,
                                            cols: 1,
                                            rows: 1,
                                            gap: 0,
                                            loop: false,
                                            autoplay: 1000
                                        },
                                        {
                                            breakpoint: 1020,
                                            cols: 1,
                                            rows: 1,
                                            gap: 0,
                                            loop: false,
                                            autoplay: 1000
                                        },
                                        {
                                            breakpoint: 1280,
                                            cols: 1,
                                            rows: 1,
                                            gap: 0,
                                            loop: false,
                                            autoplay: 1000
                                        },
                                    ]}
                                >
                                    {rooms?.map((room, index) => {
                                        return (
                                            <Carousel.Item key={index} >

                                                {/* <div className={`cursor-pointer text-center pb-5 md:py-5 lg:py-10 md:rounded-md ${selectedRoom?.room_id === room?.room_id ? `${`md:shadow-xl md:bg-slate-200 lg:shadow-xl lg:bg-slate-100`}` : ``}`} */}
                                                {/* <div className={`cursor-pointer text-center pb-5 md:py-5 lg:py-10 md:rounded-md `}
                                                // onClick={() => {
                                                //     (showRoom.index != index) ? setShowRoom({ "visible": 1, "index": index }) : setShowRoom({ "visible": 0, "index": undefined });
                                                //     setSelectedRoom(room);
                                                // }}
                                                >
                                                    {Object.keys(room).includes('room_images') ? <img className='rounded-md md:w-10/12 md:m-auto lg:w-10/12' src={room?.room_images[0].image_link}></img> : <img className='rounded-md md:w-10/12 md:m-auto lg:w-10/12' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" />}

                                                    <p className="mt-5 text-xl font-semibold">{room?.room_name}</p>

                                                    {room?.unconditional_rates?.map((resource, index) => {
                                                        return <p key={index} className="text-lg text-gray-500 font-medium">{resource?.baserate_currency + " " + resource?.baserate_amount}</p>
                                                    })}

                                                </div> 
                                                */}

                                                <div className="relative w-full overflow-hidden" style={{ height: '35rem' }} >
                                                    <img src={Object.keys(room).includes('room_images') ? room?.room_images[0].image_link : "https://themewagon.github.io/sogo/images/slider-3.jpg"} className="w-full h-full object-cover" />

                                                    <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                                                    <div className="absolute bottom-0 left-0 right-0 text-center p-4">
                                                        <p className="text-white text-3xl pt-10 font-family-marcellus">{room?.room_name}</p>
                                                        <div className="px-5 py-2 text-white  lg:flex lg:justify-center lg:py-5">
                                                            {/* <p className='my-auto pb-2'><MdSquareFoot /> <span>{room.carpet_area} SQ.FT</span></p> */}
                                                            <p className='my-auto pb-2'><i className='inline-block'><MdSquareFoot /> </i> &nbsp; <span className='font-family-jost-regular pr-10'>{room.carpet_area} SQ.FT</span></p>
                                                            <p className='my-auto pb-2'><i className='inline-block'><HiUserGroup /></i>  &nbsp; <span className='font-family-jost-regular pr-10'> {room.room_capacity} Adults</span></p>
                                                            {/* <p className='my-auto pb-2'>{room?.views?.map((item, index) => {
                                                                return (
                                                                    <span key={index} >{index === 0 ? <i className='inline-block'><MdLandscape /></i> : ','} &nbsp; <span>{item?.view} </span> </span>
                                                                );
                                                            })}</p> */}

                                                            {Object.keys(room).includes("beds") ?
                                                                <p className='my-auto pb-2'><i className='inline-block'><BiSolidBed /></i> &nbsp; <span className='font-family-jost-regular'> {room.beds.length} {room.beds.length > 1 ? "Beds" : "Bed"}</span>
                                                                    {/* <span> ({room?.beds?.map((item, index) => {
                                                                    return (
                                                                        <span key={index}>{index === 0 ? '' : ' , '} {item?.bed_width} * {item?.bed_length}</span>

                                                                    );
                                                                })}) cm</span> */}
                                                                </p> : <></>}
                                                        </div>
                                                    </div>
                                                    <div className="absolute top-0 left-0 p-4">
                                                        {room?.unconditional_rates?.map((resource, index) => {
                                                            return <p key={index} className="text-sm px-3 py-2 text-black  font-normal border bg-white font-family-jost-regular ">{resource?.baserate_currency + " " + resource?.baserate_amount}/NIGHT</p>
                                                        })}
                                                    </div>
                                                </div>

                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Rooms