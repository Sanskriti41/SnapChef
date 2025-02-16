import React, { useState, useRef } from "react";
import { Send, ChefHat } from "lucide-react";
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

import ChatBubble from "../components/ChatBubble";

const ChatBox = ({ messages, loading }) => {
    return (
        <div
            className="w-full overflow-y-auto p-4 space-y-4 border-2 border-black bg-gray-50 rounded-lg"
            style={{
                height: "calc(100vh - 305px)", // Adjusted height (100vh - header - footer)
                scrollbarWidth: "thin",
            }}
        >
            {messages.map((message) => (
                <ChatBubble key={message.id} message={message.text} type={message.type} />
            ))}
            {loading && <ChatBubble message="Cooking up a response..." type="receiver" />}
        </div>
    );
};

const RecipePage = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm your AI chef assistant. What would you like to cook today?",
            type: "receiver",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [loading, setLoading] = useState(false);

    const MODEL_NAME = "gemini-1.5-flash";
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    async function getGeminiResponse(input) {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        const generationConfig = {
            temperature: 1,
            topK: 64,
            topP: 0.95,
            maxOutputTokens: 8192,
        };

        const safetySettings = [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
        ];

        const parts = [
            { text: "Answer this question only if it is related to food or recipes. If it is a dish, provide its recipe with detailed steps: " + input },
        ];

        const result = await model.generateContent({
            contents: [{ role: "user", parts }],
            generationConfig,
            safetySettings,
        });

        return result.response.text();
    }

    const handleSend = async (e) => {
        e?.preventDefault();

        if (inputValue.trim()) {
            const userMessage = { id: messages.length + 1, text: inputValue, type: "sender" };
            setMessages((prev) => [...prev, userMessage]);
            setInputValue("");
            setLoading(true);

            try {
                const response = await getGeminiResponse(inputValue);
                const aiMessage = { id: messages.length + 2, text: response, type: "receiver" };
                setMessages((prev) => [...prev, aiMessage]);
            } catch (error) {
                console.error("Error getting response:", error);
                const errorMessage = {
                    id: messages.length + 2,
                    text: "I apologize, but I'm having trouble processing your request. Could you try again?",
                    type: "receiver",
                };
                setMessages((prev) => [...prev, errorMessage]);
            }

            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="w-full flex flex-col items-center p-4 bg-gray-100">
            {/* Chat Box */}
            <ChatBox messages={messages} loading={loading} />

            {/* Input Box */}
            <form onSubmit={handleSend} className="w-full max-w-2xl p-4 border-2 border-black bg-white rounded-lg mt-2">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about any recipe..."
                        className="flex-1 p-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="px-4 py-2 bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-yellow-300 transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RecipePage;
