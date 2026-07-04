import { useState, useEffect } from 'react';
import ContactModal from './Component/ContactModal';
import CustomCursor from './Component/Cursor';
import TypewriterText from './Component/Typewriter';

// --- 1. PROJECT DATA ---
const PROJECTS = [
  {
    id: "01",
    title: "CardioLog",
    type: "Health Tech",
    description: "High-performance cardiac tracking system. Architected a secure PostgreSQL database to monitor and report blood pressure trends with automated weekly reporting.",
    tech: ["Node.js", "Express", "PostgreSQL", "React Native"],
  },
  {
    id: "02",
    title: "CasaLivraison",
    type: "Logistics",
    description: "A premium logistics and food delivery platform serving Casablanca. Engineered for real-time order coordination and high-speed fluid user interfaces.",
    tech: ["React Native", "Expo", "PostgreSQL", "Sequelize"],
  },
  {
    id: "03",
    title: "SpeakIQ",
    type: "EdTech",
    description: "AI-powered English speaking practice suite. Integrated Gemini Flash and Grok models to provide real-time phonetic feedback and conversational analysis.",
    tech: ["Gemini AI", "Grok", "React Native", "Zustand"],
  }
];




// --- 4. PROJECT CARD COMPONENT ---
const ProjectCard = ({ project }) => (
  <div className="group relative border-l border-white/5 pl-8 py-12 transition-all hover:border-blue-500/50">
    <span className="absolute -left-4 top-10 text-6xl font-black text-white/5 group-hover:text-blue-500/10 transition-colors">
      {project.id}
    </span>
    <div className="relative z-10">
      <p className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.3em] mb-2">
        {project.type}
      </p>
      <h3 className="text-4xl font-bold mb-4">
        <TypewriterText text={project.title} />
      </h3>
      <div className="text-gray-400 max-w-md font-light leading-relaxed mb-6 min-h-[60px]">
        <TypewriterText text={project.description} delay={0.5} />
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="px-2 py-1 text-[9px] font-mono border border-white/10 text-gray-500 uppercase">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// --- 5. FOOTER COMPONENT ---
const Footer = () => (
  <footer className="relative z-10 w-full border-t border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col gap-1 items-center md:items-start">
        
      </div>
      <div className="flex items-center gap-6 text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>ENGINE: REACT_VITE</div>
        <div className="hidden sm:flex items-center gap-2"><span className="w-1 h-1 bg-gray-700 rounded-full"></span>ANIMATION: FRAMER_MOTION</div>
      </div>
      <div className="flex items-center gap-4">
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 text-center text-xs text-gray-500">
      © 2026 Mohamed Lakhrouf. All rights reserved.
    </div>
    <div className="max-w-7xl mx-auto mt-4 h-[1px] bg-gradient-to-r from-blue-500/50 via-transparent to-transparent"></div>
  </footer>
);

// --- 6. MAIN APP COMPONENT ---
export default function App() {
  const [view, setView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#projects') return 'projects';
    }
    return 'home';
  });
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setView(event.state.view);
      } else {
        const hash = window.location.hash;
        if (hash === '#projects') {
          setView('projects');
        } else {
          setView('home');
        }
      }
    };

    window.addEventListener('popstate', handlePopState);

    if (!window.history.state) {
      window.history.replaceState({ view }, '', window.location.hash || '#');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, [view]);

  const navigateTo = (newView) => {
    setView(newView);
    const newHash = newView === 'home' ? '#' : `#${newView}`;
    window.history.pushState({ view: newView }, '', newHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-blue-500/30 flex flex-col">
      <CustomCursor />
      
      <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
      </div>

      <main className="flex-grow">
        {view === 'home' ? (
          <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
            {/* Identity Header */}
            <div className="absolute top-10 left-10 hidden md:block">
              <h2 className="text-xl font-black tracking-tighter uppercase">MOHAMED LAKHROUF</h2>
            </div>

            <div className="max-w-5xl w-full">
              <div className="flex items-center gap-3 mb-10">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </div>
                <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-500">Full-Stack Developer</p>
              </div>

              <div className="max-w-4xl">
                <div className="inline-block px-3 py-1 border border-blue-500/20 bg-blue-500/5 mb-6">
                  <p className="text-[11px] font-mono text-blue-400 uppercase tracking-widest">Full-Stack Mobile & Web Developer</p>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">
                  I build the <span className="text-white underline decoration-blue-600 decoration-4 underline-offset-8">whole</span> product From idea to deployment.
                </h1>

                <div className="grid md:grid-cols-2 gap-8 mb-12 py-8 border-y border-white/5">
                  <p className="text-gray-300 text-lg leading-relaxed font-light">
                    I don't just build screens. I architect scalable <span className="text-blue-400 font-mono">Node.js</span> backends, manage <span className="text-blue-400 font-mono">PostgreSQL</span> data, and deliver fluid <span className="text-blue-400 font-mono">React Native</span> experiences.
                  </p>
                  <div className="flex flex-col justify-center space-y-2 font-mono text-gray-500 text-xs">
                    <div><span className="text-blue-500">01</span> FRONTEND: REACT JS, REACT NATIVE, EXPO</div>
                    <div><span className="text-blue-500">02</span> BACKEND: NODE.JS, EXPRESS, SEQUELIZE</div>
                    <div><span className="text-blue-500">03</span> DEPLOY: DOCKER, REST APIs, AUTH</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button onClick={() => navigateTo('projects')} className="group relative">
                    <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-600 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    <div className="relative border-2 border-white bg-white px-10 py-4 transition-transform group-active:translate-x-1 group-active:translate-y-1">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-black">Explore Projects</span>
                    </div>
                  </button>
                  <button onClick={() => setShowContact(true)} className="group relative">
                    <div className="flex items-center gap-4 border border-gray-800 bg-black/50 px-10 py-4 backdrop-blur-sm transition-all hover:border-blue-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">Initiate Contact</span>
                      <span className="text-blue-500 transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-10 max-w-5xl mx-auto pt-32 px-6 pb-20">
            <button onClick={() => navigateTo('home')} className="group mb-12 flex items-center gap-2 text-[10px] font-mono text-gray-500 hover:text-blue-400 transition-colors">
              <span className="transition-transform group-hover:-translate-x-1">←</span> RETURN_TO_HOME
            </button>
            <div className="mb-20">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">PROJECTS</h2>
              <div className="h-1 w-20 bg-blue-600"></div>
            </div>
            <div className="grid gap-12 justify-items-center" >
              {PROJECTS.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
    </div>
  );
}