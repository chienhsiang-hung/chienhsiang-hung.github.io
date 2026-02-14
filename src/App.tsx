import Spline from '@splinetool/react-spline';
import { Github, Layers, Zap, Code, Mail, ArrowRight } from 'lucide-react';
import SpotlightCard from './components/SpotlightCard';
import LocationCard from './components/LocationCard';
import InteractiveIconCloud from './components/InteractiveIconCloud';

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden selection:bg-purple-500/30">
      
      {/* --- 1. (3D + Ambient Light) --- */}
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
        
        {/* --- (Gradient Overlay) --- */}
        <div className="absolute inset-0 z-[5] bg-gradient-to-r from-[#050505]/80 via-[#050505]/40 to-transparent w-full md:w-2/3 pointer-events-none" />

        <div className="absolute inset-0 opacity-80">
          <Spline scene="https://prod.spline.design/E-c2isixXR6O8Ukk/scene.splinecode" />
        </div>
      </div>

      {/* --- 2. content layer --- */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-10 pointer-events-none">
        
        {/* Hero Section */}
        <header className="flex flex-col justify-center min-h-[60vh] max-w-3xl pointer-events-auto pb-10 md:pb-12">
          <div className="flex items-center gap-3 mb-6">
            {/* Bulb */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono text-green-400 tracking-wider uppercase">Open to chat</span>
            </div>

            {/* Divider */}
            <div className="h-4 w-[1px] bg-neutral-800"></div>

            {/* Email */}
            <a 
              href="mailto:iworkhard@hsiang.eu.org" 
              className="text-xs font-mono text-neutral-500 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Mail size={12} />
              iworkhard@hsiang.eu.org
            </a>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
            Build for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Future Web.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 max-w-xl leading-relaxed mb-10">
            I'm a <span className="text-white font-bold underline decoration-purple-500/50">Software Engineer</span> at <span className="text-white font-bold underline decoration-blue-500/50">TSMC</span> specializing in building full-stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">scalable systems</span> and 
            modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">deep learning</span> applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://chienhsiang-hung.github.io/v1-project-build-for-profile/" 
              className="cursor-pointer group relative px-6 py-3 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all hover:bg-neutral-200 inline-block"
            >
              <span className="relative z-10 flex items-center gap-2">
                Deprecated Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </span>
            </a>
            <a
               href="https://github.com/chienhsiang-hung/chienhsiang-hung.github.io/"
               className="cursor-pointer px-6 py-3 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </header>

        {/* Bento Grid Portfolio */}
        <div className="flex items-center gap-4 mb-6">
          <Layers size={20} className="text-purple-500" />
          <h2 className="text-xl font-bold tracking-wide">Selected Life & Work</h2>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] pointer-events-auto">
          
          {/* (2x2) */}
          <SpotlightCard className="md:col-span-2 md:row-span-3 min-h-[300px] p-8 group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-start gap-x-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
                    CASI
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
                    JPGT
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-purple-300 transition-colors">
                  Snowboard Addict
                </h3>
                <p className="text-neutral-400 max-w-md">
                   Certified <span className="text-white font-medium">CASI Instructor</span> trained in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Canada</span>. 
                   Passionate about technical precision on the slopes. Always chasing the perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">JP-style ground tricks</span> and helping others find their flow.
                </p>
              </div>
              
              <div className="mt-6 w-full h-64 md:h-128 bg-black rounded-lg border border-white/5 overflow-hidden relative">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                >
                  <source src="/my-JPGT-sb-video.mp4" type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000080_1px,transparent_1px),linear-gradient(to_bottom,#00000080_1px,transparent_1px)] bg-[size:4px_4px] pointer-events-none" />
              </div>
            </div>
          </SpotlightCard>

          {/* Tech Stack (Icon Cloud) */}
          <SpotlightCard className="md:col-span-1 md:row-span-2 p-0 flex flex-col overflow-hidden relative min-h-[300px]">
            <div className="absolute top-6 left-6 z-20 flex items-center gap-2 pointer-events-none">
              <Code size={24} className="text-blue-400" />
              <h3 className="text-xl font-bold">Tech Stack</h3>
            </div>
            
            <div className="flex-1 w-full h-full flex items-center justify-center p-6 pt-10 md:pt-8">
              <InteractiveIconCloud />
            </div>
          </SpotlightCard>

          <LocationCard />

          <SpotlightCard className="p-4 flex flex-col justify-center">
            <Zap size={24} className="text-yellow-400 mb-2" />
            <div className="text-3xl font-bold font-mono">98+</div>
            <div className="text-sm text-neutral-500">Performance Score</div>
          </SpotlightCard>

          <SpotlightCard className="p-4 flex flex-col justify-center border-blue-500/20 bg-blue-500/5">
            <div className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-widest">Current Role</div>
            <div className="text-2xl font-bold text-white mb-1">TSMC</div>
            <div className="text-sm text-neutral-400">Software Engineer</div>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-full animate-pulse"></div>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6 flex flex-col justify-center gap-4">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Connect</h3>
            <div className="flex gap-3 h-full items-center">
              {/* LinkedIn Button */}
              <a href="https://linkedin.com/in/chien-hsiang-hung" target="_blank" rel="noopener noreferrer" className="flex-1 h-12 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/30 flex items-center justify-center text-white hover:bg-[#0077b5]/30 transition-all group/link">
                <svg className="w-5 h-5 fill-neutral-400 group-hover/link:fill-white transition-colors" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Instagram Button */}
              <a href="https://instagram.com/hung_chienhsiang" target="_blank" rel="noopener noreferrer" className="flex-1 h-12 rounded-lg bg-pink-500/5 border border-pink-500/10 flex items-center justify-center text-white hover:bg-pink-500/20 transition-all group/link">
                <svg className="w-5 h-5 fill-neutral-400 group-hover/link:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </SpotlightCard>
        </section>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-neutral-600 text-sm pointer-events-auto">
          <p>© 2026 Designed & Built by <a href="#" className='cursor-pointer hover:text-white transition-colors'>Hsiang</a>.</p>
        </footer>

      </main>
    </div>
  );
}

export default App;