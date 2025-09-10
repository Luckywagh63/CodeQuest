"use client";
import React, { useState, useEffect } from 'react';

export default function CodeQuest() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToRounds = () => {
    const roundsSection = document.getElementById('competition-rounds');
    if (roundsSection) {
      roundsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigateToContest = () => {
    // In a real app, you would use Next.js router or similar
    alert('Navigating to Contest page...');
    // For demo purposes, you could replace this with:
    // router.push('/contest');
  };

  return (
    <div className="min-h-screen bg-[#2C3333] text-[#E7F6F2] relative overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="fixed w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(circle, #A5C9CA 0%, transparent 70%)`,
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />
      
      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#A5C9CA] rotate-45 animate-spin"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-[#395B64] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-[#E7F6F2] animate-bounce"></div>
      </div>


      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32 sm:pt-0">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] bg-clip-text text-transparent uppercase tracking-wide">
                CSI-AIML
              </div>
              <div className="text-[#A5C9CA] text-lg font-mono uppercase tracking-wider">
                Committee Presents
              </div>
              <h1 className="text-7xl lg:text-8xl font-black bg-gradient-to-r from-[#E7F6F2] via-[#A5C9CA] to-[#E7F6F2] bg-clip-text text-transparent leading-tight">
                CodeQuest
              </h1>
              <p className="text-2xl text-[#A5C9CA] font-light">
                Where Algorithms Meet Ambition
              </p>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#395B64]/30 backdrop-blur-sm rounded-xl p-4 border border-[#A5C9CA]/20">
                <div className="text-2xl font-bold text-[#E7F6F2]">Round 1</div>
                <div className="text-[#A5C9CA] text-sm">Sept 16 • MCQ</div>
              </div>
              <div className="bg-[#395B64]/30 backdrop-blur-sm rounded-xl p-4 border border-[#A5C9CA]/20">
                <div className="text-2xl font-bold text-[#E7F6F2]">Round 2</div>
                <div className="text-[#A5C9CA] text-sm">Sept 17 • Coding</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href='/login'>
                <button className="group relative px-8 py-4 cursor-pointer bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] text-[#2C3333] font-bold rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
                  <span className="relative z-10">Register Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E7F6F2] to-[#A5C9CA] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>
              <a href='/contest'>
              <button 
               
                className="px-8 py-4 bg-gradient-to-r from-[#395B64] to-[#2C3333] text-[#E7F6F2] font-bold rounded-xl border-2 border-[#A5C9CA] hover:bg-gradient-to-r hover:from-[#A5C9CA] hover:to-[#395B64] hover:text-[#2C3333] transition-all duration-300 cursor-pointer"
              >
                Enter Contest
              </button>
              </a>
              <button 
                onClick={scrollToRounds}
                className="px-8 py-4 border-2 border-[#A5C9CA] text-[#A5C9CA] font-bold rounded-xl hover:bg-[#A5C9CA] hover:text-[#2C3333] transition-all duration-300 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Coding Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A5C9CA]/30 to-[#395B64]/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-[#2C3333]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A5C9CA]/30 hover:border-[#A5C9CA]/60 transition-all duration-300">
                {/* Code Editor Mockup */}
                <div className="bg-[#395B64] rounded-xl p-6 font-mono text-sm">
                  <div className="flex items-center mb-4 space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-[#A5C9CA] ml-4">solution.py</span>
                  </div>
                  <div className="space-y-2 text-[#E7F6F2]">
                    <div><span className="text-[#A5C9CA]">def</span> solve(arr):</div>
                    <div className="pl-4">result = []</div>
                    <div className="pl-4"><span className="text-[#A5C9CA]">for</span> i in range(len(arr)):</div>
                    <div className="pl-8">result.append(arr[i] * 2)</div>
                    <div className="pl-4"><span className="text-[#A5C9CA]">return</span> result</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 bg-[#A5C9CA]/20 backdrop-blur-sm rounded-2xl p-4 border border-[#A5C9CA]/30 animate-pulse">
              <div className="text-2xl">🏆</div>
              <div className="text-[#E7F6F2] font-bold text-sm">Winner</div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-[#395B64]/40 backdrop-blur-sm rounded-2xl p-4 border border-[#A5C9CA]/30 animate-bounce">
              <div className="text-2xl">💻</div>
              <div className="text-[#A5C9CA] font-bold text-sm">Code</div>
            </div>

            <div className="absolute top-1/2 -right-16 bg-[#E7F6F2]/10 backdrop-blur-sm rounded-2xl p-4 border border-[#A5C9CA]/30">
              <div className="text-2xl">⚡</div>
              <div className="text-[#E7F6F2] font-bold text-sm">Fast</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Participants" },
              { number: "2", label: "Rounds" },
              { number: "45", label: "Questions" },
              { number: "2", label: "Days" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-[#2C3333]/60 backdrop-blur-sm rounded-2xl border border-[#A5C9CA]/20 hover:border-[#A5C9CA]/40 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-black text-[#E7F6F2] mb-2">{stat.number}</div>
                <div className="text-[#A5C9CA] uppercase tracking-wide text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Rounds */}
      <div id="competition-rounds" className="relative z-10 py-20 px-6 scroll-mt-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-[#E7F6F2] to-[#A5C9CA] bg-clip-text text-transparent">
            Competition Rounds
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Round 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A5C9CA]/20 to-[#395B64]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-[#2C3333]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A5C9CA]/30 hover:border-[#A5C9CA]/50 transition-all duration-300 hover:scale-105">
                {/* Quiz Image Mockup */}
                <div className="bg-[#395B64]/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[#A5C9CA] font-mono">Question 15/45</span>
                    <span className="text-[#E7F6F2] font-mono">Timer: 30:15</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-[#A5C9CA]/30 rounded w-full"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-[#E7F6F2]/20 rounded w-3/4"></div>
                      <div className="h-3 bg-[#E7F6F2]/20 rounded w-2/3"></div>
                      <div className="h-3 bg-[#A5C9CA]/40 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#E7F6F2]">Online MCQ Round</h3>
                  <div className="text-[#A5C9CA] space-y-2">
                    <div>📅 September 16th, 2025</div>
                    <div>⏱️ 45 Minutes • 45 Questions</div>
                    <div>🎯 Technical + Soft Skills</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Round 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#395B64]/20 to-[#A5C9CA]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-[#2C3333]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A5C9CA]/30 hover:border-[#A5C9CA]/50 transition-all duration-300 hover:scale-105">
                {/* Terminal Mockup */}
                <div className="bg-[#395B64]/30 rounded-xl p-6 mb-6 font-mono">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-[#A5C9CA] ml-4">terminal</span>
                  </div>
                  <div className="space-y-2 text-[#E7F6F2] text-sm">
                    <div>$ python solution.py</div>
                    <div className="text-[#A5C9CA]">Running test cases...</div>
                    <div>✅ Test 1: Passed</div>
                    <div>✅ Test 2: Passed</div>
                    <div className="text-green-400">All tests passed! 🎉</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#E7F6F2]">Coding Challenge</h3>
                  <div className="text-[#A5C9CA] space-y-2">
                    <div>📅 September 17th, 2025</div>
                    <div>💻 Live Coding Platform</div>
                    <div>🧠 Algorithm Challenges</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
