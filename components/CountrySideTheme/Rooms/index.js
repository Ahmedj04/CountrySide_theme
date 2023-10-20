import React from 'react'

function Rooms({ allHotelDetails, rooms, roomDetailLoader }) {
    return (
        <section className='bg-custom-dark-green'>
            <div className='pt-28'>
                <div className='px-8 lg:px-20'>
                    <div className='pb-20'>
                        <div className='lg:mx-48'>
                            <div className='text-center'>
                                <span className='text-white tracking-wider font-family-jost-regular'>Welcome To {allHotelDetails?.property_name}</span>
                            </div>
                            <h3 className='mt-5 font-family-marcellus text-center text-white text-4xl '>Select Your Cozy Room</h3>
                            <div></div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Rooms