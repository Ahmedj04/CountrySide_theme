import Header from '@/components/CountrySideTheme/Header';
import React, { useState, useEffect } from 'react'
import axios, { all } from 'axios';

import { AiOutlineClose } from "react-icons/ai";
import Home from '@/components/CountrySideTheme/Home';
import About from '@/components/CountrySideTheme/About';
import Photos from '@/components/CountrySideTheme/Photos';
import Rooms from '@/components/CountrySideTheme/Rooms';
import Services from '@/components/CountrySideTheme/Services';
import CarousalComponent from '@/components/CountrySideTheme/CarousalComponent';
import Footer from '@/components/CountrySideTheme/Footer';



function Hotel() {
    const [allHotelDetails, setHotelDetails] = useState([]);
    const [rooms, setRooms] = useState([]);

    const [showRoom, setShowRoom] = useState({
        'visible': 0,
        'index': undefined,
    });

    // loaders
    const [hotelDetailLoader, setHotelDetailLoader] = useState(0);
    const [roomDetailLoader, setRoomDetailLoader] = useState(0);

    const [menu, setMenu] = useState(0)


    useEffect(() => {
        getHotelDetails();
        getRoomDetails();

    }, []);

    function getHotelDetails() {
        // let url = "/api/jammu-and-kashmir/srinagar/hotels/t2k0032";
        let url = "/api2/jammu-and-kashmir/srinagar/home-stays/t2k0020";
        axios.get(url)
            .then((response) => {
                setHotelDetails(response.data)
                console.log("hotel details loaded succesfully")
                setHotelDetailLoader(1)

            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            })
    }

    function getRoomDetails() {
        // let url = "api/all_rooms_details/t2k0032";
        let url = "api2/all_rooms_details/t2k0020";
        axios.get(url)
            .then((response) => {
                setRooms(response.data.rooms);
                console.log("room details loaded successfull")
                setRoomDetailLoader(1);
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            })
    }

    return (
        <main>

            <Home
                allHotelDetails={allHotelDetails}
                hotelDetailLoader={hotelDetailLoader}
                setMenu={(e) => setMenu(e)}

            />

            <About
                allHotelDetails={allHotelDetails}
                hotelDetailLoader={hotelDetailLoader}

            />

            <Photos
                allHotelDetails={allHotelDetails}
                hotelDetailLoader={hotelDetailLoader}
            />

            <Rooms
                allHotelDetails={allHotelDetails}
                rooms={rooms}
                roomDetailLoader={roomDetailLoader}
                showRoom={showRoom}
                setShowRoom={(e) => setShowRoom(e)}
            />

            <Services
                allHotelDetails={allHotelDetails}
                hotelDetailLoader={hotelDetailLoader}
            />

            <CarousalComponent
                id="reviews"
                type='review'
                data={allHotelDetails?.Reviews}
                title="What They Say About Us"
                subtitle="FEEDBACK FROM OUR DEAR CLIENTS"
                hotelDetailLoader={hotelDetailLoader}
            />

            <Footer
                allHotelDetails={allHotelDetails}
            />




            {/* menu for small screen */}
            <div className={`transition-transform duration-500 ease-in-out transform ${menu === 1 ? 'translate-x-0' : '-translate-x-full'} fixed inset-0 z-50`}>
                {/* Dark background */}
                <div className={`absolute inset-0 bg-black opacity-70 transform transition-transform duration-500 ease-in-out ${menu === 1 ? 'translate-x-0' : '-translate-x-full'}`}></div>

                {/* Content */}
                <div className={`absolute inset-y-0 left-0 w-8/12 bg-custom-brown p-4 transform transition-transform duration-1000 ease-in-out ${menu === 1 ? 'translate-x-0 delay-300' : '-translate-x-full'}`}>
                    <div className='flex justify-between'>
                        <div className=' inline-block'>
                            <p className=' py-2 text-lg font-medium uppercase font-family-marcellus'>{allHotelDetails.property_name}</p>
                        </div>
                        <button onClick={() => setMenu(0)}><AiOutlineClose /></button>
                    </div>

                    <div>
                        <ul className='pt-5 font-family-jost-regular' onClick={() => setMenu(0)}>
                            <li className='pb-2'><a href='#about'>About</a></li>
                            <li className='pb-2'><a href='#rooms'>Rooms</a></li>
                            <li className='pb-2'><a href='#photos'>Gallery</a></li>
                            <li><a href='#services'>Services</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Hotel