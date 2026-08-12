import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, X, Send, ShieldCheck } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: 'Welcome to Al-Marsoos Security Services (AMS). How can we help protect your assets today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate Agent Response
    setTimeout(() => {
      let responseText = '';
      const query = textToSend.toLowerCase();

      if (query.includes('quote') || query.includes('price') || query.includes('cost')) {
        responseText = 'We would love to provide a customized quote! You can fill out our interactive Quote Calculator on the Contact Us page, or message our team directly on WhatsApp at 0310 6460024.';
      } else if (query.includes('job') || query.includes('career') || query.includes('apply') || query.includes('work') || query.includes('guard')) {
        responseText = 'We are always looking for dedicated security professionals! Please navigate to our Careers tab to apply online, or send your application to almarsoos.sec@gmail.com.';
      } else if (query.includes('safdar') || query.includes('malik') || query.includes('marketing') || query.includes('manager')) {
        responseText = 'You can reach Mr. Safdar Malik (General Manager Marketing) directly on WhatsApp at 0310 6460024 or write to almarsoos.sec@gmail.com.';
      } else if (query.includes('location') || query.includes('address') || query.includes('office') || query.includes('islamabad')) {
        responseText = 'Our head office is located at Office # 1, Gillani Plaza, Motorway Chowk, Peshawar Road, Islamabad. You can view our location on Google Maps: https://maps.app.goo.gl/qgc9Wy4KhRToyGZa9 or visit during business hours (9 AM - 5 PM).';
      } else {
        responseText = 'Thank you for your message. Your safety is our mission. For instant assistance, please message us on WhatsApp at 0310 6460024, or email almarsoos.sec@gmail.com.';
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'agent',
          text: responseText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuickAction = (actionType) => {
    if (actionType === 'quote') {
      handleSendMessage('I need a security quote.');
      setTimeout(() => {
        navigate('/contact?quote=true');
        setIsOpen(false);
      }, 2500);
    } else if (actionType === 'careers') {
      handleSendMessage('How can I apply for a security guard job?');
      setTimeout(() => {
        navigate('/careers');
        setIsOpen(false);
      }, 2500);
    } else if (actionType === 'marketing') {
      handleSendMessage('I want to contact the Marketing Manager.');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-outfit">
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-[#d32f2f] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 relative group"
          style={{ boxShadow: '0 0 20px rgba(211, 47, 47, 0.45)' }}
        >
          <MessageSquare size={24} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0b0e] animate-pulse" />
          <span className="absolute right-16 bg-[#11131c] text-white text-xs py-1.5 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/5">
            Chat with AMS
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] max-w-[calc(100vw-32px)] h-[500px] bg-[#11131c] border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-[#181c28] border-b border-white/5 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#d32f2f]/10 border border-[#d32f2f]/30 rounded-full flex items-center justify-center">
                <ShieldCheck size={20} className="text-[#d32f2f]" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm leading-tight flex items-center gap-1.5">
                  AMS Support
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </span>
                <span className="text-[10px] text-slate-400">Always Alert, Always Protecting</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-[#0a0b0e]/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[80%] ${
                  msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                }`}
              >
                <div
                  className={`p-3 rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#d32f2f] text-white rounded-br-none'
                      : 'bg-[#1e2230] text-slate-200 rounded-bl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-500 mt-1">{msg.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex flex-col max-w-[80%] mr-auto items-start">
                <div className="p-3 bg-[#1e2230] rounded-lg rounded-bl-none border border-white/5 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-3 bg-[#181c28]/40 border-t border-white/5 flex gap-2 flex-wrap">
            <button
              onClick={() => handleQuickAction('quote')}
              className="text-[10px] bg-white/5 hover:bg-[#d32f2f]/20 hover:border-[#d32f2f]/40 text-slate-300 hover:text-white border border-white/5 px-2.5 py-1 rounded-full transition-all"
            >
              Get a Quote
            </button>
            <button
              onClick={() => handleQuickAction('careers')}
              className="text-[10px] bg-white/5 hover:bg-[#d32f2f]/20 hover:border-[#d32f2f]/40 text-slate-300 hover:text-white border border-white/5 px-2.5 py-1 rounded-full transition-all"
            >
              Guard Jobs
            </button>
            <button
              onClick={() => handleQuickAction('marketing')}
              className="text-[10px] bg-white/5 hover:bg-[#d32f2f]/20 hover:border-[#d32f2f]/40 text-slate-300 hover:text-white border border-white/5 px-2.5 py-1 rounded-full transition-all"
            >
              GM Marketing Info
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-3 bg-[#181c28] border-t border-white/5 flex gap-2 items-center"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-[#0a0b0e] border border-white/5 rounded-md px-3 py-2 text-sm text-white focus:border-[#d32f2f] focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2 bg-[#d32f2f] text-white rounded-md hover:bg-[#b71c1c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
