import Spline from '@splinetool/react-spline';
import { Github, Layers, Zap, Code, Mail, ArrowRight } from 'lucide-react';
import SpotlightCard from './components/SpotlightCard';
import LocationCard from './components/LocationCard';

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
        <header className="flex flex-col justify-center min-h-[60vh] max-w-3xl pointer-events-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono text-green-400 tracking-wider uppercase">Open to chat</span>
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
            <button className="cursor-pointer group relative px-6 py-3 bg-white text-black font-semibold rounded-lg overflow-hidden transition-all hover:bg-neutral-200">
              <span className="relative z-10 flex items-center gap-2">
                Deprecated Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </span>
            </button>
            <button className="cursor-pointer px-6 py-3 border border-white/10 text-white font-medium rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2">
              <Github size={18} /> GitHub
            </button>
          </div>
        </header>

        {/* Bento Grid Portfolio */}
        <div className="flex items-center gap-4 mb-8">
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
                  <source src="/my-demo-video.mp4" type="video/mp4" />
                </video>
                
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000080_1px,transparent_1px),linear-gradient(to_bottom,#00000080_1px,transparent_1px)] bg-[size:4px_4px] pointer-events-none" />
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="md:col-span-1 md:row-span-2 p-8">
            <div className="h-full flex flex-col">
              <Code size={24} className="text-blue-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
              <ul className="space-y-4 flex-grow">
                {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Solidity', 'Ethers.js'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                    {item}
                  </li>
                ))}
              </ul>
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

          <SpotlightCard className="p-4 md:col-span-1 flex items-center justify-between hover:bg-neutral-800/50 cursor-pointer transition-colors">
            <div>
              <h3 className="text-lg font-bold">Start a Project</h3>
              <p className="text-sm text-neutral-400">Let's turn your idea into reality.</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center">
              <Mail size={18} />
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-6 flex flex-col justify-center gap-4">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">Connect</h3>
            <div className="flex gap-3 h-full items-center">
              {/* LinkedIn Button */}
              <a href="https://linkedin.com/in/你的ID" target="_blank" rel="noopener noreferrer" className="flex-1 h-12 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/30 flex items-center justify-center text-white hover:bg-[#0077b5]/30 transition-all group/link">
                <svg className="w-5 h-5 fill-neutral-400 group-hover/link:fill-white transition-colors" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* X (Twitter) Button */}
              <a href="https://x.com/你的ID" target="_blank" rel="noopener noreferrer" className="flex-1 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all group/link">
                <svg className="w-5 h-5 fill-neutral-400 group-hover/link:fill-white transition-colors" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </SpotlightCard>
        </section>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-neutral-600 text-sm">
          <p>© 2026 Designed & Built by Hsiang.</p>
        </footer>

      </main>
    </div>
  );
}

export default App;