import React from 'react';

function HomeAbout() {
    return (
        <div className="relative imgDiv py-16 px-6">
            <div className="w-full text-center">
                <h1 className="text-white mt-10 text-4xl lg:text-5xl font-bold">Why Choose Us</h1>
            </div>

            <div className="wrapper lg:flex gap-10 mt-10">
                {/* Left Section - Image */}
                <div className="h-[80vh] w-full lg:w-[43vw]">
                    <img
                        src="src/assets/HomeAboutimg.png"
                        className="h-full w-full object-cover rounded-lg"
                        alt="About Image"
                    />
                </div>

                {/* Right Section - Content */}
                <div className="h-auto lg:w-[45vw] sm:w-full mt-8 lg:mt-0">
                    <p className="text-white text-base lg:text-md leading-relaxed">
                        At Manba Finanserve, we are more than a loan services provider — we are your gateway to financial confidence. When you choose us, you're choosing a dedicated team of professionals who are passionate about helping you achieve your financial goals. Your success is our success, and we're excited to embark on this journey with you. Experience the Manba Finanserve difference – where your financial well-being is our top priority.
                    </p>

                    <div className="three_boxes mt-10 space-y-8">
                        {/* Box 1 */}
                        <div className="flex items-start gap-5">
                            <img
                                src="src/assets/aboutimg1.png"
                                className="h-24 w-24 object-contain"
                                alt="Trusted Expertise"
                            />
                            <div className="text-white">
                                <h2 className="font-semibold text-xl lg:text-2xl">Trusted Expertise</h2>
                                <p className="mt-2 text-sm lg:text-base leading-6">
                                    With decades of experience in the financial industry, we have earned the trust of countless individuals and businesses.
                                </p>
                            </div>
                        </div>
                        {/* Box 2 */}
                        <div className="flex items-start pt-3 gap-5">
                            <img
                                src="src/assets/aboutimg2.png"
                                className="h-24 w-24 object-contain mt-2"
                                alt="Comprehensive Loan Options"
                            />
                            <div className="text-white">
                                <h2 className="font-semibold text-xl lg:text-2xl">Comprehensive Loan Options</h2>
                                <p className="mt-2 text-sm lg:text-base leading-6">
                                    We offer a diverse range of loan products to meet every need. Whether you're looking for a personal loan, gold loan, home loan, or any other type of loan, we have a solution designed just for you.
                                </p>
                            </div>
                        </div>
                        {/* Box 3 */}
                        <div className="flex items-start gap-5">
                            <img
                                src="src/assets/aboutimg3.png"
                                className="h-24 w-24 object-contain mt-3"
                                alt="Competitive Rates"
                            />
                            <div className="text-white">
                                <h2 className="font-semibold text-xl lg:text-2xl">Competitive Rates</h2>
                                <p className="mt-2 text-sm lg:text-base leading-6">
                                    We believe that access to funds should be affordable. That's why we offer some of the most competitive interest rates in the market. We work tirelessly to ensure that borrowing with us is cost-effective.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout;
