import React from 'react';

const Footer = () => {


  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    { label: 'Email', value: 'waghlucky63@gmail.com', icon: '📧' },
    { label: 'Phone', value: '+91 8652290058', icon: '📞' },
    { label: 'Location', value: 'CSE-AIML', icon: '📍' }
  ];

  return (
    <footer className="bg-[#2C3333] border-t border-[#A5C9CA]/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-32 h-32 border-2 border-[#A5C9CA] rotate-45"></div>
        <div className="absolute bottom-10 right-20 w-24 h-24 bg-[#395B64] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-r from-[#A5C9CA] to-[#E7F6F2] rounded-xl flex items-center justify-center text-[#2C3333] font-black text-xl">
                CQ
              </div>
              <div>
                <div className="text-2xl font-bold text-[#E7F6F2]">CodeQuest</div>
                <div className="text-sm text-[#A5C9CA] font-mono">CSI-AIML Committee</div>
              </div>
            </div>
            <p className="text-[#A5C9CA] leading-relaxed">
              Empowering students through competitive programming and fostering innovation in artificial intelligence and machine learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#E7F6F2] mb-4">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#A5C9CA] hover:text-[#E7F6F2] transition-colors duration-300 hover:translate-x-2 transform"
                >
                  → {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#E7F6F2] mb-4">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-start space-x-3">
                  <span className="text-lg">{contact.icon}</span>
                  <div>
                    <div className="text-sm text-[#A5C9CA] font-medium">{contact.label}</div>
                    <div className="text-[#E7F6F2]">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#E7F6F2] mb-4">Event Details</h3>
            <div className="space-y-4">
              <div className="p-4 bg-[#395B64]/30 rounded-xl border border-[#A5C9CA]/20">
                <div className="text-[#A5C9CA] text-sm font-medium mb-2">Round 1 - MCQ</div>
                <div className="text-[#E7F6F2] font-bold">September 16, 2025</div>
                <div className="text-[#A5C9CA] text-sm">45 Questions • 45 Minutes</div>
              </div>
              <div className="p-4 bg-[#395B64]/30 rounded-xl border border-[#A5C9CA]/20">
                <div className="text-[#A5C9CA] text-sm font-medium mb-2">Round 2 - Coding</div>
                <div className="text-[#E7F6F2] font-bold">September 17, 2025</div>
                <div className="text-[#A5C9CA] text-sm">Programming Challenge</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#A5C9CA]/20 pt-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 justify-center">
            <div className="text-[#A5C9CA] text-sm">
              © 2025 CodeQuest. Organized by CSI-AIML Committee. All rights reserved.
            </div>
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center mt-8 pt-8 border-t border-[#A5C9CA]/10">
          <div className="text-[#A5C9CA]/60 text-sm font-mono">
            Made with ❤️ by CSI-AIML Development Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;