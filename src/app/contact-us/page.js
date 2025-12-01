'use client';

import { MapPin, Building2, Mail, Phone, Clock, Users, TrendingUp, MessageCircle, Send, Facebook, Twitter, Linkedin, Instagram, ExternalLink } from 'lucide-react';

export default function Contact_us() {
  const contactInfo = [
    {
      icon: Building2,
      label: 'Registered Office',
      value: '22-J1 WAPDA Town Lahore',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      label: 'Head Office',
      value: 'G-50 Johar Town Lahore',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Info@kppl.pk',
      link: 'mailto:Info@kppl.pk',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Phone,
      label: 'Phone Number',
      value: '+92 345-8482135',
      link: 'tel:+923458482135',
      color: 'from-green-500 to-green-600'
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: 'Facebook',
      url: '#',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: '#',
      color: 'bg-blue-400 hover:bg-blue-500'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: '#',
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: '#',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    }
  ];

  const businessOpportunities = [
    {
      icon: TrendingUp,
      title: 'Investment Opportunities',
      description: 'Open for strategic partnerships and investments'
    },
    {
      icon: Users,
      title: 'Business Partners',
      description: 'Join our certified partner network'
    },
    {
      icon: MessageCircle,
      title: 'Consultancy Services',
      description: 'Expert engineering and technical support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-amber-600 pt-32 pb-20 z-0">
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/20 mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            We'd Love to Hear From You
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Connect with Khyber Petroleum for business inquiries, partnerships, and investment opportunities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            {/* Company Info Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-br from-slate-900 to-red-900 p-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Khyber Petroleum Pvt Ltd.
                </h2>
                <p className="text-white/80">
                  Your trusted energy solutions partner
                </p>
              </div>

              <div className="p-8 space-y-6">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-slate-500 mb-1">{info.label}</div>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-lg font-semibold text-slate-900 hover:text-red-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-lg font-semibold text-slate-900">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Investment Opportunities */}
            <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-3xl p-8 border border-amber-100 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-red-600" />
                Investment Opportunities
              </h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Investment opportunities are open. There is a great need for certified business partners to meet the growing demand of Lubricants, Engineering consultancy, and ongoing supply from numerous vendors.
              </p>

              <div className="space-y-3 mb-6">
                {businessOpportunities.map((opp, idx) => {
                  const Icon = opp.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{opp.title}</div>
                        <div className="text-sm text-slate-600">{opp.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="https://wa.me/923458482135?text=Assalam%20o%20Alaikum!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Send className="w-5 h-5" />
                Contact Us on WhatsApp
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-xl ${social.color} text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1`}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-600" />
                Business Hours
              </h3>
              <div className="space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span className="text-red-600 font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Map */}
          <div className="space-y-6">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-slate-100 to-red-50 rounded-3xl p-4 shadow-2xl border border-slate-200 overflow-hidden">
                <img 
                  src="/petrol.jpg" 
                  alt="Khyber Petroleum Facility" 
                  className="w-full h-auto rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23f1f5f9' width='600' height='400'/%3E%3Ctext fill='%2394a3b8' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EKPPL Facility%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <div className="bg-gradient-to-r from-red-600 to-amber-600 p-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Find Us on Map
                </h3>
              </div>
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.1234567890!2d74.3436!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzEwLjkiTiA3NMKwMjAnMzcuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose KPPL?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Quality Assurance</div>
                    <div className="text-sm text-slate-600">Top-grade petroleum products</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Nationwide Network</div>
                    <div className="text-sm text-slate-600">50+ retail outlets across Pakistan</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Expert Support</div>
                    <div className="text-sm text-slate-600">Professional engineering consultancy</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Reliable Service</div>
                    <div className="text-sm text-slate-600">Exceeding customer expectations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-slate-900 to-red-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Partnership?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join the growing network of successful KPPL partners and be part of Pakistan's energy future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/923458482135?text=Assalam%20o%20Alaikum!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-red-600 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:info@kppl.pk"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}