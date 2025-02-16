import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Star } from "lucide-react";

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    };

    const sections = [
        {
            icon: Users,
            title: "Our Mission",
            desc: "We aim to revolutionize cooking by providing AI-powered recipe recommendations tailored to your ingredients, preferences, and dietary needs.",
        },
        {
            icon: BookOpen,
            title: "How It Works",
            desc: "Snap a picture of your ingredients or enter them manually, and our AI will generate the perfect recipe for you in seconds.",
        },
        {
            icon: Star,
            title: "Why Choose Us?",
            desc: "With cutting-edge AI, real-time updates, and an ever-growing recipe database, we make cooking effortless and exciting for everyone.",
        },
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 py-16 px-4 sm:px-8"
        >
            {/* Header Section */}
            <motion.div
                variants={itemVariants}
                className="text-center max-w-2xl mb-12"
            >
                <motion.h1
                    className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4"
                    whileHover={{ scale: 1.02 }}
                >
                    About <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">Snap Chef</span>
                </motion.h1>
                <motion.p className="text-lg sm:text-xl text-gray-600">
                    Snap Chef is a next-gen <span className="font-semibold text-yellow-500">AI-powered</span> recipe platform that helps you cook smarter and faster.
                </motion.p>
            </motion.div>

            {/* Sections */}
            <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4 sm:px-8"
            >
                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="p-6 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ y: -10, scale: 1.02 }}
                    >
                        <div className="flex items-center justify-center w-12 h-12 mb-4 bg-yellow-50 rounded-full">
                            <section.icon className="w-6 h-6 text-yellow-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{section.title}</h3>
                        <p className="text-gray-600">{section.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default About;