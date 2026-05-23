import React from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 'zosterix',
      title: 'Zosterix Research Grid',
      badge: 'Flagship Platform',
      isFlagship: true,
      icon: <FiGlobe size={28} />,
      description: 'Our flagship global research networking platform. Enables students, researchers, and supervisors to verify academic identities, publish research journals, seek mentorship, and collaborate through secure discussion structures.',
      link: 'https://zosterix.phaenicio.com/',
      isExternal: true,
      actionText: 'Access Zosterix Grid'
    }
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/80 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
            Phaenicio Ecosystem
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-950 text-balance">
            Our Services <br className="hidden sm:block" /> 
            <span className="bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">
              & Platforms.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto text-pretty font-medium">
            Purpose-built digital infrastructure, compute grids, and intelligence layers for scientific and academic communities.
          </p>
        </div>
      </header>

      {/* Services Section (Single Flagship Item) */}
      <section className="py-24 px-6 md:px-12 flex-grow relative z-10 -mt-10">
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <article 
              key={service.id} 
              className="p-10 md:p-16 rounded-[2.5rem] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden fade-up-element bg-white/60 backdrop-blur-2xl border border-indigo-100 shadow-[0_8px_30px_rgba(99,102,241,0.06)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.12)] hover:-translate-y-1"
              style={{ animationDelay: `${0.1 + (index * 0.1)}s` }}
            >
              {/* Ambient Glow for Flagship */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-700 group-hover:bg-indigo-500/10"></div>

              <div className="relative z-10 md:w-3/4">
                <div className="flex justify-between items-start mb-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm bg-indigo-50 text-indigo-600 border border-indigo-100">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse-dot"></span>
                    {service.badge}
                  </span>
                  
                  <span className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm bg-indigo-600 text-white shadow-indigo-500/20 group-hover:scale-110 group-hover:shadow-indigo-500/40">
                    {service.icon}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 mb-6 tracking-tight">{service.title}</h2>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 font-medium text-pretty">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-8 border-t border-slate-100/80">
                {service.isExternal ? (
                  <a 
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-full text-sm font-bold transition-all shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] group/link hover:-translate-y-0.5 active:translate-y-0 hover:bg-slate-800"
                  >
                    <span>{service.actionText}</span>
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-full text-sm font-bold transition-all shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] group/link hover:-translate-y-0.5 active:translate-y-0 hover:bg-slate-800"
                  >
                    <span>{service.actionText}</span>
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Services;