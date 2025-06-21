// ChatWindow.tsx
import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback } from "../avatar";
import { Button } from "../button";
import { Input } from "../input";
import { FaRegUser } from "react-icons/fa";
import { RiGeminiLine } from "react-icons/ri";

function ChatWindow() {
    const [messages, setMessages] = useState([
        { sender: "ai", text: "Hi! How can I help you today?" },
        { sender: "user", text: "What's the weather like?" },
        { sender: "ai", text: "I'm sorry, I don't have access to real-time weather information." },
        { sender: "user", text: "Can you tell me a joke?" },
        { sender: "ai", text: "Why don't scientists trust atoms? Because they make up everything!" },
        { sender: "user", text: "Haha, good one!" },
        { sender: "ai", text: "Glad you liked it! Is there anything else you'd like to chat about?" },
    ]);

    const [input, setInput] = useState("");
    const chatEndRef = useRef(null);

    const handleSend = () => {
        if (input.trim() === "") return;
        setMessages(prev => [...prev, { sender: "user", text: input }]);
        setInput("");
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex flex-col w-full max-w-md h-[80vh] border border-gray-300 rounded-lg bg-white shadow-md">
            <main className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, index) =>
                    msg.sender === "ai" ? (
                        <MessageLeft key={index} text={msg.text} />
                    ) : (
                        <MessageRight key={index} text={msg.text} />
                    )
                )}
                <div ref={chatEndRef} />
            </main>
            <footer className="flex items-center gap-2 p-3 border-t border-gray-200 bg-gray-50">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1"
                />
                <Button onClick={handleSend} size="sm">Send</Button>
            </footer>
        </div>
    );
}

const MessageLeft = ({ text }) => (
    <div className="flex items-start space-x-2">
        <Avatar>
            <AvatarFallback>
                <RiGeminiLine />
            </AvatarFallback>
        </Avatar>
        <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-[70%]">
            <p className="text-sm">{text}</p>
        </div>
    </div>
);

const MessageRight = ({ text }) => (
    <div className="flex items-start justify-end space-x-2">
        <div className="bg-blue-600 text-white p-3 rounded-lg max-w-[70%]">
            <p className="text-sm">{text}</p>
        </div>
        <Avatar>
            <AvatarFallback>
                <FaRegUser />
            </AvatarFallback>
        </Avatar>
    </div>
);

export default function ChatPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {isOpen && (
                <div className="fixed bottom-16 right-4 left-4 sm:left-auto sm:right-4 z-50">
                    <ChatWindow />
                </div>
            )}
            <Button
                onClick={() => setIsOpen(prev => !prev)}
                className="fixed right-4 bottom-4 sm:right-4"
            >
                Chat with AI
            </Button>
        </div>
    );
}
