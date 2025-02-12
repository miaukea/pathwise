import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Itinerary from "./pages/Itinerary";

const App = () => {
return (
    <Router>
    <div className="app-container flex flex-col min-h-screen">
        <Navbar />
        <motion.header 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-800 text-white shadow-md"
        >
        <a href="/" className="text-lg font-bold hover:text-gray-300 transition">Home</a>
        <motion.input 
            type="text" 
            placeholder="Search..." 
            className="px-4 py-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full sm:w-1/3"
            whileFocus={{ scale: 1.05 }}
        />
        <div className="relative group mt-2 sm:mt-0">
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">Profile ▼</button>
            <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
            >
            <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">View Profile</a>
            <a href="/logout" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
            </motion.div>
        </div>
        </motion.header>
        <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto p-4 sm:p-6 bg-gray-100 rounded-lg shadow"
        >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
        </motion.main>
        <Footer />
    </div>
    </Router>
);
};

export default App;

