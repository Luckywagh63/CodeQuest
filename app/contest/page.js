"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContestPage() {
  const [activeRound, setActiveRound] = useState('round1');
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#2C3333] text-[#E7F6F2] relative overflow-hidden">
     

      {/* Main Content */}
      <div className="relative z-10 pt-32 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#E7F6F2] via-[#A5C9CA] to-[#E7F6F2] bg-clip-text text-transparent mb-4">
              Contest Arena
            </h1>
            <p className="text-xl text-[#A5C9CA] mb-8">Battle-tested challenges await the brave</p>
            
            {/* Contest Link Notice */}
            <div className="bg-gradient-to-r from-[#395B64]/30 to-[#A5C9CA]/30 backdrop-blur-sm rounded-2xl p-6 border border-[#A5C9CA]/40 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <span className="text-3xl mr-3">📢</span>
                <h3 className="text-xl font-bold text-[#E7F6F2]">Important Notice</h3>
              </div>
              <p className="text-[#A5C9CA] text-lg">
                Contest links will be uploaded here on <span className="text-[#E7F6F2] font-bold">September 17th, 2025</span>
              </p>
            </div>
          </div>

          {/* Contest Rules */}
          <div className="mb-16">
            <div className="bg-[#2C3333]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A5C9CA]/30">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">📋</span>
                <h2 className="text-3xl font-bold text-[#E7F6F2]">Contest Rules</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#A5C9CA] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#2C3333] font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-[#E7F6F2] font-bold mb-1">Team Leader Only</h4>
                      <p className="text-[#A5C9CA] text-sm">One member will fill the form</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#A5C9CA] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#2C3333] font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-[#E7F6F2] font-bold mb-1">No Multiple Teams</h4>
                      <p className="text-[#A5C9CA] text-sm">One person in <span className="text-red-400 font-semibold">multiple teams = disqualification</span></p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#A5C9CA] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#2C3333] font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-[#E7F6F2] font-bold mb-1">Duo Registration</h4>
                      <p className="text-[#A5C9CA] text-sm">Fill form <span className="text-[#E7F6F2] font-semibold">only once</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-[#A5C9CA] rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-[#2C3333] font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="text-[#E7F6F2] font-bold mb-1">Changes</h4>
                      <p className="text-[#A5C9CA] text-sm">Need changes? <span className="text-[#E7F6F2] font-semibold">Contact organizers</span></p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                <div className="flex items-center mb-2">
                  <span className="text-red-400 text-xl mr-2">⚠️</span>
                  <h4 className="text-red-400 font-bold">Warning</h4>
                </div>
                <p className="text-red-300 text-sm">Rule violations result in immediate disqualification</p>
              </div>
            </div>
          </div>

          {/* Contest Status */}
        

          {/* Round Selection */}
          <div className="mb-12">
            <div className="flex justify-center">
              <div className="bg-[#2C3333]/60 backdrop-blur-sm rounded-2xl p-2 border border-[#A5C9CA]/20">
                <button
                  onClick={() => setActiveRound('round1')}
                  className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                    activeRound === 'round1' 
                      ? 'bg-gradient-to-r from-[#A5C9CA] to-[#395B64] text-[#E7F6F2]' 
                      : 'text-[#A5C9CA] hover:text-[#E7F6F2]'
                  }`}
                >
                  Round 1: MCQ
                </button>
                <button
                  onClick={() => setActiveRound('round2')}
                  className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                    activeRound === 'round2' 
                      ? 'bg-gradient-to-r from-[#A5C9CA] to-[#395B64] text-[#E7F6F2]' 
                      : 'text-[#A5C9CA] hover:text-[#E7F6F2]'
                  }`}
                >
                  Round 2: Coding
                </button>
              </div>
            </div>
          </div>

          {/* Round Details */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {activeRound === 'round1' ? (
                <div className="bg-[#2C3333]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A5C9CA]/30">
                  <h3 className="text-2xl font-bold text-[#E7F6F2] mb-6">Online MCQ Round</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-[#A5C9CA]">
                      <span className="text-2xl mr-3">📅</span>
                      <span>September 17th, 2025 </span>
                    </div>
                    <div className="flex items-center text-[#A5C9CA]">
                      <span className="text-2xl mr-3">⏱️</span>
                      <span>45 Minutes • 45 Questions</span>
                    </div>
                    <div className="flex items-center text-[#A5C9CA]">
                      <span className="text-2xl mr-3">🎯</span>
                      <span>Technical + Aptitude + Logic</span>
                    </div>
                  </div>
                  <button disabled className="w-full px-8 py-4 bg-gray-600 text-gray-400 font-bold rounded-xl cursor-not-allowed">
                    Available Sept 17th
                  </button>
                </div>
              ) : (
                <div className="bg-[#2C3333]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A5C9CA]/30">
                  <h3 className="text-2xl font-bold text-[#E7F6F2] mb-6">Coding Challenge</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-[#A5C9CA]">
                      <span className="text-2xl mr-3">📅</span>
                      <span>September 19th, 2025 </span>
                    </div>
                    <div className="flex items-center text-[#A5C9CA]">
                      <span className="text-2xl mr-3">⏱️</span>
                      <span>1 Hours • Live Coding</span>
                    </div>
                    <div className="flex items-center text-[#A5C9CA]">
                      <span className="text-2xl mr-3">💻</span>
                      <span>Multiple Languages</span>
                    </div>
                  </div>
                  <button disabled className="w-full px-8 py-4 bg-gray-600 text-gray-400 font-bold rounded-xl cursor-not-allowed">
                    Available Sept 19th
                  </button>
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="bg-[#2C3333]/60 backdrop-blur-sm rounded-2xl p-6 border border-[#A5C9CA]/20">
              <h4 className="text-xl font-bold text-[#E7F6F2] mb-4 flex items-center">
                <span className="text-2xl mr-3">📞</span>
                Need Help?
              </h4>
              <div className="space-y-3 text-[#A5C9CA]">
                <div>📧 waghlucky63@gmail.com</div>
                <div>📱 +91 86522 90058</div>
              </div>
              <div className="mt-4 p-3 bg-[#A5C9CA]/10 rounded-lg border border-[#A5C9CA]/20">
                <p className="text-[#A5C9CA] text-sm">
                  <span className="text-[#E7F6F2] font-semibold">Remember:</span> No multiple forms. Contact us for changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
