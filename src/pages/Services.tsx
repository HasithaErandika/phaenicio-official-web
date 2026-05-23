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

      {/* Professional Subpage Header */}
      <header className="relative pt-28 pb-20 px-6 md:px-12 overflow-hidden border-b border-slate-200/60 bg-white">
        {/* Clean Topographic SVG Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895-2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230f172a' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
        
        {/* Ambient Corner Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-secondary/5 via-primary/5 to-transparent blur-[80px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10 fade-up-element">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-600 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse-dot"></span>
              Phaenicio Ecosystem
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-text-h font-display mb-6 md:mb-0">
              Our Services <br className="hidden sm:block" /> 
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                & Platforms.
              </span>
            </h1>
          </div>
          
          <div className="max-w-xl text-left">
            <p className="text-lg text-text-muted leading-relaxed font-medium border-l-2 border-slate-200 pl-6">
              Purpose-built digital infrastructure, compute grids, and intelligence layers for scientific and academic communities.
            </p>
          </div>
        </div>
      </header>

      {/* Services Section (Single Flagship Item) */}
      <section className="py-24 px-6 md:px-12 flex-grow relative z-10 -mt-10">
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => (
            <article 
              key={service.id} 
              className="p-10 md:p-16 rounded-[2.5rem] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden fade-up-element bg-white/60 backdrop-blur-2xl border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_var(--color-secondary-glow)] hover:-translate-y-1"
              style={{ animationDelay: `${0.1 + (index * 0.1)}s` }}
            >
              {/* Ambient Glow for Flagship */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none transition-colors duration-700 group-hover:bg-secondary/10"></div>

              <div className="relative z-10 md:w-3/4">
                <div className="flex justify-between items-start mb-8">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm bg-secondary-light text-secondary border border-secondary/20">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-dot"></span>
                    {service.badge}
                  </span>
                  
                  <span className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm bg-secondary text-white shadow-secondary-glow group-hover:scale-110 group-hover:shadow-secondary/40">
                    {service.icon}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-text-h mb-6 tracking-tight font-display">{service.title}</h2>
                <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-12 font-medium text-pretty">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-8 border-t border-slate-100/80">
                {service.isExternal ? (
                  <a 
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-dark text-white rounded-full text-sm font-bold transition-all shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] group/link hover:-translate-y-0.5 active:translate-y-0 hover:bg-primary"
                  >
                    <span>{service.actionText}</span>
                    <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-dark text-white rounded-full text-sm font-bold transition-all shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] group/link hover:-translate-y-0.5 active:translate-y-0 hover:bg-primary"
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