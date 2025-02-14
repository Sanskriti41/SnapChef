"use client"
import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const SnapChefNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: 'About', href: '/about' },
        { label: 'Explore', href: '/explore' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white p-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-gray-50 rounded-full px-6 py-3 flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-xl font-medium text-gray-800">
                        SnapChef
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 
                                    transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        ))}
                        
                        {/* Profile Icon */}
                        <button
                            className="p-2 rounded-full hover:bg-gray-100 
                                transition-colors duration-200"
                        >
                            <User className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 
                            transition-colors duration-200"
                    >
                        {isMenuOpen ? <X className="w-6 h-6 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-lg">
                        <div className="flex flex-col p-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="px-4 py-3 rounded-lg text-gray-600 
                                        hover:bg-gray-100 transition-colors duration-200"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button
                                className="flex items-center space-x-2 px-4 py-3 rounded-lg
                                    text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                            >
                                <User className="w-5 h-5" />
                                <span>Profile</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default SnapChefNavbar;