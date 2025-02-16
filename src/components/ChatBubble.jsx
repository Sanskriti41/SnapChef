import { ChefHat } from "lucide-react";
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
                    <p className="text-sm">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default ChatBubble