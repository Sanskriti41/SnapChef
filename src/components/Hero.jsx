import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Camera, Sparkles, X } from 'lucide-react';
import Modal from './Modal';


const Hero = () => {
    const [selectedFeature, setSelectedFeature] = useState(null);
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const features = [
        {
            icon: ChefHat,
            title: 'Smart Recipes',
            desc: 'Get personalized recipe suggestions based on your ingredients',
            modalContent: `Our advanced recipe suggestion system analyzes your available ingredients
            and dietary preferences to create perfectly matched recipes.
            Key Features:
            - Ingredient-based matching
            - Dietary restriction handling
            - Portion size adjustment
            - Nutritional information
            - Alternative ingredient suggestions`
        },
        {
            icon: Camera,
            title: 'Image Recognition',
            desc: 'Snap a picture of your ingredients for instant recipes',
            modalContent: `Our computer vision system can identify ingredients
            from your photos with incredible accuracy.
            Capabilities:
            - Multi-ingredient detection
            - Freshness assessment
            - Quantity estimation
            - Brand recognition
            - Nutritional fact extraction`
        },
        {
            icon: Sparkles,
            title: 'AI-Powered',
            desc: 'Advanced AI ensures perfect recipe matches every time',
            modalContent: `State-of-the-art AI models power our recipe
            generation and matching system.
            Technologies:
            - Machine Learning
            - Natural Language Processing
            - Computer Vision
            - Recommendation Systems
            - Real-time optimization`
        }
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full flex flex-col items-center justify-center bg-white border-4 border-black shadow-[6px_6px_0px_#000] p-8 gap-8"
        >
            <motion.div variants={itemVariants} className="text-center">
                <motion.h1
                    className="text-5xl font-extrabold text-black mb-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <span className="bg-yellow-300 px-2 py-1 rounded-lg">AI-Powered</span> Recipe Generator
                </motion.h1>
                <motion.p className="text-lg font-medium text-gray-700 max-w-xl">
                    Discover delicious recipes from any ingredient or snap a picture to get <span className="bg-yellow-300 px-2 py-1 rounded-lg">instant AI-powered</span> recipe suggestions.
                </motion.p>
            </motion.div>

            {/* GIF Containers */}
            <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl"
            >
                {['https://media0.giphy.com/media/KcVdaDUq0g9DlAjDYt/giphy.gif',
                    'https://media0.giphy.com/media/kGK4VeSwqEfbW/giphy.gif',
                    'https://media2.giphy.com/media/8q0kDnM8Z5gwQPdjEC/giphy.gif'].map((src, index) => (
                        <motion.div
                            key={index}
                            className="aspect-square bg-gray-100 border-2 border-black shadow-[4px_4px_0px_#000] rounded-lg overflow-hidden flex items-center justify-center"
                            whileHover={{ scale: 1.02 }}
                        >
                            <img src={src} alt="GIF Preview" className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
            </motion.div>

            {/* Feature Cards */}
            <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl"
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_#000] rounded-lg cursor-pointer"
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedFeature(feature)}
                    >
                        <feature.icon className="w-8 h-8 mb-2" />
                        <h3 className="font-bold mb-2">
                            <span className="bg-yellow-300 px-2 py-1 rounded-lg">{feature.title}</span>
                        </h3>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center items-center"
            >
                <Link to="/recipe">
                    <motion.button
                        className="px-6 py-3 text-lg font-bold bg-white border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-black hover:text-white transition-all cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get a Recipe
                    </motion.button>
                </Link>
                <motion.button
                    className="px-6 py-3 text-lg font-bold bg-white border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-black hover:text-white transition-all cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Scan Ingredients
                </motion.button>
            </motion.div>

            <Modal
                isOpen={!!selectedFeature}
                onClose={() => setSelectedFeature(null)}
                title={selectedFeature?.title}
                content={selectedFeature?.modalContent}
            />
        </motion.div>
    );
};

export default Hero;