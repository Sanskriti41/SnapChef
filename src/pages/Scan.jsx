import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, BookmarkPlus } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const Scan = () => {
    const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

    const [isFileSelected, setIsFileSelected] = useState(false);
    const [image, setImage] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        setIsFileSelected(event.target.files.length > 0);
        setImage(event.target.files[0]);
    };

    const handleReset = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = null;
            setIsFileSelected(false);
        }
    };

    const handleSubmit = async () => {
        if (!image) return;

        setLoading(true);
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setResponse(result.message);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error:', error);
            setResponse("Sorry, there was an error processing your image. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full min-h-screen bg-gray-100 p-4">
            <AnimatePresence>
                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="w-full max-w-4xl mx-auto"
                    >
                        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_#000] rounded-lg p-6 relative">
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            {/* <button
                                className="absolute top-4 right-16 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <BookmarkPlus className="w-6 h-6" />
                            </button> */}
                            <div className="prose prose-lg max-w-none mt-8">
                                <ReactMarkdown>
                                    {response}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center space-y-6"
                    >
                        <div className="w-full bg-white border-4 border-black shadow-[6px_6px_0px_#000] rounded-lg p-8">
                            <div className="flex flex-col items-center space-y-6">
                                <Camera className="w-16 h-16 text-gray-400" />
                                <h2 className="text-2xl font-bold">
                                    <span className="bg-yellow-300 px-2 py-1 rounded-lg">
                                        Scan Your Ingredients
                                    </span>
                                </h2>
                                <p className="text-gray-600 text-center">
                                    Take a photo of your ingredients and I'll suggest some recipes!
                                </p>

                                <div className="flex items-center gap-2 w-full">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileChange}
                                        accept="image/*"
                                        className="flex-1 file:mr-4 file:py-2 file:px-4 file:border-2 file:border-black 
                                                 file:text-sm file:font-semibold file:bg-white hover:file:bg-yellow-300
                                                 file:cursor-pointer cursor-pointer rounded-lg
                                                 file:transition-colors"
                                    />
                                    {isFileSelected && (
                                        <button
                                            onClick={handleReset}
                                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>

                                <motion.button
                                    onClick={handleSubmit}
                                    disabled={!isFileSelected || loading}
                                    className="w-full px-6 py-3 text-lg font-bold bg-white border-2 border-black 
                                             shadow-[4px_4px_0px_#000] hover:bg-black hover:text-white 
                                             transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-t-2 border-b-2 border-current rounded-full animate-spin"></div>
                                            Processing Image...
                                        </div>
                                    ) : (
                                        "Get Recipes"
                                    )}
                                </motion.button>
                            </div>
                        </div>

                        {loading && (
                            <p className="text-sm text-gray-500 text-center">
                                Note: The backend is hosted on Render which might take 50 seconds or more to cold start if the server is inactive.
                            </p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Scan;