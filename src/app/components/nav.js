"use client";
import { useState } from "react";
import { Menu, X, ChevronDown, Home, Users, Building2, Warehouse, Shield, TrendingUp, Mail } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [pathname] = useState("/"); // Simulated pathname

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  
  const isActive = (path) =>
    pathname === path
      ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg"
      : "hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white";

  const isDropdownActive = (paths) =>
    paths.some(path => pathname === path)
      ? "bg-gradient-to-r from-red-600 to-red-500 text-white"
      : "";

  return (
    <nav className="relative">
      {/* Main Navigation Bar */}
      <div className="w-full bg-white shadow-lg fixed top-0 z-50 border-b-4 border-red-600">
        <div className="flex max-w-[1400px] mx-auto justify-between items-center w-full h-20 lg:h-24 px-4 lg:px-6">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="relative group">
              <div className="absolute -inset-1 blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative bg-white rounded-lg p-2">
                <img
                  src="/kppl-logo-1024x439.png"
                  alt="Khyber Petroleum"
                  className="h-16 w-auto cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  title="Khyber Petroleum"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/200x85/1e3a8a/ffffff?text=KHYBER+PETROLEUM";
                  }}
                />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2.5 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center ml-auto">
            <ul className="flex flex-row gap-1 xl:gap-2 text-slate-700 items-center font-medium text-sm xl:text-base">
              <li className="relative group">
                <a
                  href="/"
                  className={`${isActive("/")} rounded-full py-2 px-3 xl:px-5 flex items-center gap-1.5 xl:gap-2 transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}
                >
                  <Home className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  <span className="hidden xl:inline">Home</span>
                  <span className="xl:hidden">Home</span>
                </a>
              </li>
              
              <li className="relative group">
                <a
                  href="/management"
                  className={`${isActive("/management")} rounded-full py-2 px-3 xl:px-5 flex items-center gap-1.5 xl:gap-2 transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}
                >
                  <Users className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  Management
                </a>
              </li>

              {/* About Dropdown */}
              <li className="relative group">
                <div
                  onMouseEnter={() => toggleDropdown("about")}
                  className={`${isDropdownActive(["/our-company", "/our-journey", "/our-vision", "/our-mission"])} rounded-full py-2 px-3 xl:px-5 flex items-center gap-1.5 xl:gap-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white whitespace-nowrap`}
                >
                  <Building2 className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  About
                  <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-300 ${openDropdown === "about" ? "rotate-180" : ""}`} />
                </div>
                {openDropdown === "about" && (
                  <ul
                    className="absolute left-0 mt-3 p-3 w-52 xl:w-56 bg-white shadow-2xl rounded-xl border-t-4 border-red-600 animate-in slide-in-from-top-2 duration-200"
                    onMouseLeave={() => toggleDropdown(null)}
                  >
                    <li className="hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white my-1 rounded-lg transition-all duration-200">
                      <a href="/our-company" className="block py-2 xl:py-2.5 px-3 xl:px-4 text-sm xl:text-base">Company Overview</a>
                    </li>
                    <li className="hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white my-1 rounded-lg transition-all duration-200">
                      <a href="/our-journey" className="block py-2 xl:py-2.5 px-3 xl:px-4 text-sm xl:text-base">Our Journey</a>
                    </li>
                    <li className="hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white my-1 rounded-lg transition-all duration-200">
                      <a href="/our-vision" className="block py-2 xl:py-2.5 px-3 xl:px-4 text-sm xl:text-base">Our Vision</a>
                    </li>
                    <li className="hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white my-1 rounded-lg transition-all duration-200">
                      <a href="/our-mission" className="block py-2 xl:py-2.5 px-3 xl:px-4 text-sm xl:text-base">Our Mission</a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Storage Dropdown */}
              <li className="relative group">
                <div
                  onMouseEnter={() => toggleDropdown("storage")}
                  className={`${isDropdownActive(["/province-storage", "/allowed-sites"])} rounded-full py-2 px-3 xl:px-5 flex gap-1.5 xl:gap-2 items-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white whitespace-nowrap`}
                >
                  <Warehouse className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  <span className="hidden xl:inline">Storage & Sites</span>
                  <span className="xl:hidden">Storage</span>
                  <ChevronDown className={`w-3.5 h-3.5 xl:w-4 xl:h-4 transition-transform duration-300 ${openDropdown === "storage" ? "rotate-180" : ""}`} />
                </div>
                {openDropdown === "storage" && (
                  <ul
                    className="absolute left-0 mt-3 w-56 xl:w-64 p-3 bg-white shadow-2xl rounded-xl border-t-4 border-red-600 animate-in slide-in-from-top-2 duration-200"
                    onMouseLeave={() => toggleDropdown(null)}
                  >
                    <li className="hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white rounded-lg my-1 transition-all duration-200">
                      <a href="/province-storage" className="block py-2 xl:py-2.5 px-3 xl:px-4 text-sm xl:text-base">
                        Province Wise Storage Capacity
                      </a>
                    </li>
                    <li className="hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white rounded-lg my-1 transition-all duration-200">
                      <a href="/allowed-sites" className="block py-2 xl:py-2.5 px-3 xl:px-4 text-sm xl:text-base">
                        Allowed Number of Sites
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li className="relative group">
                <a
                  href="/hse"
                  className={`${isActive("/hse")} rounded-full py-2 px-3 xl:px-5 flex items-center gap-1.5 xl:gap-2 transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}
                >
                  <Shield className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  HSE
                </a>
              </li>

              <li className="relative group">
                <a
                  href="/investors-relations"
                  className={`${isActive("/investors-relations")} rounded-full py-2 px-3 xl:px-5 flex items-center gap-1.5 xl:gap-2 transition-all duration-300 transform hover:scale-105 whitespace-nowrap`}
                >
                  <TrendingUp className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  <span className="hidden xl:inline">Investor Relations</span>
                  <span className="xl:hidden">Investors</span>
                </a>
              </li>

              <li className="relative group">
                <a
                  href="/contact-us"
                  className={`${isActive("/contact-us")} rounded-full py-2 px-3 xl:px-5 flex items-center gap-1.5 xl:gap-2 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-slate-700 to-slate-900 text-white hover:from-orange-500 hover:to-yellow-500 shadow-md hover:shadow-lg whitespace-nowrap`}
                >
                  <Mail className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-slate-900 opacity-60 backdrop-blur-sm"
            onClick={toggleMenu}
          ></div>
          
          <button
            onClick={toggleMenu}
            className="absolute top-28 left-4 z-50 p-2 rounded-full bg-white shadow-lg hover:bg-red-600 hover:text-white transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="absolute right-0 top-0 mt-24 bg-gradient-to-b from-white to-slate-50 h-full w-80 sm:w-96 z-50 p-6 shadow-2xl border-l-4 border-red-600 overflow-y-auto">
            <ul className="mt-6 space-y-2">
              <li>
                <a
                  href="/"
                  className="flex items-center gap-3 p-3 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white rounded-xl transition-all duration-300 font-medium"
                  onClick={toggleMenu}
                >
                  <Home className="w-5 h-5" />
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/management"
                  className="flex items-center gap-3 p-3 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white rounded-xl transition-all duration-300 font-medium"
                  onClick={toggleMenu}
                >
                  <Users className="w-5 h-5" />
                  Management
                </a>
              </li>

              <li>
                <div
                  className={`flex items-center justify-between p-3 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white rounded-xl cursor-pointer transition-all duration-300 font-medium ${
                    openDropdown === "about" ? "bg-gradient-to-r from-red-600 to-red-500 text-white" : ""
                  }`}
                  onClick={() => toggleDropdown("about")}
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5" />
                    About
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openDropdown === "about" ? "rotate-180" : ""}`} />
                </div>
                {openDropdown === "about" && (
                  <ul className="pl-8 mt-2 space-y-2 animate-in slide-in-from-top-1 duration-200">
                    <li>
                      <a
                        href="/our-company"
                        className="block p-3 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white rounded-lg transition-all duration-200"
                        onClick={toggleMenu}
                      >
                        Company Overview
                      </a>
                    </li>
                    <li>
                      <a
                        href="/our-journey"
                        className="block p-3 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white rounded-lg transition-all duration-200"
                        onClick={toggleMenu}
                      >
                        Our Journey
                      </a>
                    </li>
                    <li>
                      <a
                        href="/our-vision"
                        className="block p-3 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white rounded-lg transition-all duration-200"
                        onClick={toggleMenu}
                      >
                        Our Vision
                      </a>
                    </li>
                    <li>
                      <a
                        href="/our-mission"
                        className="block p-3 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white rounded-lg transition-all duration-200"
                        onClick={toggleMenu}
                      >
                        Our Mission
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <div
                  className={`flex items-center justify-between p-3 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white rounded-xl cursor-pointer transition-all duration-300 font-medium ${
                    openDropdown === "storage" ? "bg-gradient-to-r from-red-600 to-red-500 text-white" : ""
                  }`}
                  onClick={() => toggleDropdown("storage")}
                >
                  <div className="flex items-center gap-3">
                    <Warehouse className="w-5 h-5" />
                    Storage & Sites
                  </div>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openDropdown === "storage" ? "rotate-180" : ""}`} />
                </div>
                {openDropdown === "storage" && (
                  <ul className="pl-8 mt-2 space-y-2 animate-in slide-in-from-top-1 duration-200">
                    <li>
                      <a
                        href="/province-storage"
                        className="block p-3 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white rounded-lg transition-all duration-200"
                        onClick={toggleMenu}
                      >
                        Province Wise Storage
                      </a>
                    </li>
                    <li>
                      <a
                        href="/allowed-sites"
                        className="block p-3 hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white rounded-lg transition-all duration-200"
                        onClick={toggleMenu}
                      >
                        Allowed Sites
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="/hse"
                  className="flex items-center gap-3 p-3 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white rounded-xl transition-all duration-300 font-medium"
                  onClick={toggleMenu}
                >
                  <Shield className="w-5 h-5" />
                  HSE
                </a>
              </li>

              <li>
                <a
                  href="/investors-relations"
                  className="flex items-center gap-3 p-3 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white rounded-xl transition-all duration-300 font-medium"
                  onClick={toggleMenu}
                >
                  <TrendingUp className="w-5 h-5" />
                  Investor Relations
                </a>
              </li>

              <li>
                <a
                  href="/contact-us"
                  className="flex items-center gap-3 p-3 bg-gradient-to-r from-slate-700 to-slate-900 text-white hover:from-orange-500 hover:to-yellow-500 rounded-xl transition-all duration-300 font-medium shadow-lg"
                  onClick={toggleMenu}
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}