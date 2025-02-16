import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Camera, Sparkles, X } from 'lucide-react';


const Modal = ({ isOpen, onClose, title, content }) => {
    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: '50%',
            x: '-50%'
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: '-50%',
            x: '-50%',
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: '50%',
            x: '-50%'
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.5
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="fixed left-1/2 top-1/2 z-50 w-full max-w-md"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">
                                    <span className="bg-yellow-300 px-2 py-1 rounded-lg">{title}</span>
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <motion.div
                                variants={textVariants}
                                initial="hidden"
                                animate="visible"
                                className="font-mono whitespace-pre-line"
                            >
                                {content}
                            </motion.div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
export default Modal