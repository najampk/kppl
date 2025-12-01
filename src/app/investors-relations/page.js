'use client';

import { TrendingUp, Users, Handshake, Target, DollarSign, BarChart3, Briefcase, CheckCircle2, ArrowRight, FileText, PieChart, Award, Zap, Globe, Shield } from 'lucide-react';

export default function Investors_Relations() {
  const investmentOpportunities = [
    {
      icon: Zap,
      title: 'Retail Petrol Pumps',
      description: 'Franchise opportunities for modern petrol stations across Pakistan',
      potential: 'High ROI',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Distribution Partnership',
      description: 'Become a certified distributor for premium lubricants and petroleum products',
      potential: 'Growing Market',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Briefcase,
      title: 'Engineering Consultancy',
      description: 'Partner in providing expert engineering solutions and technical services',
      potential: 'Stable Income',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Globe,
      title: 'Supply Chain Network',
      description: 'Join our vendor network for ongoing supply and logistics operations',
      potential: 'Long-term Growth',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Trusted Brand',
      description: 'Partner with a reputable and established name in Pakistan\'s energy sector'
    },
    {
      icon: TrendingUp,
      title: 'Market Growth',
      description: 'Tap into the rapidly expanding petroleum and lubricants market'
    },
    {
      icon: Award,
      title: 'Quality Standards',
      description: 'Access to certified, top-quality products and professional support'
    },
    {
      icon: Handshake,
      title: 'Strong Support',
      description: 'Comprehensive training, marketing support, and business guidance'
    }
  ];

  const investmentProcess = [
    {
      step: '01',
      title: 'Initial Inquiry',
      description: 'Contact our investor relations team to discuss opportunities'
    },
    {
      step: '02',
      title: 'Business Review',
      description: 'We evaluate mutual fit and discuss investment requirements'
    },
    {
      step: '03',
      title: 'Due Diligence',
      description: 'Complete documentation and certification process'
    },
    {
      step: '04',
      title: 'Partnership Launch',
      description: 'Begin operations with full KPPL support and resources'
    }
  ];

  const stats = [
    { value: '50+', label: 'Active Partners', icon: Users },
    { value: '25+', label: 'Cities Covered', icon: Globe },
    { value: '100M+', label: 'PKR Revenue', icon: DollarSign },
    { value: '15%', label: 'Annual Growth', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-700 to-teal-600 pt-32 pb-24 z-0">
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/20 mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Investment Opportunities Open
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Investor Relations
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Partner with Pakistan's leading petroleum company and capitalize on the booming energy sector growth.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/923458482135?text=I'm%20interested%20in%20investment%20opportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <Handshake className="w-5 h-5" />
                Become a Partner
              </a>
              <a
                href="#opportunities"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                View Opportunities
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                  <Icon className="w-8 h-8 text-green-200 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Image Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-20">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-slate-100 to-green-50 rounded-3xl p-4 shadow-2xl border border-slate-200 overflow-hidden">
            <img 
              src="/investor.png" 
              alt="Investor Relations - Khyber Petroleum" 
              className="w-full h-auto rounded-2xl shadow-lg"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'%3E%3Crect fill='%23f1f5f9' width='1200' height='600'/%3E%3Ctext fill='%2394a3b8' font-size='32' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EInvestor Relations%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Value Proposition */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Why Invest with KPPL?
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Investment opportunities are open. There is a great need for certified business partners to meet the growing demand for lubricants, engineering consultancy, and ongoing supply from numerous vendors.
          </p>
        </div>

        {/* Investment Opportunities */}
        <div id="opportunities" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Investment Opportunities</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Explore diverse partnership options tailored to different investment capacities and business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {investmentOpportunities.map((opp, idx) => {
              const Icon = opp.icon;
              return (
                <div key={idx} className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${opp.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900">{opp.title}</h3>
                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                          {opp.potential}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-4">{opp.description}</p>
                      <button className="text-green-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all group/btn">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-24 bg-gradient-to-br from-slate-50 to-green-50 rounded-3xl p-12 border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Partnership Benefits</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Join a winning team and enjoy comprehensive support for your business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Investment Process */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Get Started</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our streamlined partnership process makes it easy to begin your journey with KPPL.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-teal-500 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {investmentProcess.map((process, idx) => (
                <div key={idx} className={`flex items-center gap-8 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${idx % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 inline-block hover:shadow-2xl transition-all hover:-translate-y-1">
                      <div className="text-green-600 font-bold text-sm mb-2">Step {process.step}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{process.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full border-4 border-white shadow-2xl z-10 hidden lg:flex items-center justify-center text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Partner Requirements</h2>
              <div className="space-y-4">
                {[
                  'Valid business registration and legal documentation',
                  'Commitment to KPPL quality and service standards',
                  'Adequate investment capacity based on partnership type',
                  'Strategic location or distribution network (where applicable)',
                  'Willingness to undergo training and certification',
                  'Long-term business vision aligned with KPPL goals'
                ].map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
              <PieChart className="w-16 h-16 text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Invest?</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our investor relations team is ready to discuss opportunities tailored to your investment goals and capabilities.
              </p>
              <div className="space-y-3">
                <a
                  href="https://wa.me/923458482135?text=I'm%20interested%20in%20investment%20opportunities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl text-center"
                >
                  Schedule Consultation
                </a>
                <a
                  href="mailto:Info@kppl.pk?subject=Investment Inquiry"
                  className="block w-full px-6 py-3 bg-white border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all text-center"
                >
                  Email Investor Relations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 via-green-900 to-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BarChart3 className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join Pakistan's Energy Future
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of a rapidly growing industry with a trusted market leader.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/923458482135?text=I'm%20interested%20in%20investment%20opportunities"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <Handshake className="w-5 h-5" />
              Start Your Partnership
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              <Target className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}