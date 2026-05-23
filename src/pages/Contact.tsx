import nandunImg from '../assets/nandun.jpg';
import hasithaImg from '../assets/hasitha.jpg';
import { FiMail, FiMessageCircle, FiLinkedin, FiSend } from 'react-icons/fi';

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

      {/* Professional Subpage Header */}
      <header className="relative pt-28 pb-20 px-6 md:px-12 overflow-hidden border-b border-slate-200/60 bg-white">
        {/* Clean Topographic SVG Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230f172a' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
        
        {/* Ambient Corner Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 via-secondary/5 to-transparent blur-[80px] rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10 fade-up-element">
          <div className="max-w-3xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-600 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-dot"></span>
              Direct Line to the Founders
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-text-h font-display mb-6 md:mb-0">
              Get in <br className="hidden sm:block" /> 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Touch.
              </span>
            </h1>
          </div>
          
          <div className="max-w-xl text-left">
            <p className="text-lg text-text-muted leading-relaxed font-medium border-l-2 border-slate-200 pl-6">
              We are always open to research collaborations, academic feedback, and institutional inquiries about the Zosterix ecosystem.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <section className="py-24 px-6 md:px-12 flex-grow relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start text-left">
          
          {/* Left Column: Founders & Comms Info */}
          <div className="flex flex-col gap-8 fade-up-element" style={{ animationDelay: '0.1s' }}>
            <div>
              <h2 className="text-3xl font-extrabold mb-3 text-text-h tracking-tight font-display">System Architects</h2>
              <p className="text-base text-text-muted leading-relaxed font-medium">Direct access to the core team behind Phaenicio.</p>
            </div>
            
            <div className="flex flex-col gap-6">
              {founders.map((founder, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_10px_30px_var(--color-primary-glow)] hover:-translate-y-1 transition-all duration-500 flex items-center gap-6 max-sm:flex-col max-sm:items-start group"
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
                    <h3 className="text-xl font-bold mb-1 text-text-h tracking-tight">{founder.name}</h3>
                    <p className="text-xs text-primary mb-5 font-bold font-mono uppercase tracking-wider">{founder.role}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm font-semibold">
                      <a 
                        href={`mailto:${founder.email}`} 
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-700 hover:bg-primary-light hover:text-primary transition-colors border border-slate-100"
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
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.03)] relative overflow-hidden fade-up-element" style={{ animationDelay: '0.2s' }}>
            {/* Subtle glow behind form */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 mb-10">
              <div className="w-14 h-14 bg-primary-light border border-primary/20 text-primary rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                <FiMessageCircle />
              </div>
              <h2 className="text-3xl font-extrabold text-text-h mb-3 tracking-tight font-display">Send an Inquiry</h2>
              <p className="text-base text-text-muted font-medium">For partnership proposals, compute nodes, or general questions.</p>
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
                    className="w-full bg-white/80 border border-slate-200/80 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary-glow focus:border-primary transition-all placeholder:text-slate-400 shadow-sm"
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
                    className="w-full bg-white/80 border border-slate-200/80 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary-glow focus:border-primary transition-all placeholder:text-slate-400 shadow-sm"
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
                    className="w-full bg-white/80 border border-slate-200/80 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary-glow focus:border-primary transition-all appearance-none cursor-pointer shadow-sm"
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
                  className="w-full bg-white/80 border border-slate-200/80 rounded-2xl px-5 py-4 text-sm text-slate-900 focus:outline-none focus:ring-4 focus:ring-primary-glow focus:border-primary transition-all placeholder:text-slate-400 min-h-[160px] resize-y shadow-sm"
                  placeholder="Detail your requirements, timeline, or feedback here..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full mt-4 py-4 md:py-5 bg-neutral-dark text-white rounded-full font-bold text-sm transition-all duration-300 hover:bg-primary active:scale-[0.98] shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_12px_24px_rgba(206,0,16,0.15)] flex items-center justify-center gap-2 group cursor-pointer hover:-translate-y-0.5 hover:scale-[1.01]"
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
          <div className="flex items-center gap-2 text-secondary font-bold">
            SECURE_CHANNEL_ESTABLISHED
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;