import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image1 from '../../assets/images/testPerson1.jpg';
import Image2 from '../../assets/images/testPerson2.jpg';
import Image3 from '../../assets/images/testPerson3.jpg';
import Image4 from '../../assets/images/testPerson4.jpg';

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        title: "CEO, Home Comforts Furniture",
        text: "This service is amazing! It has really helped our business grow and achieve success. The quality of furniture and customer service is unmatched!",
        image: Image1
    },
    {
        id: 2,
        name: "Jane Smith",
        title: "Marketing Manager, Elegant Spaces",
        text: "The support and service from this company have been exceptional. Highly recommend! Their furniture collections are stunning and make our homes feel like a dream.",
        image: Image2
    },
    {
        id: 3,
        name: "Sam Wilson",
        title: "Freelance Interior Designer",
        text: "I was able to achieve my goals faster thanks to this service. The furniture pieces are not only stylish but also functional. Will definitely use again for future projects.",
        image: Image3
    },
    {
        id: 4,
        name: "Emily Johnson",
        title: "Sales Manager, ABC Corp.",
        text: "Working with this company has been a game-changer for our business. The furniture quality is top-notch and the customer service is prompt and friendly. Thank you!",
        image: Image4
    }
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialLength = testimonials.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialLength);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [testimonialLength]);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialLength);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialLength) % testimonialLength);
    };

    return (
        <div className="bg-[#EFF2F1] min-h-[80vh] flex items-center justify-center px-4">
            <div className="container mx-auto py-8 px-[10%] relative">
                <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-0">
                    <button
                        className="bg-gray-200 p-2 rounded-full hover:bg-[#3B5D50] hover:text-white transition-transform transform hover:scale-110"
                        onClick={prevTestimonial}
                    >
                        <FaChevronLeft className="text-xl" />
                    </button>
                    <button
                        className="bg-gray-200 p-2 rounded-full hover:bg-[#3B5D50] hover:text-white transition-transform transform hover:scale-110"
                        onClick={nextTestimonial}
                    >
                        <FaChevronRight className="text-xl" />
                    </button>
                </div>

                <div className="text-center">
                    
                    <p className="text-gray-600 italic mb-8 px-4 sm:px-0 sm:text-4xl">"{testimonials[currentIndex].text}"</p>
                    <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-[#3B5D50] sm:w-40 sm:h-40 object-fill"/>
                    <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-500">{testimonials[currentIndex].title}</p>
                </div>

                <div className="flex justify-center space-x-2 mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-[#3B5D50]' : 'bg-gray-300'} transition-all`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TestimonialSlider;
