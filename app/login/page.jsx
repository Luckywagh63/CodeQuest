"use client";

import React, { useState, useEffect } from "react";
import { auth, googleProvider } from "@/lib/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

export default function AuthPages() {
  const [page, setPage] = useState("login");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  // Track mouse for background glow
  useEffect(() => {
    const handleMouse = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Watch for user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // ✅ Redirect to Home page after login/register
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, [router]);

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("✅ Logged in successfully!");
    } catch (err) {
      alert("❌ " + err.message);
    }
  };

  const handleRegister = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("🎉 Account created successfully!");
    } catch (err) {
      alert("❌ " + err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("✅ Google Sign-In successful!");
    } catch (err) {
      alert("❌ " + err.message);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#395B64]/30 border border-[#A5C9CA]/30 rounded-xl text-[#E7F6F2] placeholder-[#A5C9CA]/70 focus:outline-none focus:border-[#A5C9CA] focus:bg-[#395B64]/50 transition-all duration-300";

  return (
    <div className="min-h-screen bg-[#2C3333] text-[#E7F6F2] relative overflow-hidden">
      <div
        className="fixed w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(circle, #A5C9CA 0%, transparent 70%)`,
          left: mouse.x - 250,
          top: mouse.y - 250,
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-md bg-[#2C3333]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#A5C9CA]/30">
          {page === "login" ? (
            <>
              <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={inputClass}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`${inputClass} mt-4`}
                onChange={handleChange}
              />
              <button
                onClick={handleLogin}
                className="w-full py-3 mt-6 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] text-[#2C3333] font-bold rounded-xl hover:scale-105 transition-all"
              >
                Sign In
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 w-full py-3 mt-4 bg-[#395B64]/30 border border-[#A5C9CA]/30 rounded-xl hover:scale-105 transition-all"
              >
                <FcGoogle size={22} /> Sign in with Google
              </button>
              <p className="mt-4 text-center">
                Don’t have an account?{" "}
                <button onClick={() => setPage("register")} className="underline">
                  Create one
                </button>
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-center mb-6">Join CodeQuest</h1>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={inputClass}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className={`${inputClass} mt-4`}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className={`${inputClass} mt-4`}
                onChange={handleChange}
              />
              <button
                onClick={handleRegister}
                className="w-full py-3 mt-6 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] text-[#2C3333] font-bold rounded-xl hover:scale-105 transition-all"
              >
                Create Account
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center gap-2 w-full py-3 mt-4 bg-[#395B64]/30 border border-[#A5C9CA]/30 rounded-xl hover:scale-105 transition-all"
              >
                <FcGoogle size={22} /> Sign up with Google
              </button>
              <p className="mt-4 text-center">
                Already have an account?{" "}
                <button onClick={() => setPage("login")} className="underline">
                  Sign in
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
