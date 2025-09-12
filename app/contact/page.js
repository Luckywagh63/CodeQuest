"use client";
import React, { useState, useEffect } from 'react';
import { Phone, Crown, Settings } from 'lucide-react';

export default function CodeQuestContact() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const contacts = [
    
    { role: "President", name: "Ashlesha Patil", phone: "+91 99209 88514", icon: Crown },
    { role: "Technical Secretary", name: "Lucky Wagh", phone: "+91 86522 90058", icon: Settings },
    { role: "Technical Secretary", name: "Aayush Redij", phone: "+91 75071 23309", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-[#2C3333] text-[#E7F6F2] relative overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="fixed w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, #A5C9CA 0%, transparent 70%)`,
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />
      
      {/* Header */}
      <div className="relative z-10 pt-20 pb-16 px-6 text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] bg-clip-text text-transparent uppercase tracking-wide mb-4 pt-20">
          CSI-AIML Committee
        </div>
        <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#E7F6F2] via-[#A5C9CA] to-[#E7F6F2] bg-clip-text text-transparent mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-[#A5C9CA] font-light">
          Get in touch with our organizing committee
        </p>
      </div>

      {/* Contact Cards */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <div key={i} className="bg-[#2C3333]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A5C9CA]/30 hover:border-[#A5C9CA]/60 transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3 mb-6">
                  <Icon size={20} className="text-[#A5C9CA]" />
                  <span className="text-[#A5C9CA] font-bold">{contact.role}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#E7F6F2] mb-4">{contact.name}</h3>
                
                <div className="bg-[#395B64]/30 rounded-xl p-4 border border-[#A5C9CA]/20 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-[#A5C9CA]" />
                    <span className="text-[#E7F6F2] font-mono">{contact.phone}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
