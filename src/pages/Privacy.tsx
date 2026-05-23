import { Link } from 'react-router-dom';
import { FiArrowLeft, FiLock, FiShield, FiCpu } from 'react-icons/fi';

const Privacy = () => {
  return (
    <div className="flex flex-col animate-in fade-in duration-700 pt-[140px] pb-20 bg-slate-50 min-h-screen relative">
      
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

      {/* Global Background Elements */}
      <div className="absolute inset-0 pointer-events-none hero-grid z-0"></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-primary/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 w-full fade-up-element">
        
        {/* Back Button Link */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-primary transition-all duration-300 bg-white/60 backdrop-blur-md hover:bg-white px-5 py-2.5 border border-slate-200/80 hover:border-primary-light rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Premium Document Glass Panel */}
        <article className="p-8 md:p-16 rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.03)] relative overflow-hidden">
          
          {/* Soft Ambient Inner Glows */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Document Header */}
          <header className="relative z-10 mb-12 pb-10 border-b border-slate-200/80 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-light border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary mb-6 shadow-sm">
              <FiShield size={14} />
              <span>Privacy Standard</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-h mb-5 font-display">Privacy Policy</h1>
            <p className="text-text-muted text-sm font-mono tracking-wide">LAST MODIFIED: MAY 23, 2026</p>
          </header>

          {/* Document Content */}
          <div className="relative z-10 space-y-12 text-left text-text text-base md:text-lg leading-relaxed font-medium">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-h flex items-center gap-3 font-display">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-dot shadow-[0_0_8px_var(--color-secondary-glow)]" />
                1. Overview
              </h2>
              <p className="text-pretty">
                Phaenicio ("we," "our," or "us") builds precision computing grids and research discovery networks. We are committed to safeguarding the privacy and security of users participating in our digital platforms, including Zosterix.
              </p>
              <p className="text-pretty">
                This Privacy Policy describes how we handle, protect, and process data across our official domains. By using our services, you consent to the operations described herein.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-h flex items-center gap-3 font-display">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_var(--color-secondary-glow)]" />
                2. Data We Collect
              </h2>
              <p className="text-pretty">
                To maintain the integrity of our scientific networks, we collect minimal data required to verify professional identity and operate secure compute clusters:
              </p>
              <ul className="list-none space-y-4 mt-4">
                <li className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                  <p><strong className="text-text-h">Professional Identity:</strong> ORCID iDs, institutional affiliations, and email addresses provided during verification.</p>
                </li>
                <li className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                  <p><strong className="text-text-h">Metadata & Logs:</strong> Client device configurations, network addresses, and cryptographic validation records to protect grid stability.</p>
                </li>
                <li className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0" />
                  <p><strong className="text-text-h">Collaborative Content:</strong> Research abstracts, discussions, and preprint submissions intentionally shared on our platforms.</p>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-text-h flex items-center gap-3 font-display">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_var(--color-secondary-glow)]" />
                3. Data Usage & Purpose
              </h2>
              <p className="text-pretty">
                We process your data strictly under the following mandates:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_30px_var(--color-primary-glow)] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <FiLock size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-text-h text-lg mb-1">Grid Security</h4>
                    <p className="text-sm text-text-muted leading-relaxed">Securing compute nodes and protecting intellectual properties from unauthorized access.</p>
                  </div>
                </div>
                
                <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_8px_30px_var(--color-primary-glow)] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <FiCpu size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-text-h text-lg mb-1">AI Orchestration</h4>
                    <p className="text-sm text-text-muted leading-relaxed">Refining methodologies and automating structure checks without compromising authorship.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-text-h flex items-center gap-3 font-display">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_var(--color-secondary-glow)]" />
                4. Data Retention & Erasure
              </h2>
              <p className="text-pretty">
                We adhere to strict data-minimization practices. Personal identifiers linked with verified research profiles are retained only as long as the accounts remain active. Academic preprints and logs are cryptographically sealed, and you retain the right to request erasure of your data at any time via our secure channels.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4 pb-4">
              <h2 className="text-2xl font-bold text-text-h flex items-center gap-3 font-display">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_var(--color-secondary-glow)]" />
                5. Contact Us
              </h2>
              <p className="text-pretty">
                If you have any questions regarding our cryptographic integrity systems, data protocols, or this policy, please reach out to the founders through our <Link to="/contact" className="text-primary hover:text-primary-hover underline underline-offset-4 decoration-primary/20 hover:decoration-primary transition-colors font-bold">contact portal</Link>.
              </p>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
};

export default Privacy;