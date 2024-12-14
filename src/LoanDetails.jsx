import React from 'react';
import { motion } from 'framer-motion';

function LoanDetails() {
  return (
    <div className="w-full min-h-[100vh] flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 sm:p-10">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src="src/assets/icon_1.png"
              className="w-16 sm:w-20 lg:w-24"
              alt="Icon 1"
            />
          </motion.div>
          <div className="px-4 sm:px-8 lg:px-10">
            <h3 className="text-base sm:text-lg lg:text-xl font-normal">
              Embark on your loan journey, understanding the right loan type – personal for flexibility or business for expansion. Prepare with documentation and a strong application, focusing on credit score improvement.
            </h3>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src="src/assets/icon_2.png"
              className="w-16 sm:w-20 lg:w-24"
              alt="Icon 2"
            />
          </motion.div>
          <div className="px-4 sm:px-8 lg:px-10">
            <h3 className="text-base sm:text-lg lg:text-xl font-normal">
              Unlock major investment potential with loans as a financial powerhouse, elevating your financial aspirations. Join us as we explore this gateway to seizing big opportunities and realizing your financial dreams.
            </h3>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src="src/assets/icon_3.png"
              className="w-16 sm:w-20 lg:w-24"
              alt="Icon 3"
            />
          </motion.div>
          <div className="px-4 sm:px-8 lg:px-10">
            <h3 className="text-base sm:text-lg lg:text-xl font-normal">
              Businesses often seek loans for expansion, whether opening new locations, boosting production, or diversifying products. Loans provide vital capital for growth.
            </h3>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            className="flex justify-center mb-4"
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <img
              src="src/assets/icon_4.png"
              className="w-16 sm:w-20 lg:w-24"
              alt="Icon 4"
            />
          </motion.div>
          <div className="px-4 sm:px-8 lg:px-10">
            <h3 className="text-base sm:text-lg lg:text-xl font-normal">
              In today's dynamic financial landscape, gain essential insights for managing money, investments, and securing your financial future with our expert financial content.
            </h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoanDetails;
