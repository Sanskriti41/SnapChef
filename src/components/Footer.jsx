import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    const socialLinks = [
        { icon: Github, label: 'GitHub', href: '#' },
        { icon: Twitter, label: 'Twitter', href: '#' },
        { icon: Instagram, label: 'Instagram', href: '#' },
        { icon: Mail, label: 'Email', href: '#' }
    ];

    return (
        <motion.footer
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full bg-white border-t-4 border-black p-8"
        >
            <div className=" flex justify-around">
                {/* Brand Section */}
                <motion.div variants={itemVariants} className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-4">
                        <span className="bg-yellow-300 px-2 py-1 rounded-lg">Recipe</span> AI
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Transform your ingredients into delicious recipes with the power of AI.
                        Join our community of food enthusiasts today!
                    </p>
                </motion.div>


                {/* Social Links */}
                <motion.div variants={itemVariants}>
                    <h4 className="font-bold mb-4">Connect</h4>
                    <div className="flex flex-wrap gap-4">
                        {socialLinks.map(({ icon: Icon, label, href }) => (
                            <motion.a
                                key={label}
                                href={href}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 border-2 border-black rounded-lg shadow-[2px_2px_0px_#000] 
                                         hover:bg-yellow-300 transition-colors"
                                title={label}
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                variants={itemVariants}
                className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-600"
            >
                <p className="text-sm">
                    © {new Date().getFullYear()} Recipe AI. All rights reserved.{' '}

                </p>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;