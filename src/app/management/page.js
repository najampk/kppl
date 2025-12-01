'use client';

import { useState } from 'react';

export default function Management() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const directors = [
    {
      id: 1,
      name: "Sohail Ahmad Naseem Awan",
      title: "Founder & Chief Executive Officer",
      company: "KPPL",
      quote: "As the Founder of Khyber Petroleum Pvt Ltd, I am proud to lead a company dedicated to providing top-quality oil and gas solutions across Pakistan. Our mission is to fuel progress through innovation, reliability, and customer-focused service.",
      image: "/sohail-ahmad-naseem-khyber-petroleum-owner.webp",
      expertise: ["Strategic Leadership", "Energy Sector Innovation", "Business Development"],
      linkedin: "#",
      email: "sohail@kppl.pk"
    },
    {
      id: 2,
      name: "Mehboob Azhar Hashmi",
      title: "Director & Chief Operations Officer",
      company: "KPPL",
      quote: "As Director of Khyber Petroleum Pvt Ltd, I am focused on driving excellence and sustainability in the energy sector. We are committed to providing efficient, reliable services while fostering innovation to meet future energy demands. Our goal is to power progress for our customers and communities.",
      image: "/mehboob-azhar-hashmi-director-kppl.webp",
      expertise: ["Operational Excellence", "Sustainability", "Customer Relations"],
      linkedin: "#",
      email: "mehboob@kppl.pk"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-amber-600 pt-32 pb-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm border border-white/30">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              Leadership Excellence
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Meet Our Visionary Leaders
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Driving innovation, sustainability, and excellence in Pakistan's energy sector through decades of combined expertise and unwavering commitment.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-8 text-white/80">
            
             
           
          </div>
        </div>
      </div>

      {/* Leadership Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {directors.map((director, index) => (
            <div
              key={director.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2">
                {/* Card Header with Image */}
                <div className="relative bg-gradient-to-br from-slate-50 to-red-50 pt-12 pb-8 px-8">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-100 to-transparent rounded-full -mr-32 -mt-32 opacity-50"></div>
                  
                  <div className="relative flex flex-col items-center">
                    {/* Profile Image */}
                    <div className={`relative transition-all duration-500 ${hoveredCard === index ? 'scale-105' : 'scale-100'}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-amber-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                      <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-4 ring-red-100">
                        <img
                          src={director.image}
                          alt={director.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ddd' width='200' height='200'/%3E%3Ctext fill='%23999' font-size='40' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${director.name.split(' ').map(n => n[0]).join('')}%3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>
                    </div>

                    {/* Name & Title */}
                    <div className="text-center mt-6">
                      <h2 className="text-2xl font-bold text-slate-900 mb-1">
                        {director.name}
                      </h2>
                      <p className="text-red-600 font-semibold text-sm mb-1">
                        {director.title}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"/>
                        </svg>
                        <span>{director.company}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  {/* Quote */}
                  <div className="relative mb-6">
                    <svg className="absolute -top-2 -left-2 w-10 h-10 text-red-100" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                    </svg>
                    <p className="text-slate-600 leading-relaxed pl-8 text-sm italic">
                      {director.quote}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {director.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-gradient-to-r from-red-50 to-amber-50 text-red-700 text-xs font-medium rounded-full border border-red-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="flex gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={`mailto:${director.email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium text-sm hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                      Contact
                    </a>
                    <a
                      href={director.linkedin}
                      className="flex items-center justify-center px-4 py-3 bg-slate-100 text-slate-700 rounded-xl font-medium text-sm hover:bg-slate-200 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Values Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Leadership Principles
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              The core values that guide our leadership team in building a sustainable energy future for Pakistan.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Innovation",
                description: "Pioneering new solutions for energy challenges"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Sustainability",
                description: "Building an eco-friendly energy ecosystem"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Integrity",
                description: "Upholding the highest ethical standards"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Customer Focus",
                description: "Delivering excellence in every interaction"
              }
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-amber-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}