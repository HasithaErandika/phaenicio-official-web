import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="flex flex-col pt-[140px] pb-10 animate-in fade-in duration-700 bg-slate-50 relative">
      {/* Custom Styles for Hero Animations */}
      <style>{`
        .hero-grid {
          background-image: linear-gradient(to right, rgb(226 232 240 / 0.6) 1px, transparent 1px), 
                            linear-gradient(to bottom, rgb(226 232 240 / 0.6) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at 50% 28%, black, transparent 75%);
          -webkit-mask-image: radial-gradient(circle at 50% 28%, black, transparent 75%);
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
        .animate-pulse-dot {
          animation: pulse-dot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-16 pb-28 px-6 md:px-12 overflow-hidden border-b border-slate-200/60 bg-transparent">
        <div className="absolute inset-0 pointer-events-none hero-grid z-0"></div>
        {/* Subtle Ambient balanced glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200/80 text-xs font-semibold text-slate-700 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot shadow-[0_0_8px_var(--color-primary-glow)]"></span>
            Global Research & Compute Infrastructure
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 text-text-h text-balance font-display">
            Engineering the <br />
            <span className="bg-gradient-to-r from-primary via-text-h to-secondary bg-clip-text text-transparent">
              Future of Discovery.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-2xl text-balance font-medium">
            Phaenicio is a focused systems design house building specialized computing grids and discovery networks. We parent a growing suite of digital tools designed to connect border silos and accelerate scientific research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a 
              href="#products" 
              className="px-8 py-4 bg-neutral-dark text-white rounded-full font-semibold transition-all duration-300 hover:bg-primary shadow-[0_8px_20px_rgba(15,23,42,0.15)] hover:shadow-[0_12px_24px_rgba(206,0,16,0.25)] flex items-center justify-center gap-2 group text-sm hover:scale-105 active:scale-95"
            >
              <span>Explore Our Ecosystem</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              to="/about" 
              className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-slate-200 hover:border-slate-300 text-text rounded-full font-semibold transition-all duration-300 shadow-sm hover:bg-white flex items-center justify-center gap-2 text-sm hover:scale-105 active:scale-95 hover:text-secondary"
            >
              Learn About Phaenicio
            </Link>
          </div>
        </div>
      </section>

      {/* Product Ecosystem Section */}
      <section id="products" className="py-24 px-6 md:px-12 bg-transparent relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase font-mono tracking-widest text-secondary font-bold block mb-4">Product Ecosystem</span>
            <h2 className="text-4xl font-extrabold tracking-tight mb-6 text-text-h font-display">
              The Phaenicio Suite
            </h2>
            <p className="text-lg text-text-muted leading-relaxed text-balance font-medium">
              Each tool in our ecosystem is designed to solve a specific bottle-neck in global scientific and academic discovery workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Zosterix Premium Card */}
            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-br from-slate-200 to-transparent overflow-hidden group hover:shadow-2xl hover:shadow-secondary-glow transition-all duration-500">
              <div className="absolute inset-0 bg-white/45 backdrop-blur-xl z-0"></div>
              
              <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row gap-10 justify-between items-start md:items-center bg-white/50 backdrop-blur-2xl rounded-[calc(2rem-1px)]">
                <div className="flex-grow max-w-3xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-light text-secondary border border-secondary/20 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse-dot"></span>
                    Flagship Product
                  </span>
                  <h3 className="text-3xl font-extrabold mb-4 text-text-h font-display">Zosterix</h3>
                  <p className="text-lg text-text-muted leading-relaxed mb-8">
                    Our flagship global research networking and compute environment. Zosterix provides the secure infrastructure needed for researchers, students, and supervisors to verify academic identities, publish preprints, and collaborate on high-sensitivity datasets.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-medium text-text">
                    <div className="flex items-center gap-3 bg-white/60 py-2 px-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_var(--color-secondary-glow)]"></div>
                      Verified Peer Identity (ORCID)
                    </div>
                    <div className="flex items-center gap-3 bg-white/60 py-2 px-4 rounded-xl border border-slate-100 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_var(--color-secondary-glow)]"></div>
                      Secure Mentorship Portals
                    </div>
                  </div>
                </div>
                
                <div className="shrink-0 w-full md:w-auto mt-4 md:mt-0">
                  <a 
                    href="https://zosterix.phaenicio.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full px-8 py-4 bg-neutral-dark text-white rounded-full font-semibold hover:bg-secondary transition-all text-center text-sm shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_24px_var(--color-secondary-glow)] hover:-translate-y-0.5 active:translate-y-0 hover:scale-[1.02]"
                  >
                    Access Zosterix Grid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Vision Section */}
      <section className="py-24 px-6 md:px-12 bg-slate-100/50 relative border-y border-slate-200/50">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary-light/50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
          <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold block mb-6">Our Vision</span>
          <p className="text-2xl md:text-3xl text-slate-800 leading-[1.4] font-medium tracking-tight text-balance">
            "At Phaenicio, we believe the tools of discovery must match the speed and scale of the research they support. By leveraging AI-powered orchestration and robust micro-computing nodes, we build bridges between complex academic problems and elegant, globally resilient solutions."
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="my-24 mx-6 md:mx-12 text-center relative overflow-hidden rounded-[2.5rem] bg-neutral-dark">
        {/* Subtle Dark Mode Glows */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/15 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto py-24 px-8">
          <h2 className="text-4xl font-extrabold tracking-tight mb-5 text-white font-display">Join the Future of Discovery</h2>
          <p className="text-lg text-slate-300 mb-10 leading-relaxed text-balance">
            Be part of a growing ecosystem dedicated to scientific, academic, and technical excellence. Let's build the infrastructure of tomorrow together.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-neutral-dark rounded-full font-bold text-sm transition-all duration-300 hover:bg-primary-light hover:text-primary shadow-[0_0_24px_rgba(255,255,255,0.1)] hover:shadow-[0_0_32px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 group"
          >
            <span>Get in touch</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;