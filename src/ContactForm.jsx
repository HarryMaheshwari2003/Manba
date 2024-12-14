import React from 'react'
import { motion } from "framer-motion";

function ContactForm() {
    return (
        <div>
            <div className='main-div-contact w-full poppins-light'>
                <img src="src/assets/Contact-Us-Page.png" className='h-auto w-full object-cover' alt="Contact Us" />
            </div>

            <div className='form-div w-full px-6 py-16 md:p-16'>
                <div className='w-full p-6 md:p-10 bg-white shadow-lg rounded-xl'>
                    <h1 className='font-semibold tracking-tighter text-3xl md:text-5xl text-[#00adef]'>Get In Touch</h1>
                    <p className='mt-4 text-base md:text-lg text-black'>Please contact us or send us an email.</p>

                    <form className='mt-10 space-y-8 font-normal text-base md:text-xl'>
                        {/* Name and Email Inputs */}
                        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8'>
                            <input
                                type='text'
                                placeholder='Your Name'
                                className='flex-1 border-b border-[#00adef] bg-transparent outline-none focus:border-[#007bbd] text-base md:text-xl p-1'
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                className='flex-1 border-b border-[#00adef] bg-transparent outline-none focus:border-[#007bbd] text-base md:text-xl p-1'
                            />
                        </div>

                        {/* Number and City Inputs */}
                        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 pt-3'>
                            <input
                                type='text'
                                placeholder='Number'
                                className='flex-1 border-b border-[#00adef] bg-transparent outline-none focus:border-[#007bbd] text-base md:text-xl p-1'
                            />
                            <input
                                type='text'
                                placeholder='City'
                                className='flex-1 border-b border-[#00adef] bg-transparent outline-none focus:border-[#007bbd] text-base md:text-xl p-1'
                            />
                        </div>

                        {/* Select Your Loan */}
                        <div className='pt-3'>
                            <select
                                className='w-full md:w-[49%] border-b border-[#00adef] bg-transparent outline-none focus:border-[#007bbd] text-base md:text-xl p-1'
                            >
                                <option value='' disabled selected>
                                    Select Your Loan
                                </option>
                                <option value='home'>Home Loan</option>
                                <option value='personal'>Personal Loan</option>
                                <option value='gold'>Gold Loan</option>
                                <option value='business'>Business Loan</option>
                            </select>
                        </div>

                        {/* Your Message */}
                        <div className='pt-8'>
                            <textarea
                                placeholder='Your Message'
                                rows='4'
                                className='w-full border-b border-[#00adef] bg-transparent outline-none focus:border-[#007bbd] text-base md:text-xl p-1'
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className='text-center'>
                            <button
                                type='submit'
                                className='px-10 py-3 bg-transparent text-[#00adef] font-semibold text-lg md:text-xl rounded-lg shadow-md border-[1.5px] border-[#00adef] hover:bg-[#00adef] hover:text-white transition duration-300'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className='mt-16 w-full p-6 md:p-16 bg-white shadow-lg rounded-xl poppins-light'>
                    <h1 className='font-semibold tracking-tighter text-3xl md:text-6xl text-[#00adef]'>We are here to help you</h1>
                    <p className='mt-4 ml-2 font-normal md:text-[1.4rem] leading-10 text-black'>Various versions have evolved over the years sometimes by accident sometimes on purpose injected humour and the like.</p>

                    {/* Three Boxes Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center mt-10 space-y-6 md:space-y-0 md:space-x-6">
                        {/* Branch Office */}
                        <motion.div
                            className="flex flex-col items-center p-14 bg-white rounded-lg shadow-md w-full md:w-1/3"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="src/assets/lg1.jpg"
                                alt="Branch"
                                className="h-12 w-12 mb-4"
                            />
                            <h2 className="font-semibold text-lg md:text-xl text-black">
                                BRANCH OFFICE
                            </h2>
                            <p className="text-center text-sm md:text-base font-normal text-black mt-6">
                                312, super diamond market, surat
                            </p>
                        </motion.div>

                        {/* Call Us */}
                        <motion.div
                            className="flex flex-col items-center p-14 bg-white rounded-lg shadow-md w-full md:w-1/3"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="src/assets/lg2.jpg"
                                alt="Branch"
                                className="h-12 w-12 mb-4"
                            />
                            <h2 className="font-semibold text-lg md:text-xl text-black">CALL US AT</h2>
                            <p className="text-center text-sm md:text-base font-normal text-black mt-6">
                                +91 22 6212 5000
                            </p>
                        </motion.div>

                        {/* Email Address */}
                        <motion.div
                            className="flex flex-col items-center p-14 bg-white rounded-lg shadow-md w-full md:w-1/3"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src="src/assets/lg3.jpg"
                                alt="Branch"
                                className="h-12 w-12 mb-4"
                            />
                            <h2 className="font-semibold text-lg md:text-xl text-black">EMAIL ADDRESS</h2>
                            <p className="text-center text-sm md:text-base font-normal text-black mt-6">
                                Manbafinaserve@gmail.com
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
