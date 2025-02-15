import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { title: 'About', href: '#' },
        { title: 'Explore', href: '#' }
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 w-full px-6 py-4 bg-white border-b-4 border-black shadow-[0px_4px_0px_#000]"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold text-black"
                >
                    <span className="bg-yellow-300 px-2 py-1 rounded-lg">Snap</span> Chef
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-4">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.title}
                            href={item.href}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 border-2 border-black bg-white shadow-[2px_2px_0px_#000] 
                                     hover:bg-black hover:text-white transition-all cursor-pointer rounded-lg 
                                     font-medium"
                        >
                            {item.title}
                        </motion.a>
                    ))}

                    {/* Profile Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_#000] 
                                 hover:bg-black hover:text-white transition-all cursor-pointer flex items-center justify-center"
                    >
                        <User className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden p-2 border-2 border-black rounded-lg shadow-[2px_2px_0px_#000]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial="closed"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, height: "auto" },
                    closed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.2 }}
                className="md:hidden overflow-hidden"
            >
                <div className="px-4 py-2 space-y-2">
                    {navItems.map((item) => (
                        <motion.a
                            key={item.title}
                            href={item.href}
                            whileTap={{ scale: 0.95 }}
                            className="block px-4 py-2 border-2 border-black bg-white shadow-[2px_2px_0px_#000] 
                                     hover:bg-black hover:text-white transition-all cursor-pointer rounded-lg 
                                     font-medium text-center"
                        >
                            {item.title}
                        </motion.a>
                    ))}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-4 py-2 border-2 border-black bg-white shadow-[2px_2px_0px_#000] 
                                 hover:bg-black hover:text-white transition-all cursor-pointer rounded-lg 
                                 font-medium text-center flex items-center justify-center space-x-2"
                    >
                        <User className="w-5 h-5" />
                        <span>Profile</span>
                    </motion.button>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Navbar;