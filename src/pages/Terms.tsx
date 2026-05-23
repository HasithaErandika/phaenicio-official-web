import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiFileText, FiAlertCircle, FiGlobe } from 'react-icons/fi';

const Terms = () => {
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 w-full fade-up-element">
        
        {/* Back Button Link */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-indigo-600 transition-all duration-300 bg-white/60 backdrop-blur-md hover:bg-white px-5 py-2.5 border border-slate-200/80 hover:border-indigo-100 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Premium Document Glass Panel */}
        <article className="p-8 md:p-16 rounded-[2.5rem] bg-white/60 backdrop-blur-2xl border border-indigo-100 shadow-[0_8px_30px_rgba(99,102,241,0.06)] relative overflow-hidden">
          
          {/* Soft Ambient Inner Glows */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Document Header */}
          <header className="relative z-10 mb-12 pb-10 border-b border-slate-200/80 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 border border-indigo-100 text-xs font-bold uppercase tracking-wider text-indigo-600 mb-6 shadow-sm">
              <FiFileText size={14} />
              <span>Usage Agreement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mb-5">Terms of Service</h1>
            <p className="text-slate-500 text-sm font-mono tracking-wide">LAST MODIFIED: MAY 23, 2026</p>
          </header>

          {/* Document Content */}
          <div className="relative z-10 space-y-12 text-left text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse-dot shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                1. Acceptance of Terms
              </h2>
              <p className="text-pretty">
                By accessing or using the scientific and compute networks operated by Phaenicio (including the Zosterix platform, registries, and API portals), you agree to be bound by these Terms of Service. If you do not agree, you must immediately terminate access.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                2. User Representation & Verification
              </h2>
              <p className="text-pretty">
                To maintain academic integrity:
              </p>
              <ul className="list-none space-y-4 mt-4">
                <li className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
                  <p className="text-pretty"><strong className="text-slate-900">Authenticity:</strong> Users must represent themselves with accurate professional credentials. Impersonation of other researchers, peer reviewers, or academic supervisors is strictly prohibited and subject to account termination.</p>
                </li>
                <li className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(15,23,42,0.02)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5 shrink-0" />
                  <p className="text-pretty"><strong className="text-slate-900">OAuth Requirements:</strong> Integrations such as ORCID OAuth authorization must reflect authentic and verified ownership.</p>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                3. System Integrity & Grid Abuse
              </h2>
              <p className="text-pretty mb-4">
                Phaenicio operates high-performance compute clusters and consensus systems. You agree not to perform actions that compromise the availability or speed of these systems:
              </p>
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/60 shadow-sm flex flex-col sm:flex-row gap-4 text-amber-900 mt-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors pointer-events-none"></div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                  <FiAlertCircle size={24} />
                </div>
                <div className="relative z-10">
                  <h4 className="font-extrabold text-slate-950 text-lg mb-2">Strict Prohibition</h4>
                  <p className="text-sm text-slate-700 leading-relaxed text-pretty font-medium">Exploiting computing nodes, introducing malicious code payloads, conducting network amplification attacks, or tampering with cryptographic registry systems will result in immediate bans and potential legal inquiries.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                4. Intellectual Property
              </h2>
              <p className="text-pretty">
                You retain ownership of any research drafts, datasets, and methodologies you publish or process through Zosterix. Phaenicio does not claim ownership over user-submitted assets. However, you grant us a limited, global, non-exclusive license to host, format, and render your publications as necessary to sustain our cooperative academic indexing networks.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                5. Disclaimer of Warranties
              </h2>
              <p className="text-pretty">
                Phaenicio services are provided "as is" and "as available" without warranties of any kind, whether express or implied. We do not guarantee that academic collaborations will result in specific publications, or that data compute allocations will operate without temporary interruptions.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4 pb-4">
              <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                6. Contact Support
              </h2>
              <p className="text-pretty">
                For legal inquiries regarding licensing, compute usage agreements, or general services, please contact our core engineering team via the <Link to="/contact" className="text-indigo-600 hover:text-indigo-800 underline underline-offset-4 decoration-indigo-200 hover:decoration-indigo-600 transition-colors font-bold">contact form</Link>.
              </p>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
};

export default Terms;