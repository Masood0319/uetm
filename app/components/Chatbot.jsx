// app/components/Chatbot.jsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import { faqData } from "@/app/data/faqData";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I’m your UET Mardan assistant. Ask me about admissions, departments, scholarships, or contact info." },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const findAnswer = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();
    for (const faq of faqData) {
      if (faq.question.some((q) => lowerMsg.includes(q))) {
        return faq.answer;
      }
    }
    return "🤔 Sorry, I don’t have an answer for that. Please visit the official website: https://uetmardan.edu.pk";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    setTimeout(() => {
      const reply = findAnswer(newMessage.text);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {isOpen ? <FiX size={24} /> : <img src="chatbot.png" className="h-10" alt="" />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-6 w-80 bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden"
          >
            <div className="bg-blue-600 text-white p-3 font-semibold text-lg">
              🎓 UET Mardan Chatbot
            </div>

            <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end ml-auto"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="flex p-2 border-t bg-white">
              <input
                className="flex-1 text-black border rounded-l-lg p-2 outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-4 rounded-r-lg flex items-center justify-center"
              >
                <FiSend size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
