
"use client";
import Image from "next/image";
import Head from "next/head";
import { Award, Users, Lightbulb, Target, Rocket, TrendingUp, Fuel, Map } from "lucide-react";
import { useState, useEffect } from "react";

// Our Value Component
const OurValue = () => (
  <div className="grid md:grid-cols-3 gap-8 my-16">
    {[
      { title: "Quality", Icon: Award, desc: "Premium petroleum products meeting international standards" },
      { title: "Service", Icon: Users, desc: "Customer-centric approach with 24/7 support" },
      { title: "Innovation", Icon: Lightbulb, desc: "Modern retail network and cutting-edge solutions" }
    ].map((item, i) => (
      <div key={i} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-red-100">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full opacity-5 -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
          <item.Icon className="w-12 h-12 text-red-600" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3">{item.title}</h3>
        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>
);

// Our Journey Component
const OurJourney = () => (
  <div className="my-20 relative">
    <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-transparent to-red-100 rounded-3xl opacity-30"></div>
    <div className="relative bg-white rounded-3xl shadow-xl p-10 border border-amber-100">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-amber-500 bg-clip-text text-transparent">
        Our Journey
      </h2>
      <div className="space-y-8">
        {[
          { year: "2010", event: "Founded as petroleum supplier", Icon: Fuel },
          { year: "2015", event: "Expanded nationwide operations", Icon: Map },
          { year: "2020", event: "Launched retail petrol pump network", Icon: TrendingUp },
          { year: "2025", event: "Leading petroleum company in Pakistan", Icon: Award }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-6 group">
            <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
              {item.year}
            </div>
            <div className="flex-1 bg-gradient-to-r from-slate-50 to-white p-6 rounded-xl border-l-4 border-red-600 group-hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-3">
                <item.Icon className="w-5 h-5 text-red-600" />
                <p className="text-slate-700 text-lg">{item.event}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Our Vision Component
const OurVision = () => (
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-amber-600 p-10 text-white shadow-2xl hover:shadow-red-500/50 transition-all duration-500 group">
    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000"></div>
    <div className="relative z-10">
      <div className="mb-6">
        <Target className="w-16 h-16" strokeWidth={1.5} />
      </div>
      <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
      <p className="text-red-100 leading-relaxed text-lg">
        To be Pakistan&apos;s most trusted and innovative petroleum company, setting new standards in quality, service, and sustainability while driving national energy growth.
      </p>
    </div>
  </div>
);

// Our Mission Component
const OurMission = () => (
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-10 text-white shadow-2xl hover:shadow-slate-500/50 transition-all duration-500 group">
    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full opacity-5 -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000"></div>
    <div className="relative z-10">
      <div className="mb-6">
        <Rocket className="w-16 h-16 text-amber-400" strokeWidth={1.5} />
      </div>
      <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
      <p className="text-slate-300 leading-relaxed text-lg">
        Delivering premium petroleum products and services nationwide through our expanding retail network, while exceeding customer expectations with unwavering commitment to quality and innovation.
      </p>
    </div>
  </div>
);

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Home | Khyber Petroleum Pvt Ltd.</title>
        <meta name="description" content="Welcome to Khyber Petroleum Pvt Ltd. Discover our journey, values, and vision as a leading petroleum company in Pakistan, expanding our services and product range to meet growing demands." />
        <meta name="keywords" content="Khyber Petroleum, Home, Petroleum Company, Pakistan, Fuel Supply, Petrol Pumps, Lubricants, Engineering Consultancy" />
        <meta name="author" content="Khyber Petroleum Pvt Ltd." />
        <meta property="og:title" content="Home | Khyber Petroleum Pvt Ltd." />
        <meta property="og:description" content="Learn more about Khyber Petroleum Pvt Ltd., our mission, and our expansion plans in the petroleum industry across Pakistan." />
        <meta property="og:image" content="/kppl.webp" />
        <meta property="og:url" content="https://www.kppl.pk/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Khyber Petroleum Pvt Ltd." />
        <meta name="twitter:description" content="Explore Khyber Petroleum Pvt Ltd. and our commitment to providing top-quality petroleum products and services in Pakistan." />
        <meta name="twitter:image" content="/kppl.webp" />
      </Head>

      <div className="min-h-screen w-full bg-white relative">
        {/* Logo-Themed Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #1e3a8a 70%, #dc2626 100%)
            `,
            backgroundSize: "100% 100%",
          }}
        />
        
        <div className="relative z-10">
          {/* Hero Section with Parallax */}
          <div className="relative mt-20 overflow-hidden">
            <div className="relative h-[600px] md:h-[800px]">
              {/* Background Image with Parallax */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
                style={{
                  backgroundImage: "url('/kppl.webp')",
                  transform: `translateY(${scrollY * 0.5}px)`
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
              
              {/* Animated Geometric Shapes */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>

              {/* Hero Content */}
              <div className={`relative z-10 h-full flex items-center justify-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="max-w-5xl mx-auto text-center">
                  <div className="mb-8 inline-block">
                    <div className="bg-red-600/20 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-2 mb-6">
                      <p className="text-red-100 text-sm font-medium tracking-wide">LEADING PETROLEUM COMPANY IN PAKISTAN</p>
                    </div>
                  </div>
                  
                  <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    Welcome to <br />
                    <span className="bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
                      Khyber Petroleum
                    </span>
                  </h1>
                  
                  <p className="text-amber-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10 px-4">
                    Encouraged by the substantial growth of our company, we are diversifying our products and services. We&apos;re introducing a new concept in retailing through our own retail network of Petrol Pumps.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="group relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-red-500/50">
                      <span className="relative z-10">Explore Our Services</span>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full border-2 border-white/30 transition-all duration-300 hover:scale-105">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
                  <div className="w-1.5 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Overview Section */}
          <div className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
              
              <div className="text-center mb-16">
                <div className="inline-block mb-4">
                  <span className="text-red-600 font-semibold tracking-wider text-sm uppercase">About Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  Company Overview
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full -ml-32 -mb-32"></div>
                
                <p className="text-slate-600 text-lg leading-relaxed text-center relative z-10 max-w-4xl mx-auto">
                  Khyber Petroleum (Pvt.) Ltd. has been established as a <span className="font-semibold text-slate-800">leading Petroleum company in Pakistan</span>. Our traditional business model is based on the accomplishment of fuel supply nationwide, consistent with top quality and services that exceed our customers&apos; expectations. Encouraged by the substantial growth of our company, we are diversifying our products and services. We are now introducing a new concept in retailing through our own retail network of Petrol Pumps. There is a great need for certified business partners in the near future to meet the growing demand for Lubricants, Engineering consultancy, and ongoing supply from numerous vendors.
                </p>
              </div>

              {/* Values Section */}
              <OurValue />
              {/* Directors Section */}
              <div className="my-20 bg-gradient-to-br from-slate-50 to-red-50 rounded-3xl p-10 shadow-lg border border-slate-200">
                <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Leadership Team</h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                  {[
                    { 
                      name: "Sohail Ahmad Naseem Awan", 
                      title: "Founder @ KPPL",
                      quote: "As the Founder of Khyber Petroleum Pvt Ltd, I am proud to lead a company dedicated to providing top-quality oil and gas solutions across Pakistan. Our mission is to fuel progress through innovation, reliability, and customer-focused service.",
                      image: "/sohail-ahmad-naseem-khyber-petroleum-owner.webp"
                    },
                    { 
                      name: "Mehboob Azhar Hashmi", 
                      title: "Director @ KPPL",
                      quote: "As Director of Khyber Petroleum Pvt Ltd, I am focused on driving excellence and sustainability in the energy sector. We are committed to providing efficient, reliable services while fostering innovation to meet future energy demands. Our goal is to power progress for our customers and communities.",
                      image: "/mehboob-azhar-hashmi-director-kppl.webp" 
                    }
                    
                  ].map((director, i) => (
                    <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="flex flex-col items-center text-center">
                        {/* Profile Image */}
                        <div className="w-48 h-48 rounded-full mb-6 overflow-hidden shadow-xl border-4 border-white">
                          <img 
                            src={director.image} 
                            alt={director.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Name and Title */}
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{director.name}</h3>
                        <p className="text-red-600 font-medium mb-6">{director.title}</p>
                        
                        {/* Quote */}
                        <div className="relative">
                          <svg className="w-8 h-8 text-slate-300 mb-2" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                          </svg>
                          <p className="text-slate-600 leading-relaxed text-sm">
                            {director.quote}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Journey Section */}
              <OurJourney />

              {/* Vision & Mission Grid */}
              <div className="grid md:grid-cols-2 gap-8 my-20">
                <OurVision />
                <OurMission />
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Partner With Us?
              </h2>
              <p className="text-red-200 text-xl mb-10">
                Join Pakistan&apos;s leading petroleum company and be part of our growth story
              </p>
              <button className="px-10 py-5 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold rounded-full hover:from-red-700 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-2xl">
                Get in Touch Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}