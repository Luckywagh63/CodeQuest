"use client";

import React, { useEffect, useState } from "react";
import { Trophy, Users, Code, Zap, Star, ArrowDown } from "lucide-react";

export default function TeamPage() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/teams")
      .then(res => res.json())
      .then(data => {
        setTeams(data.teams || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2C3333] via-[#395B64] to-[#2C3333] text-[#E7F6F2] flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin w-12 h-12 border-4 border-[#A5C9CA] border-t-transparent rounded-full"></div>
          <div className="absolute inset-0 animate-ping w-12 h-12 border-2 border-[#A5C9CA]/30 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C3333] via-[#395B64] to-[#2C3333] text-[#E7F6F2] pt-32">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A5C9CA]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#395B64]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#E7F6F2]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float text-[#A5C9CA]/20 text-6xl font-mono`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            >
              {['<>', '{}', '[]', '()', '/>', '&&'][i]}
            </div>
          ))}
        </div>

        <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <Code className="w-16 h-16 text-[#A5C9CA] animate-pulse" />
                <Zap className="w-6 h-6 text-[#E7F6F2] absolute -top-1 -right-1 animate-bounce" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-[#E7F6F2] via-[#A5C9CA] to-[#E7F6F2] bg-clip-text text-transparent leading-tight">
              Code<span className="text-[#A5C9CA]">Quest</span>
            </h1>
            
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-bold text-[#A5C9CA] mb-4">
                Battle Arena
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#A5C9CA] to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="group relative bg-[#2C3333]/60 backdrop-blur-lg rounded-2xl p-6 border border-[#A5C9CA]/30 hover:border-[#A5C9CA] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#A5C9CA]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A5C9CA]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-center space-y-3">
                <Trophy className="w-10 h-10 text-[#A5C9CA] mx-auto group-hover:animate-bounce" />
                <div className="text-3xl font-bold text-[#E7F6F2]">{teams.length}</div>
                <div className="text-[#A5C9CA]">Registered Teams</div>
              </div>
            </div>

            <div className="group relative bg-[#2C3333]/60 backdrop-blur-lg rounded-2xl p-6 border border-[#A5C9CA]/30 hover:border-[#A5C9CA] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#A5C9CA]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A5C9CA]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-center space-y-3">
                <Users className="w-10 h-10 text-[#A5C9CA] mx-auto group-hover:animate-bounce" />
                <div className="text-3xl font-bold text-[#E7F6F2]">{teams.length * 2}</div>
                <div className="text-[#A5C9CA]">Total Warriors</div>
              </div>
            </div>

            <div className="group relative bg-[#2C3333]/60 backdrop-blur-lg rounded-2xl p-6 border border-[#A5C9CA]/30 hover:border-[#A5C9CA] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#A5C9CA]/20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#A5C9CA]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative text-center space-y-3">
                <Star className="w-10 h-10 text-[#A5C9CA] mx-auto group-hover:animate-bounce" />
                <div className="text-3xl font-bold text-[#E7F6F2]">2025</div>
                <div className="text-[#A5C9CA]">Championship</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 space-y-6">
            <p className="text-xl text-[#A5C9CA]/80 max-w-2xl mx-auto leading-relaxed">
              Where code meets competition. Watch the brightest minds battle through algorithms, 
              data structures, and creative problem solving.
            </p>
            
            <div className="animate-bounce">
              <ArrowDown className="w-8 h-8 text-[#A5C9CA] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#E7F6F2] to-[#A5C9CA] bg-clip-text text-transparent mb-6">
              Championship Roster
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] rounded-full mx-auto mb-4"></div>
            <p className="text-[#A5C9CA] text-lg">
              Meet the teams ready to conquer the coding battlefield
            </p>
          </div>

          {/* Teams Grid */}
          {teams.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teams.map((team, i) => (
                <div
                  key={team._id}
                  className="group relative bg-[#2C3333]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A5C9CA]/30 hover:border-[#A5C9CA]/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#A5C9CA]/10"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A5C9CA]/5 via-[#395B64]/5 to-[#E7F6F2]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Rank Badge */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#A5C9CA] to-[#395B64] rounded-full flex items-center justify-center text-[#2C3333] font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    #{i + 1}
                  </div>
                  
                  <div className="relative space-y-6">
                    {/* Team Header */}
                    <div className="text-center pb-4 border-b border-[#A5C9CA]/20">
                      <h3 className="text-2xl font-bold text-[#E7F6F2] mb-2 group-hover:text-[#A5C9CA] transition-colors duration-300">
                        {team.teamName}
                      </h3>
                      <div className="text-sm text-[#A5C9CA]/80">
                        Year: <span className="text-[#E7F6F2] font-semibold">{team.year}</span>
                      </div>
                    </div>

                    {/* Players */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-3 rounded-2xl bg-[#395B64]/20 group-hover:bg-[#A5C9CA]/10 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#A5C9CA] to-[#E7F6F2] rounded-full flex items-center justify-center text-[#2C3333] text-lg font-bold shadow-md">
                          1
                        </div>
                        <div className="flex-1">
                          <p className="text-[#E7F6F2] font-semibold text-lg">{team.player1Name}</p>
                          <p className="text-[#A5C9CA] text-sm">{team.player1Email}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 p-3 rounded-2xl bg-[#395B64]/20 group-hover:bg-[#A5C9CA]/10 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#395B64] to-[#2C3333] rounded-full flex items-center justify-center text-[#E7F6F2] text-lg font-bold shadow-md">
                          2
                        </div>
                        <div className="flex-1">
                          <p className="text-[#E7F6F2] font-semibold text-lg">{team.player2Name}</p>
                          <p className="text-[#A5C9CA] text-sm">{team.player2Email}</p>
                        </div>
                      </div>
                    </div>

                    {/* Team Status */}
                    <div className="text-center pt-4">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#A5C9CA]/20 text-[#A5C9CA] border border-[#A5C9CA]/30">
                        <div className="w-2 h-2 bg-[#A5C9CA] rounded-full mr-2 animate-pulse"></div>
                        Ready for Battle
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 animate-ping">
                  <Trophy className="w-24 h-24 text-[#A5C9CA]/30" />
                </div>
                <Trophy className="relative w-24 h-24 text-[#A5C9CA]/60" />
                <Users className="w-12 h-12 text-[#E7F6F2] absolute -bottom-2 -right-2 bg-[#2C3333] rounded-full p-2 border-2 border-[#A5C9CA]/50" />
              </div>
              <h3 className="text-3xl font-bold text-[#A5C9CA] mb-4">Arena Awaits Champions</h3>
              <p className="text-[#E7F6F2]/80 text-lg max-w-md mx-auto leading-relaxed">
                The battlefield is ready. Be the first team to join the ultimate coding competition!
              </p>
              <div className="mt-8">
            <a href="/dashboard">
                <button className="px-8 py-3 bg-gradient-to-r from-[#A5C9CA] to-[#395B64] rounded-full text-[#2C3333] font-bold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-[#A5C9CA]/30">
                  Register Your Team
                </button>
            </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
