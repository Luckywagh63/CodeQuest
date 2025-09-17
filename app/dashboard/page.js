"use client";

import React, { useState, useEffect } from "react";
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Trophy, Users, Code, Zap, Star } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [teamRegistered, setTeamRegistered] = useState(false);
  const [userTeam, setUserTeam] = useState(null);
  const [formData, setFormData] = useState({
    teamName: "",
    player1Name: "",
    player2Name: "",
    player2Email: "",
    year: "2nd Year",
  });

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        router.push("/login");
        return;
      }
      
      setUser(currentUser);
      setFormData(prev => ({
        ...prev,
        player1Name: currentUser.displayName || "Player 1",
      }));

      try {
        const response = await fetch("/api/teams");
        const data = await response.json();
        
        if (response.ok) {
          const userRegisteredTeam = data.teams.find(team => 
            team.player1Email === currentUser.email || team.player2Email === currentUser.email
          );
          
          if (userRegisteredTeam) {
            setTeamRegistered(true);
            setUserTeam(userRegisteredTeam);
          }
        }
      } catch (error) {
        console.error("Failed to fetch teams:", error);
      } finally {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, player1Email: user.email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setTeamRegistered(true);
        setUserTeam(data.team || { ...formData, player1Email: user.email });
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      alert("Request failed: " + err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  if (teamRegistered && userTeam) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#2C3333] via-[#395B64] to-[#2C3333] text-[#E7F6F2] py-8 px-4">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#A5C9CA]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#395B64]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#E7F6F2]/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Code Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
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

        <div className="relative max-w-4xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <Code className="w-16 h-16 text-[#A5C9CA] animate-pulse" />
                <Zap className="w-6 h-6 text-[#E7F6F2] absolute -top-1 -right-1 animate-bounce" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#E7F6F2] via-[#A5C9CA] to-[#E7F6F2] bg-clip-text text-transparent leading-tight">
              Welcome Back!
            </h1>
            
            <div className="relative">
              <h2 className="text-xl md:text-2xl font-bold text-[#A5C9CA] mb-4">
                Your Team is Ready for Battle
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#A5C9CA] to-transparent rounded-full"></div>
            </div>

            {/* Success Animation */}
            <div className="text-8xl animate-bounce">🎉</div>
          </div>

          {/* Team Card - Styled like Team Page */}
          <div className="flex justify-center">
            <div className="group relative bg-[#2C3333]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A5C9CA]/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#A5C9CA]/20 max-w-md w-full">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#A5C9CA]/10 via-[#395B64]/10 to-[#E7F6F2]/10 rounded-3xl opacity-100 transition-opacity duration-500"></div>
              
              {/* Champion Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#A5C9CA] to-[#395B64] rounded-full flex items-center justify-center text-[#2C3333] font-bold text-lg shadow-lg animate-pulse">
                <Trophy className="w-6 h-6" />
              </div>
              
              <div className="relative space-y-6">
                {/* Team Header */}
                <div className="text-center pb-4 border-b border-[#A5C9CA]/30">
                  <h3 className="text-3xl font-bold text-[#E7F6F2] mb-2 group-hover:text-[#A5C9CA] transition-colors duration-300">
                    {userTeam.teamName}
                  </h3>
                  <div className="text-sm text-[#A5C9CA]/80">
                    Year: <span className="text-[#E7F6F2] font-semibold">{userTeam.year}</span>
                  </div>
                </div>

                {/* Players */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 rounded-2xl bg-[#A5C9CA]/10 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#A5C9CA] to-[#E7F6F2] rounded-full flex items-center justify-center text-[#2C3333] text-lg font-bold shadow-md">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="text-[#E7F6F2] font-semibold text-lg">{userTeam.player1Name}</p>
                      <p className="text-[#A5C9CA] text-sm">{userTeam.player1Email}</p>
                    </div>
                    {user?.email === userTeam.player1Email && (
                      <div className="text-xs bg-[#A5C9CA]/20 text-[#A5C9CA] px-2 py-1 rounded-full">You</div>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 p-3 rounded-2xl bg-[#A5C9CA]/10 transition-colors duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#395B64] to-[#2C3333] rounded-full flex items-center justify-center text-[#E7F6F2] text-lg font-bold shadow-md">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="text-[#E7F6F2] font-semibold text-lg">{userTeam.player2Name}</p>
                      <p className="text-[#A5C9CA] text-sm">{userTeam.player2Email}</p>
                    </div>
                    {user?.email === userTeam.player2Email && (
                      <div className="text-xs bg-[#A5C9CA]/20 text-[#A5C9CA] px-2 py-1 rounded-full">You</div>
                    )}
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
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/team")}
              className="px-8 py-3 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] text-[#2C3333] font-semibold rounded-xl hover:from-[#A5C9CA] hover:to-[#A5C9CA] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-[#A5C9CA]/25"
            >
              <Users className="w-5 h-5 inline mr-2" />
              View All Teams
            </button>
            
            <a href="/contest">
            <button className="px-8 py-3 bg-[#395B64]/50 border border-[#A5C9CA]/30 text-[#E7F6F2] font-semibold rounded-xl hover:bg-[#A5C9CA]/20 hover:border-[#A5C9CA] transform hover:scale-105 transition-all duration-200"
            >
              <Trophy className="w-5 h-5 inline mr-2" />
              Competition Details
            </button>
            </a>
          </div>

          {/* Fun Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="group relative bg-[#2C3333]/60 backdrop-blur-lg rounded-2xl p-6 border border-[#A5C9CA]/30 hover:border-[#A5C9CA] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#A5C9CA]/20">
              <div className="relative text-center space-y-3">
                <Trophy className="w-10 h-10 text-[#A5C9CA] mx-auto group-hover:animate-bounce" />
                <div className="text-3xl font-bold text-[#E7F6F2]">Registered</div>
                <div className="text-[#A5C9CA]">Team Status</div>
              </div>
            </div>

            <div className="group relative bg-[#2C3333]/60 backdrop-blur-lg rounded-2xl p-6 border border-[#A5C9CA]/30 hover:border-[#A5C9CA] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#A5C9CA]/20">
              <div className="relative text-center space-y-3">
                <Users className="w-10 h-10 text-[#A5C9CA] mx-auto group-hover:animate-bounce" />
                <div className="text-3xl font-bold text-[#E7F6F2]">2</div>
                <div className="text-[#A5C9CA]">Team Members</div>
              </div>
            </div>

            <div className="group relative bg-[#2C3333]/60 backdrop-blur-lg rounded-2xl p-6 border border-[#A5C9CA]/30 hover:border-[#A5C9CA] transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#A5C9CA]/20">
              <div className="relative text-center space-y-3">
                <Star className="w-10 h-10 text-[#A5C9CA] mx-auto group-hover:animate-bounce" />
                <div className="text-3xl font-bold text-[#E7F6F2]">2025</div>
                <div className="text-[#A5C9CA]">Championship</div>
              </div>
            </div>
          </div>
        </div>

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2C3333] px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-[#E7F6F2] bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] bg-clip-text text-transparent">
            Register Your Team
          </h1>
          <p className="text-[#A5C9CA]">Join the competition with your teammate</p>
        </div>

        <form onSubmit={handleSubmit} className="backdrop-blur-sm bg-[#395B64]/30 p-8 rounded-2xl border border-[#A5C9CA]/30 space-y-5 shadow-2xl">
          <div className="space-y-4">
            <input
              type="text"
              name="teamName"
              placeholder="Team Name"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#395B64]/50 border border-[#A5C9CA]/30 text-[#E7F6F2] placeholder-[#A5C9CA] focus:ring-2 focus:ring-[#A5C9CA] focus:border-transparent transition-all duration-200"
              required
            />

            <input
              type="text"
              name="player1Name"
              placeholder="Player 1 Name"
              value={formData.player1Name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#395B64]/50 border border-[#A5C9CA]/30 text-[#E7F6F2] placeholder-[#A5C9CA] focus:ring-2 focus:ring-[#A5C9CA] focus:border-transparent transition-all duration-200"
              required
            />

            <input
              type="email"
              placeholder="Player 1 Email"
              value={user?.email || ""}
              className="w-full px-4 py-3 rounded-xl bg-[#2C3333]/70 border border-[#395B64] text-[#A5C9CA] cursor-not-allowed"
              disabled
            />

            <input
              type="text"
              name="player2Name"
              placeholder="Player 2 Name"
              value={formData.player2Name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#395B64]/50 border border-[#A5C9CA]/30 text-[#E7F6F2] placeholder-[#A5C9CA] focus:ring-2 focus:ring-[#A5C9CA] focus:border-transparent transition-all duration-200"
              required
            />

            <input
              type="email"
              name="player2Email"
              placeholder="Player 2 Email"
              value={formData.player2Email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#395B64]/50 border border-[#A5C9CA]/30 text-[#E7F6F2] placeholder-[#A5C9CA] focus:ring-2 focus:ring-[#A5C9CA] focus:border-transparent transition-all duration-200"
              required
            />

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#395B64]/50 border border-[#A5C9CA]/30 text-[#E7F6F2] focus:ring-2 focus:ring-[#A5C9CA] focus:border-transparent transition-all duration-200"
              required
            >

              <option value="1st Year" className="bg-[#2C3333]">1st Year</option>
              <option value="2nd Year" className="bg-[#2C3333]">2nd Year</option>
              <option value="3rd Year" className="bg-[#2C3333]">3rd Year</option>
              <option value="4th Year" className="bg-[#2C3333]">4th Year</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] text-[#2C3333] font-semibold rounded-xl hover:from-[#A5C9CA] hover:to-[#A5C9CA] transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-[#A5C9CA]/25"
          >
            Register Team
          </button>
        </form>
      </div>
    </div>
  );
}
