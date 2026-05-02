function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6 overflow-hidden font-sans">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.15]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        
        {/* Status Indicator */}
        <div className="flex items-center gap-3 mb-10">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-500">
            System Status: Active // Full-Stack Deployment
          </p>
        </div>

        <div className="max-w-4xl">
          {/* Identity Label */}
          <div className="inline-block px-3 py-1 border border-blue-500/20 bg-blue-500/5 mb-6">
            <p className="text-[11px] font-mono text-blue-400 uppercase tracking-widest">
              Full-Stack Mobile & Web Developer
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-10 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20">
            I build the <span className="text-white underline decoration-blue-600 decoration-4 underline-offset-8">whole</span> product.
          </h1>

          {/* The Full-Stack Logic Proof */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 py-8 border-y border-white/5">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                I don't just build screens. I architect scalable <span className="text-blue-400 font-mono">Node.js</span> backends, manage <span className="text-blue-400 font-mono">PostgreSQL</span> data, and deliver fluid <span className="text-blue-400 font-mono">React Native</span> experiences.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-2">
              <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                <span className="text-blue-500">01</span> FRONTEND: REACT JS , REACT NATIVE, EXPO
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                <span className="text-blue-500">02</span> BACKEND: NODE.JS, EXPRESS, SEQUELIZE
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
                <span className="text-blue-500">03</span> DEPLOY: DOCKER, REST APIs, AUTH
              </div>
            </div>
          </div>

          {/* Actions */}
          {/* Buttons Container */}
<div className="flex flex-col sm:flex-row gap-6">
  
  {/* Primary Button: View Projects */}
  <button className="group relative">
    {/* The shadow behind the button */}
    <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-blue-600 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
    
    {/* The main button body */}
    <div className="relative border-2 border-white bg-white px-10 py-4 transition-transform group-active:translate-x-1 group-active:translate-y-1">
      <span className="text-xs font-black uppercase tracking-[0.2em] text-black">
        Explore Projects
      </span>
    </div>
  </button>

  {/* Secondary Button: Contact */}
  <button className="group relative">
    <div className="flex items-center gap-4 border border-gray-800 bg-black/50 px-10 py-4 backdrop-blur-sm transition-all hover:border-blue-500">
      {/* Small glowing dot for a "System" feel */}
      <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
      
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-white transition-colors">
        Initiate Contact
      </span>
      
      {/* Arrow icon using simple CSS */}
      <span className="text-blue-500 transition-transform group-hover:translate-x-1">
        →
      </span>
    </div>
  </button>
  
</div>
        </div>

      </div>
    </div>
  );
}

export default App;