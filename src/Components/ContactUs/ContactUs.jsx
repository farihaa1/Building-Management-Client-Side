import React from 'react';


const ContactUs = () => {
    return (
        <div className='flex flex-col gap-2 text-black dark:text-white font-mulish px-4 py-12 container mx-auto'>
            <p className='text-primary font-play italic'>Contact Us</p>
            <h3 className='text-4xl lg:text-5xl font-semibold'>GET IN TOUCH</h3>
            <p className="text-gray-600 dark:text-gray-400 pb-5">We will help you find the best available apartments for sale or for rent. Let us know what you are looking for and we will make sure you get it as fast as possible!</p>
            <div className='mb-2'>
                <h3 className='text-xl lg:text-2xl'>ADDRESS</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Dhaka</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">785 15h Street, Office 478</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Berlin, De 81566</p>
            </div>
            <div>
                <h3 className='text-xl lg:text-2xl'>CONTACT DETAILS</h3>
                <p className="text-gray-600 dark:text-gray-400 italic text-sm">farihaa1403@gmail.com</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">+123 456 567</p>
                
            </div>
        </div>
    );
};

export default ContactUs;