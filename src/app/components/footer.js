"use client";
import { Building2, FileText, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top border with gradient */}
      <div className="h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500"></div>
      
      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-black relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* About Section */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-red-600 to-red-700 rounded-lg">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-white font-bold text-xl tracking-wide">ABOUT KPPL</h2>
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full"></div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                To make a valuable contribution in the Petroleum Industry of Pakistan, through a profitable venture, by providing an effective platform to the Pakistani Human Resource for gainful employment, opportunity in training, self development and personal growth, which leads to self actualization and enhancement of self esteem.
              </p>
            </div>

            {/* Corporate Info Section */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-white font-bold text-xl tracking-wide">CORPORATE</h2>
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-red-600/50 transition-colors duration-300">
                  <p className="text-gray-300">
                    <span className="text-red-400 font-semibold">OGRA License No:</span>
                    <br />
                    <span className="text-white">OGRA-OIL-19-3/(140)/2017</span>
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-red-600/50 transition-colors duration-300">
                  <p className="text-gray-300">
                    <span className="text-orange-400 font-semibold">Incorporation No:</span>
                    <br />
                    <span className="text-white">0103725 NTN-7906713-6</span>
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-red-600/50 transition-colors duration-300">
                  <p className="text-gray-300">
                    <span className="text-yellow-400 font-semibold">General Sales Tax No:</span>
                    <br />
                    <span className="text-white">3277876202342</span>
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-red-600/50 transition-colors duration-300">
                  <p className="text-gray-300">
                    <span className="text-blue-400 font-semibold">LCCI Membership No:</span>
                    <br />
                    <span className="text-white">108863-A</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Logo Section */}
            <div className="space-y-6 lg:space-y-8">
              {/* Logo */}
              <div className="relative group">
                <div className="absolute opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl p-6">
                  <img
                    src="/khyber-fotter-logo.png"
                    alt="Khyber Petroleum"
                    className="w-full max-w-[220px] mx-auto h-auto transition-transform duration-300 group-hover:scale-105"
                    title="Khyber Petroleum"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/250x105/1e3a8a/ffffff?text=KHYBER+PETROLEUM";
                    }}
                  />
                </div>
              </div>

              {/* Quick Contact */}
              <div className="space-y-3">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  Quick Contact
                </h3>
                <div className="space-y-2 text-sm">
                  <a href="mailto:info@kppl.pk" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                    <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors duration-200">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>info@kppl.pk</span>
                  </a>
                  <a href="tel:+92xxxxxxxxxx" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group">
                    <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors duration-200">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>0092345-8482135</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h3 className="text-white font-semibold text-lg">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-slate-800 rounded-lg hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Quick Links */}
          <nav className="mb-6">
            <ul className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200 relative group">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li className="text-gray-600">|</li>
              <li>
                <a href="/our-company" className="text-gray-400 hover:text-white transition-colors duration-200 relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li className="text-gray-600">|</li>
              <li>
                <a href="/management" className="text-gray-400 hover:text-white transition-colors duration-200 relative group">
                  Management
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li className="text-gray-600">|</li>
              <li>
                <a href="/province-storage" className="text-gray-400 hover:text-white transition-colors duration-200 relative group">
                  Storage & Sites
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li className="text-gray-600">|</li>
              <li>
                <a href="/hse" className="text-gray-400 hover:text-white transition-colors duration-200 relative group">
                  HSE
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li className="text-gray-600">|</li>
              <li>
                <a href="/investors-relations" className="text-gray-400 hover:text-white transition-colors duration-200 relative group">
                  Investor Relations
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li className="text-gray-600">|</li>
              <li>
                <a href="/contact-us" className="text-gray-400 hover:text-white transition-colors duration-200 relative group">
                  Contact Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 <span className="text-white font-semibold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">Khyber Petroleum</span> Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600"></div>
    </footer>
  );
}