'use client';

import { Shield, Heart, Leaf, AlertTriangle, Users, Award, CheckCircle2, Target, ClipboardCheck, Droplet, Wind, Flame, HardHat, FileText, TrendingUp, Globe, Zap } from 'lucide-react';

export default function HSE() {
  const hsePillars = [
    {
      icon: Heart,
      title: 'Health',
      description: 'Comprehensive occupational health programs ensuring employee well-being',
      color: 'from-red-500 to-pink-500',
      features: [
        'Medical surveillance & health monitoring',
        'Hazardous substance exposure control',
        'Ergonomic workplace assessments',
        'Mental health & wellness programs'
      ]
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'Stringent safety protocols protecting our people and operations',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Comprehensive risk identification',
        'Emergency response preparedness',
        'Regular safety training & drills',
        'Incident reporting & investigation'
      ]
    },
    {
      icon: Leaf,
      title: 'Environment',
      description: 'Sustainable practices minimizing our environmental footprint',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Environmental impact assessments',
        'Pollution control & monitoring',
        'Energy efficiency initiatives',
        'Carbon footprint reduction'
      ]
    }
  ];

  const safetyMeasures = [
    {
      icon: Flame,
      title: 'Fire Prevention',
      description: 'Advanced fire detection and suppression systems at all facilities'
    },
    {
      icon: Droplet,
      title: 'Spill Control',
      description: 'Rapid response protocols for containment and cleanup'
    },
    {
      icon: HardHat,
      title: 'Equipment Safety',
      description: 'Regular maintenance and inspection programs'
    },
    {
      icon: AlertTriangle,
      title: 'Hazard Mitigation',
      description: 'Proactive identification and risk reduction strategies'
    }
  ];

  const commitments = [
    {
      icon: Target,
      title: 'Zero Harm Goal',
      description: 'Striving for zero workplace injuries and incidents'
    },
    {
      icon: Globe,
      title: 'Environmental Stewardship',
      description: 'Protecting natural resources for future generations'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Transparent communication with local communities'
    },
    {
      icon: Award,
      title: 'Regulatory Excellence',
      description: 'Exceeding industry standards and compliance'
    }
  ];

  const stats = [
    { value: '0', label: 'Lost Time Injuries', icon: Shield },
    { value: '100%', label: 'Safety Training', icon: ClipboardCheck },
    { value: '24/7', label: 'HSE Monitoring', icon: AlertTriangle },
    { value: 'ISO', label: 'Certified Standards', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-cyan-700 to-teal-600 pt-32 pb-24 z-0">
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/20 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Safety First, Always
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Health, Safety & Environment
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Our unwavering commitment to protecting our people, communities, and the planet through excellence in HSE practices.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                  <Icon className="w-8 h-8 text-cyan-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20">
        {/* Introduction Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our HSE Commitment</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Health, Safety, and Environment (HSE) are critical components in the oil marketing industry, ensuring the protection and well-being of employees, customers, and the environment. The industry's operations pose significant health risks, such as exposure to hazardous substances and ergonomic challenges, making occupational health programs and medical surveillance essential.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Safety is paramount, necessitating the identification and mitigation of hazards like spills, fires, and equipment failures through stringent protocols, regular training, and emergency preparedness. Incident reporting and thorough investigations help prevent future occurrences.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl p-4 shadow-2xl border border-slate-200 overflow-hidden">
              <img 
                src="/hse.webp" 
                alt="Health Safety Environment - Khyber Petroleum" 
                className="w-full h-auto rounded-2xl shadow-lg"
                onError={(e) => {
                  e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23f1f5f9' width='600' height='400'/%3E%3Ctext fill='%2394a3b8' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EHSE Excellence%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>

        {/* Three Pillars Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Three Pillars of HSE</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our comprehensive approach covers every aspect of health, safety, and environmental protection.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {hsePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{pillar.description}</p>
                    
                    <div className="space-y-3">
                      {pillar.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Safety Measures */}
        <div className="mb-24 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Critical Safety Measures</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive protocols protecting our operations and personnel from potential hazards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyMeasures.map((measure, idx) => {
              const Icon = measure.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{measure.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{measure.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Environmental Protection */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-green-50 text-green-600 mb-4">
              <Leaf className="w-4 h-4 mr-2" />
              Environmental Stewardship
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Protecting Our Planet
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Environmental protection is equally crucial, requiring comprehensive impact assessments and pollution control measures to safeguard soil, water, and air quality. Sustainable practices, including energy efficiency and renewable energy adoption, help reduce the industry's carbon footprint.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Engaging with local communities and maintaining transparency in environmental reporting bolster these efforts. By adhering to regulatory frameworks and industry best practices, oil marketing companies can effectively manage HSE risks, ensuring a safer and more sustainable operation.
            </p>
            
            <div className="space-y-3">
              {[
                'Comprehensive environmental impact assessments',
                'Advanced pollution control & monitoring systems',
                'Energy efficiency & renewable energy programs',
                'Sustainable waste management practices',
                'Community engagement & transparency'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
              <Wind className="w-10 h-10 mb-4" />
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Air Quality Monitoring</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <Droplet className="w-10 h-10 mb-4" />
              <div className="text-3xl font-bold mb-2">Zero</div>
              <div className="text-green-100">Water Contamination</div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white">
              <Zap className="w-10 h-10 mb-4" />
              <div className="text-3xl font-bold mb-2">30%</div>
              <div className="text-teal-100">Energy Savings</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white">
              <TrendingUp className="w-10 h-10 mb-4" />
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-cyan-100">Years Incident-Free</div>
            </div>
          </div>
        </div>

        {/* Commitments Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Commitments</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Building a safer, healthier, and more sustainable future for all stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((commitment, idx) => {
              const Icon = commitment.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{commitment.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{commitment.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Training & Certification */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ClipboardCheck className="w-12 h-12 text-blue-600 mb-6" />
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Training & Certification</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our comprehensive HSE training programs ensure every team member is equipped with the knowledge and skills to maintain the highest safety standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Regular Safety Training</h4>
                    <p className="text-sm text-slate-600">Ongoing programs for all staff levels</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Industry Certifications</h4>
                    <p className="text-sm text-slate-600">Compliance with international standards</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Emergency Drills</h4>
                    <p className="text-sm text-slate-600">Regular simulations and preparedness exercises</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">HSE Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Safety Compliance</span>
                    <span className="text-sm font-bold text-blue-600">100%</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Environmental Standards</span>
                    <span className="text-sm font-bold text-green-600">98%</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{width: '98%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Employee Training</span>
                    <span className="text-sm font-bold text-teal-600">100%</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Safety is Our Priority
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Working together to create a safer, healthier, and more sustainable future for everyone.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Download HSE Policy
            </a>
            <a
              href="mailto:Info@kppl.pk?subject=HSE Inquiry"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              Contact HSE Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}