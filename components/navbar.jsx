"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FiUser } from "react-icons/fi";

const Navbar = ({ currentPage = "home" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setDropdownOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Team", path: "/team" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C3333]/90 backdrop-blur-xl border-b border-[#A5C9CA]/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] rounded-xl flex items-center justify-center text-[#2C3333] font-black text-lg">
              CQ
            </div>
            <div>
              <div className="text-xl font-bold text-[#E7F6F2]">CodeQuest</div>
              <div className="text-xs text-[#A5C9CA] font-mono">CSI-AIML</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`transition-all duration-300 font-medium relative group ${
                  currentPage === item.name.toLowerCase()
                    ? "text-[#E7F6F2]"
                    : "text-[#A5C9CA] hover:text-[#E7F6F2]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] transition-all duration-300 ${
                    currentPage === item.name.toLowerCase()
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}

            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#395B64]/30 text-[#E7F6F2] rounded-lg hover:scale-105 transition-all"
                >
                  <FiUser size={20} />
                  <span className="max-w-[100px] truncate">{user.email}</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-[#2C3333]/90 backdrop-blur-sm border border-[#A5C9CA]/30 rounded-xl shadow-lg py-2 flex flex-col">
                    <Link
                      href="/dashboard"
                      className="px-4 py-2 hover:bg-[#395B64]/50 rounded-xl text-[#E7F6F2]"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 hover:bg-[#395B64]/50 rounded-xl text-[#E7F6F2] text-left w-full"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="px-6 py-2 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] text-[#2C3333] font-bold rounded-lg hover:scale-105 transition-all"
              >
                Register
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#A5C9CA] hover:text-[#E7F6F2] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-[#A5C9CA]/20 mt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left transition-colors duration-300 font-medium py-2 ${
                  currentPage === item.name.toLowerCase()
                    ? "text-[#E7F6F2]"
                    : "text-[#A5C9CA] hover:text-[#E7F6F2]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {user ? (
              <div className="flex flex-col gap-2">
                <Link
                  href="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full block text-center px-6 py-2 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] text-[#2C3333] font-bold rounded-lg hover:scale-105 transition-all"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full block px-6 py-2 text-center bg-[#395B64]/30 text-[#E7F6F2] font-bold rounded-lg hover:scale-105 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="w-full block text-center px-6 py-2 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] text-[#2C3333] font-bold rounded-lg hover:scale-105 transition-all"
              >
                Register
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
