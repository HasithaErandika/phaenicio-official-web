import React from 'react';
import { Link } from 'react-router-dom';
import { FiTarget, FiCpu, FiUsers, FiGlobe, FiDatabase, FiArrowRight, FiShield, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  return (
    <div className="flex flex-col animate-in fade-in duration-700 pt-[140px] pb-10 bg-slate-50 relative">
      
      {/* Shared Animations & Effects */}
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
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
      `}</style>

      {/* Subpage Header Design (Minimal, Clean, Focused) */}
      <header className="relative pt-16 pb-24 px-6 md:px-12 overflow-hidden border-b border-slate-200/60">
        <div className="absolute inset-0 pointer-events-none hero-grid z-0"></div>
        {/* Soft Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center fade-up-element">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/80 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
            About Phaenicio
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-950 text-balance">
            Building the <br className="hidden sm:block" /> 
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Next Frontier of Discovery.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty font-medium">
            We empower specialized scientific, technical, and academic communities by providing the precision-driven orchestration tools they need to collaborate without friction.
          </p>
        </div>
      </header>

      {/* Mission Statement Panel - Glassmorphism Aesthetic */}
      <section className="py-24 px-6 md:px-12 relative z-10 -mt-10">
        <div className="max-w-5xl mx-auto">
          <div className="p-10 md:p-16 rounded-[2.5rem] border border-white/60 bg-white/50 backdrop-blur-2xl relative overflow-hidden shadow-xl shadow-slate-200/50 group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-700 fade-up-element" style={{animationDelay: '0.1s'}}>
            {/* Inner Subtle Glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-400/10 rounded-full blur-[80px] group-hover:bg-indigo-400/20 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center">
              <div className="md:w-1/3 shrink-0">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3 block font-mono">Our Core Mission</span>
                <h2 className="text-3xl font-extrabold text-slate-950 leading-tight">Why we <br/>build.</h2>
              </div>
              
              <div className="md:w-2/3 border-l-2 border-indigo-100 pl-8 md:pl-12">
                <p className="text-2xl md:text-3xl text-slate-800 font-medium leading-[1.4] tracking-tight text-pretty">
                  "Meaningful progress happens at the intersection of specialized knowledge and purpose-built technology. We build the bridges that connect international research environments."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Core Pillars (Premium Grid Layout) */}
      <section className="py-20 px-6 md:px-12 bg-transparent relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 fade-up-element" style={{animationDelay: '0.2s'}}>
             <span className="text-xs uppercase font-mono tracking-widest text-indigo-600 font-bold block mb-4">Methodology</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-950">How We Operate</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto font-medium">We strip away administrative friction so researchers can focus entirely on raw science.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <FiTarget size={24} />, 
                title: "Precision Engineering", 
                text: "Academic environments require absolute stability. Every infrastructure component we deploy is engineered for security, fault tolerance, and exact data fidelity." 
              },
              { 
                icon: <FiCpu size={24} />, 
                title: "Intelligent Automation", 
                text: "Our nodes leverage AI to automate tedious workflows—from structural formatting and citation matching to methodology bias checks." 
              },
              { 
                icon: <FiUsers size={24} />, 
                title: "Decentralized Networks", 
                text: "We don't build general social networks. We develop domain-specific hubs that strictly adhere to the rigorous peer-review standards of true academia." 
              },
              { 
                icon: <FiShield size={24} />, 
                title: "Absolute Security", 
                text: "Data sovereignty is paramount. We implement enterprise-grade encryption and granular access controls to protect sensitive research assets." 
              },
              { 
                icon: <FiGlobe size={24} />, 
                title: "Global Accessibility", 
                text: "Our tools are designed to bridge geographic divides, ensuring researchers everywhere have access to the same robust computational resources." 
              },
              { 
                icon: <FiTrendingUp size={24} />, 
                title: "Scalable Infrastructure", 
                text: "From small lab groups to international consortiums, our systems dynamically scale to meet the computational demands of any research phase." 
              }
            ].map((pillar, i) => (
              <div 
                key={i} 
                className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_10px_40px_rgba(99,102,241,0.08)] hover:-translate-y-1 transition-all duration-500 flex flex-col group fade-up-element"
                style={{animationDelay: `${0.3 + (i * 0.1)}s`}}
              >
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-950">{pillar.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed flex-grow">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Mesh Network Panel (Premium Dark Card) */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto rounded-[3rem] bg-slate-950 relative overflow-hidden shadow-2xl shadow-slate-900/20 fade-up-element" style={{animationDelay: '0.5s'}}>
          
          {/* Ambient Dark Mode Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
          
          {/* Subtle Grid overlay for dark section */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
          }}></div>

          <div className="relative z-10 py-24 px-8 md:px-16 flex flex-col items-center text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 mb-8 backdrop-blur-md shadow-inner">
               <FiDatabase size={32} />
            </div>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-widest text-indigo-300 mb-6 backdrop-blur-md">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse-dot shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span>
              Mesh Network Architecture
            </span>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-white text-balance max-w-3xl">
              Decentralized Global Clusters
            </h2>
            
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed text-balance max-w-3xl font-medium mb-12">
              Phaenicio operates as a synchronized global engine. Our compute nodes and validation registries are distributed across high-availability regions, facilitating sub-second metadata synchronization worldwide.
            </p>

            <Link 
              to="/research" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-sm transition-all duration-300 hover:bg-indigo-50 shadow-[0_0_24px_rgba(255,255,255,0.1)] hover:shadow-[0_0_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group"
            >
              <span>Explore Our Technology</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;