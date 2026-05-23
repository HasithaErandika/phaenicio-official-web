import React from 'react';
import nandunImg from '../assets/nandun.jpg';
import hasithaImg from '../assets/hasitha.jpg';
import { FiMail, FiMessageCircle, FiLinkedin, FiSend, FiActivity } from 'react-icons/fi';

const Contact = () => {
  const founders = [
    {
      name: "Nandun Samarasekara",
      role: "Co-founder & Tech Lead",
      email: "nandunneelaka@gmail.com",
      image: nandunImg,
      linkedin: "https://linkedin.com/in/nandun-samarasekara",
    },
    {
      name: "Hasitha Erandika",
      role: "Co-founder & Systems Architect",
      email: "wickramasinghe.erandika@gmail.com",
      image: hasithaImg,
      linkedin: "https://linkedin.com/in/hasitha-erandika",
    },
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700 pt-[140px] pb-10 bg-slate-50 min-h-screen relative">
      
      {/* Shared Animations & Ambient Backgrounds */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        .animate-pulse-dot {
          animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .hero-grid {
          background-image: linear-gradient(to right, rgb(226 232 240 / 0.6) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgb(226 232 240 / 0.6) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at 50% 10%, black, transparent 80%);
          -webkit-mask-image: radial-gradient(circle at 50% 10%, black, transparent 80%);
        }
        .fade-up-element {
            animation: fadeUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(20px);
        }
        @keyframes fadeUp {
            to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Hero Section */}
      <header className="relative pt-16 pb-24 px-6 md:px-12 overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0 pointer-events-none hero-grid z-0"></div>
        {/* Soft Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center fade-up-element">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/80 text-xs font-semibold text-slate-700 mb-6 shadow-sm uppercase tracking-wider">
            <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
            Direct Line to the Founders
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-950 text-balance">
            Get in <br className="hidden sm:block" /> 
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Touch.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty font-medium">
            We are always open to research collaborations, academic feedback, and institutional inquiries about the Zosterix ecosystem.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="py-24 px-6 md:px-12 flex-grow relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start text-left">
          
          {/* Left Column: Founders & Comms Info */}
          <div className="flex flex-col gap-8 fade-up-element" style={{ animationDelay: '0.1s' }}>
            <div>
              <h2 className="text-3xl font-extrabold mb-3 text-slate-950 tracking-tight">System Architects</h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">Direct access to the core team behind Phaenicio.</p>
            </div>
            
            <div className="flex flex-col gap-6">
              {founders.map((founder, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_10px_30px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-all duration-500 flex items-center gap-6 max-sm:flex-col max-sm:items-start group"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-inner border border-slate-100/50 shrink-0 relative bg-slate-50">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 rounded-2xl pointer-events-none"></div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-1 text-slate-950 tracking-tight">{founder.name}</h3>
                    <p className="text-xs text-indigo-600 mb-5 font-bold font-mono uppercase tracking-wider">{founder.role}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm font-semibold">
                      <a 
                        href={`mailto:${founder.email}`} 
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors border border-slate-100"
                      >
                        <FiMail className="text-lg" /> <span>Email</span>
                      </a>
                      <a 
                        href={founder.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-700 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-colors border border-slate-100"
                      >
                        <FiLinkedin className="text-lg" /> <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-indigo-100 shadow-[0_8px_30px_rgba(99,102,241,0.06)] relative overflow-hidden fade-up-element" style={{ animationDelay: '0.2s' }}>
            {/* Subtle glow behind form */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 mb-10">
              <div className="w-14 h-14 bg-indigo-50 border border-indigo-100/50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                <FiMessageCircle />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-950 mb-3 tracking-tight">Send an Inquiry</h2>
              <p className="text-base text-slate-600 font-medium">For partnership proposals, compute nodes, or general questions.</p>
            </div>

            <form
              className="relative z-10 flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white/80 border border-slate-200/80 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-400 shadow-sm"
                    placeholder="Jane Doe"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white/80 border border-slate-200/80 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-400 shadow-sm"
                    placeholder="jane@university.edu"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="subject" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-2">Subject Area</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-white/80 border border-slate-200/80 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all appearance-none cursor-pointer shadow-sm"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select an inquiry type...</option>
                    <option value="General inquiry">General Inquiry</option>
                    <option value="Research partnership">Institutional / Research Partnership</option>
                    <option value="Zosterix feedback">Zosterix Platform Feedback</option>
                    <option value="Technical support">Compute Node & Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider pl-2">Message payload</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white/80 border border-slate-200/80 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-slate-400 min-h-[160px] resize-y shadow-sm"
                  placeholder="Detail your requirements, timeline, or feedback here..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full mt-4 py-4 md:py-5 bg-slate-950 text-white rounded-full font-bold text-sm transition-all duration-300 hover:bg-slate-800 active:scale-[0.98] shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] flex items-center justify-center gap-2 group cursor-pointer hover:-translate-y-0.5"
              >
                <span>Transmit Inquiry</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Deep Tech Footer */}
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-200/80 flex justify-between items-center text-[10px] font-mono tracking-widest text-slate-400 uppercase fade-up-element" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
            </span>
            PHAENICIO_COMM_LINK
          </div>
          <div className="flex items-center gap-2 text-indigo-500 font-bold">
            SECURE_CHANNEL_ESTABLISHED
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;