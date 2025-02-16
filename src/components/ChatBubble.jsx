import React from "react";
import { ChefHat } from "lucide-react";
import ReactMarkdown from 'react-markdown';

const ChatBubble = ({ message, type }) => {
    const isReceiver = type === "receiver";

    return (
        <div className={`flex ${isReceiver ? "justify-start" : "justify-end"} mb-4`}>
            {isReceiver && (
                <div className="w-8 h-8 rounded-full bg-yellow-300 border-2 border-black flex items-center justify-center mr-2">
                    <ChefHat className="w-5 h-5" />
                </div>
            )}
            <div className={`max-w-[75%] ${isReceiver ? "mr-auto" : "ml-auto"}`}>
                <div
                    className={`p-3 rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000]
                        ${isReceiver ? "bg-white rounded-tl-none" : "bg-yellow-300 rounded-tr-none"}`}
                >
                    {isReceiver ? (
                        <ReactMarkdown
                            className="prose prose-sm max-w-none"
                            components={{
                                // Headers with preserved styling
                                h1: ({ node, ...props }) => (
                                    <h1 className="text-lg font-bold mt-2 mb-1" {...props} />
                                ),
                                h2: ({ node, ...props }) => (
                                    <h2 className="text-base font-bold mt-2 mb-1" {...props} />
                                ),
                                h3: ({ node, ...props }) => (
                                    <h3 className="text-sm font-bold mt-2 mb-1" {...props} />
                                ),

                                // Lists with bubble-appropriate spacing
                                ul: ({ node, ...props }) => (
                                    <ul className="list-disc pl-4 my-1 text-sm" {...props} />
                                ),
                                ol: ({ node, ...props }) => (
                                    <ol className="list-decimal pl-4 my-1 text-sm" {...props} />
                                ),

                                // Inline elements
                                strong: ({ node, ...props }) => (
                                    <strong className="font-bold" {...props} />
                                ),
                                em: ({ node, ...props }) => (
                                    <em className="italic" {...props} />
                                ),

                                // Code blocks with bubble-friendly styling
                                code: ({ node, inline, ...props }) =>
                                    inline ? (
                                        <code className="bg-gray-100 px-1 rounded text-sm font-mono" {...props} />
                                    ) : (
                                        <code className="block bg-gray-100 p-2 rounded my-1 text-sm font-mono overflow-x-auto" {...props} />
                                    ),

                                // Base paragraph with preserved text size
                                p: ({ node, ...props }) => (
                                    <p className="text-sm my-1" {...props} />
                                ),

                                // Links with subtle styling
                                a: ({ node, ...props }) => (
                                    <a className="text-blue-600 hover:underline text-sm" {...props} />
                                ),

                                // Blockquotes with bubble-appropriate styling
                                blockquote: ({ node, ...props }) => (
                                    <blockquote className="border-l-2 border-gray-300 pl-2 my-1 italic text-sm" {...props} />
                                ),

                                // Tables with compact styling
                                table: ({ node, ...props }) => (
                                    <div className="overflow-x-auto my-1">
                                        <table className="text-sm border-collapse" {...props} />
                                    </div>
                                ),
                                th: ({ node, ...props }) => (
                                    <th className="border border-gray-300 px-2 py-1 font-bold bg-gray-50" {...props} />
                                ),
                                td: ({ node, ...props }) => (
                                    <td className="border border-gray-300 px-2 py-1" {...props} />
                                )
                            }}
                        >
                            {message}
                        </ReactMarkdown>
                    ) : (
                        <p className="text-sm">{message}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatBubble;