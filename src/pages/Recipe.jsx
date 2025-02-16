import React, { useState } from 'react';
import { Send, ChefHat } from 'lucide-react';

const ChatBubble = ({ message, type }) => {
    const isReceiver = type === 'receiver';

    return (
        <div className={`flex ${isReceiver ? 'justify-start' : 'justify-end'} mb-4`}>
            {isReceiver && (
                <div className="w-8 h-8 rounded-full bg-yellow-300 border-2 border-black flex items-center justify-center mr-2">
                    <ChefHat className="w-5 h-5" />
                </div>
            )}
            <div className={`max-w-[80%] ${isReceiver ? 'mr-auto' : 'ml-auto'}`}>
                <div
                    className={`p-3 rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000] 
            ${isReceiver ? 'bg-white rounded-tl-none' : 'bg-yellow-300 rounded-tr-none'}`}
                >
                    <p className="text-sm">{message}</p>
                </div>
            </div>
        </div>
    );
};

const RecipePage = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your AI chef assistant. What would you like to cook today?", type: 'receiver' },
        { id: 2, text: "I have some chicken and vegetables in my fridge", type: 'sender' },
        { id: 3, text: "Great! I can suggest several healthy recipes with those ingredients. Would you prefer a stir-fry, baked dish, or something else?", type: 'receiver' },
        { id: 4, text: "A stir-fry sounds perfect!", type: 'sender' },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, { id: messages.length + 1, text: newMessage, type: 'sender' }]);
            setNewMessage('');

            // Simulate AI response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: prev.length + 1,
                    text: "I'll help you make a delicious stir-fry! Let me guide you through the recipe step by step.",
                    type: 'receiver'
                }]);
            }, 1000);
        }
    };

    return (
        <div className="w-full mx-auto flex flex-col bg-gray-50">


            {/* Chat Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <ChatBubble
                        key={message.id}
                        message={message.text}
                        type={message.type}
                    />
                ))}
            </div>

            {/* Input Form */}
            <form
                onSubmit={handleSend}
                className="p-4 border-t-2 border-black bg-white"
            >
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 p-2 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-white border-2 border-black shadow-[3px_3px_0px_#000] hover:bg-yellow-300 transition-colors rounded-lg"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RecipePage;