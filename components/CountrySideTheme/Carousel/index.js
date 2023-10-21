import React from 'react';

const CarouselItem = ({ image, description, price }) => {
    return (
        <div className="relative h-96 w-full overflow-hidden">
            <img src={image} alt={description} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
                <p className="text-white">{description}</p>
            </div>
            <div className="absolute top-0 left-0 p-4">
                <p className="text-white text-xl font-bold">{price}</p>
            </div>
        </div>
    );
};

// const Carousel = ({ items }) => {
//     return (
//         <div className="carousel">
//             {items.map((item, index) => (
//                 <CarouselItem
//                     key={index}
//                     image={item.image}
//                     description={item.description}
//                     price={item.price}
//                 />
//             ))}
//         </div>
//     );
// };

export default CarouselItem;
