'use client';

import { useState } from 'react';
import { Zap, Building2, Droplet, Cog, TrendingUp, Users, Award, MapPin, ChevronRight, CheckCircle2, Target, Eye, Heart } from 'lucide-react';

export default function Company() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Years of Excellence', value: '10+', icon: Award },
    { label: 'Retail Outlets', value: '50+', icon: Building2 },
    { label: 'Business Partners', value: '100+', icon: Users },
    { label: 'Cities Served', value: '25+', icon: MapPin }
  ];

  const services = [
    {
      title: 'Fuel Supply Network',
      description: 'Nationwide fuel distribution ensuring consistent top-quality petroleum products and services that exceed customer expectations.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Retail Petrol Pumps',
      description: 'Expanding our footprint with modern retail outlets across Pakistan, bringing convenience and quality to every corner.',
      icon: Building2,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Lubricants Solutions',
      description: 'Premium quality lubricants for automotive and industrial applications, ensuring optimal performance and longevity.',
      icon: Droplet,
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Engineering Consultancy',
      description: 'Expert engineering consultation services to support infrastructure development and technical solutions.',
      icon: Cog,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const values = [
    {
      title: 'Our Mission',
      description: 'To provide exceptional petroleum products and services that power Pakistan\'s growth while maintaining the highest standards of quality and customer satisfaction.',
      icon: Target,
      color: 'bg-gradient-to-br from-red-500 to-red-600'
    },
    {
      title: 'Our Vision',
      description: 'To become Pakistan\'s most trusted and innovative energy solutions provider, leading the industry through excellence, sustainability, and unwavering commitment to our customers.',
      icon: Eye,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      title: 'Our Values',
      description: 'Integrity, innovation, and customer-centricity guide everything we do. We believe in building lasting relationships and contributing positively to the communities we serve.',
      icon: Heart,
      color: 'bg-gradient-to-br from-amber-500 to-amber-600'
    }
  ];

  const timeline = [
    { year: 'Founded', title: 'Company Establishment', description: 'Khyber Petroleum established as a leading petroleum company' },
    { year: 'Growth', title: 'Nationwide Expansion', description: 'Extended fuel supply network across Pakistan' },
    { year: 'Diversification', title: 'Retail Network Launch', description: 'Introduced our own chain of petrol pumps' },
    { year: 'Today', title: 'Industry Leader', description: 'Serving 100+ partners with comprehensive energy solutions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 pt-32 pb-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/20 mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Powering Pakistan's Progress
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Company Overview
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Leading Pakistan's energy sector with excellence, innovation, and unwavering commitment to quality.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                  <Icon className="w-8 h-8 text-red-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-red-50 text-red-600 mb-4">
              <Building2 className="w-4 h-4 mr-2" />
              About KPPL
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Building the Future of Energy in Pakistan
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Khyber Petroleum (Pvt.) Ltd. has established itself as a premier petroleum company in Pakistan. Our traditional business model centers on the accomplishment of fuel supply nationwide, delivering top quality products and services that consistently exceed our customers' expectations.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Encouraged by our substantial growth, we are diversifying our products and services. We're introducing an innovative concept in retailing through our own network of modern petrol pumps across the country.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Nationwide Coverage</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-amber-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-100 to-red-50 rounded-3xl p-8 shadow-2xl border border-slate-200">
              <img 
                src="/company.png" 
                alt="Khyber Petroleum Company Overview" 
                className="w-full h-auto rounded-2xl shadow-lg"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23f1f5f9' width='600' height='400'/%3E%3Ctext fill='%2394a3b8' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EKPPL%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Principles</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The fundamental values that drive our success and guide our journey towards excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-amber-100 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services & Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive energy solutions designed to meet the growing demands of Pakistan's dynamic market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                      <button className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all group/btn">
                        Learn More
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-3xl p-12 border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership - our story of growth and excellence.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-amber-500 rounded-full hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 inline-block">
                      <div className="text-red-600 font-bold text-sm mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-amber-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-br from-red-600 via-red-700 to-amber-600 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join our growing network of certified business partners and be part of Pakistan's energy future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Become a Partner
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}