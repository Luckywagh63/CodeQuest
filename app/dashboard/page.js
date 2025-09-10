"use client";

import React, { useState, useEffect } from "react";
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [teamRegistered, setTeamRegistered] = useState(false);
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
          const isRegistered = data.teams.some(team => 
            team.player1Email === currentUser.email || team.player2Email === currentUser.email
          );
          setTeamRegistered(isRegistered);
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
      <div className="min-h-screen flex items-center justify-center bg-[#2C3333]">
        <div className="animate-pulse text-[#E7F6F2] text-xl">Loading...</div>
      </div>
    );
  }

  if (teamRegistered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#2C3333] px-4">
        <div className="text-center space-y-6 backdrop-blur-sm bg-[#395B64]/30 p-8 rounded-2xl border border-[#A5C9CA]/30 shadow-2xl">
          <div className="text-6xl">🎉</div>
          <h1 className="text-4xl font-bold text-[#E7F6F2] bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] bg-clip-text text-transparent">
            Already Registered!
          </h1>
          <p className="text-[#A5C9CA] text-lg">Your team is all set for the competition</p>
          <button
            onClick={() => router.push("/team")}
            className="px-8 py-3 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] text-[#2C3333] font-semibold rounded-xl hover:from-[#A5C9CA] hover:to-[#A5C9CA] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-[#A5C9CA]/25"
          >
            View Teams
          </button>
        </div>
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