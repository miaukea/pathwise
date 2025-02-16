import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FrontPage = () => {
const [isNavOpen, setIsNavOpen] = useState(false);
const [isFocused, setIsFocused] = useState(false);

return (
    <div 
    className="flex flex-col h-screen w-full bg-gray-100 relative bg-cover bg-center"
    style={{ backgroundImage: "url('./images/background.png')" }}
    >
    <Navbar setIsNavOpen={setIsNavOpen} />
    
      {/* Main Content */}
    <div className="flex items-center justify-center flex-grow">
        <motion.input
        type="text"
        placeholder="Search..."
        className="px-6 py-3 w-3/5 sm:w-2/5 rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white bg-opacity-75"
        style={{ scale: isFocused ? 1.05 : 1 }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        />
    </div>

    <Footer />
    </div>
);
};

export default FrontPage;
