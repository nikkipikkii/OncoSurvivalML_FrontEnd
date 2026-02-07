import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon'; // Adjust path if needed
import Button from '../../../components/ui/Button';
import dnaImage from './dna_nobg.png'; // Importing the image you specified

const LandingPage = () => {
  const [activeVisualization, setActiveVisualization] = useState(0);

  const visualizations = [
    {
      id: 1,
      title: "TCGA Test Cohort",
      sub: "Cox Median Hazard Split",
      accuracy: "98.76%",
      dataPoints: 1059,
      color: "#ff2e63" // Neon Pink
    },
    {
      id: 2,
      title: "METABRIC Validation",
      sub: "External Zero-Overlap",
      accuracy: "96.4%",
      dataPoints: 1903,
      color: "#08d9d6" // Neon Cyan
    },
    {
      id: 3,
      title: "Dual-Model Agreement",
      sub: "Consensus Stability",
      accuracy: "High",
      dataPoints: 2962,
      color: "#eaeaea" // White/Grey
    }
  ];

  // Auto-rotate the graph visualization
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVisualization((prev) => (prev + 1) % visualizations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentViz = visualizations[activeVisualization];

  return (
    <section className="relative bg-[#0b1120] min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* =========================================
          1. 3D DNA OVERLAY (The "Border Breaker")
          Positioned to overlap the right side card
         ========================================= */}
      <div className="absolute top-[-10%] right-[-15%] md:right-[-5%] w-[600px] md:w-[800px] pointer-events-none z-10 opacity-60 mix-blend-screen animate-pulse-slow">
        <img 
          src={dnaImage} 
          alt="DNA Strand" 
          className="w-full h-auto transform rotate-[-15deg] drop-shadow-[0_0_50px_rgba(8,217,214,0.4)]"
        />
      </div>

      {/* Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* =========================================
          2. VERTICAL SIDEBAR (Left)
         ========================================= */}
      <div className="hidden lg:flex flex-col justify-center items-center absolute left-0 top-0 bottom-0 w-24 border-r border-white/5 z-20 bg-[#0b1120]/50 backdrop-blur-sm">
         {/* Rotated Text */}
         <div className="-rotate-90 whitespace-nowrap text-[10px] font-bold tracking-[0.3em] flex gap-16 text-slate-500">
            <span className="hover:text-pink-500 transition-colors cursor-default">EXTERNALLY VALIDATED</span>
            <span className="hover:text-cyan-400 transition-colors cursor-default">METABRIC</span>
            <span className="hover:text-white transition-colors cursor-default">TCGA-BRCA</span>
            <span className="text-pink-500">98.76% ACCURACY</span>
         </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:pl-40 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* =========================================
              LEFT COLUMN: Typography & Content
             ========================================= */}
          <div className="space-y-8">
            
            {/* Title Section */}
            <div className="relative">
              {/* Decorative line */}
              <div className="absolute -left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-pink-500 to-cyan-400 rounded-full"></div>
              
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400" style={{ fontFamily: 'cursive' }}>
                  OncoRisk
                </span>
              </h1>
              <p className="text-cyan-400 font-bold tracking-[0.2em] text-sm uppercase mt-2 shadow-cyan-500/50 drop-shadow-sm">
                 Clinicogenomic Survival Intelligence
              </p>
            </div>

            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg border-l border-white/10 pl-6">
              A dual-model system joining the impact of tumor gene expression and clinical variables to predict long-term survival risk in Breast Cancer.
            </p>

            {/* Checkmarks */}
            <div className="space-y-4 pt-2">
                {[
                    "Dual-model survival analysis frameworks",
                    "Interpretable survival intelligence",
                    "Validated on External Cohort (Zero Overlap)"
                ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 group">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-pink-500 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_#ff2e63]"></div>
                        <span className="text-slate-300 font-light group-hover:text-white transition-colors">{item}</span>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Button
                variant="default"
                size="lg"
                className="bg-pink-600 hover:bg-pink-500 text-white border-0 shadow-[0_10px_30px_rgba(255,46,99,0.3)] rounded-full px-8"
                iconName="FlaskConical"
              >
                Test Model
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-slate-300 hover:text-white hover:border-white/40 rounded-full px-8"
                iconName="Play"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: Glass Card Visualization
             ========================================= */}
          <div className="relative perspective-1000">
            
            {/* The "Hand-drawn" Bracket Effect (Pink Corners) */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-pink-500/60 rounded-tr-3xl z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-b-2 border-l-2 border-pink-500/60 rounded-bl-3xl z-0"></div>

            {/* Glass Card */}
            <div className="relative bg-[#1a2035]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl z-10 overflow-hidden">
              
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="text-white font-bold text-xl">{currentViz.title}</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">{currentViz.sub}</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-cyan-400">LIVE INFERENCE</span>
                </div>
              </div>

              {/* Dynamic Graph Area */}
              <div className="relative h-48 bg-slate-900/50 rounded-lg border border-white/5 mb-6 flex items-end justify-between px-6 pb-0 overflow-hidden">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-10 pointer-events-none">
                    <div className="border-t border-white w-full"></div>
                    <div className="border-t border-white w-full"></div>
                    <div className="border-t border-white w-full"></div>
                    <div className="border-t border-white w-full"></div>
                </div>

                {/* Bars - Animated Heights based on ID */}
                {/* Bar 1: Cox */}
                <div className="w-12 bg-slate-700/50 rounded-t-sm relative transition-all duration-700 ease-out" style={{ height: activeVisualization === 0 ? '45%' : '60%' }}>
                    <div className="absolute -top-5 w-full text-center text-[9px] text-slate-500">Cox</div>
                </div>

                {/* Bar 2: RSF (Featured) */}
                <div className="w-16 rounded-t-md relative transition-all duration-700 ease-out shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                     style={{ 
                         height: activeVisualization === 0 ? '80%' : '50%',
                         background: `linear-gradient(to top, ${currentViz.color}, transparent)`
                     }}>
                    {/* Striped pattern overlay */}
                    <div className="absolute inset-0 opacity-30 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36zwjjgzhhYWGMYAEYB8RmROaABADeOQ8CXl/xfgAAAABJRU5ErkJggg==')]"></div>
                    <div className="absolute -top-6 w-full text-center text-[10px] font-bold" style={{ color: currentViz.color }}>RSF</div>
                </div>

                {/* Bar 3: Consensus */}
                <div className="w-12 bg-slate-700/50 rounded-t-sm relative transition-all duration-700 ease-out" style={{ height: '65%' }}>
                    <div className="absolute -top-5 w-full text-center text-[9px] text-slate-500">Avg</div>
                </div>
              </div>

              {/* Footer Metrics */}
              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                 <div>
                     <div className="text-[10px] text-slate-500 uppercase font-bold">C-Index Score</div>
                     <div className="text-2xl font-light text-white">{currentViz.accuracy}</div>
                 </div>
                 <div className="text-right">
                     <div className="text-[10px] text-slate-500 uppercase font-bold">N (Patients)</div>
                     <div className="text-2xl font-light text-white">{currentViz.dataPoints}</div>
                 </div>
              </div>

              {/* Progress Dots */}
              <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-2">
                 {visualizations.map((_, idx) => (
                     <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === activeVisualization ? 'w-8 bg-pink-500' : 'w-2 bg-slate-700'}`}></div>
                 ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* =========================================
          3. BOTTOM: Scroll Down Animation
         ========================================= */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <div className="flex flex-col items-center gap-2 cursor-pointer animate-bounce opacity-50 hover:opacity-100 transition-opacity"
             onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
            <span className="text-[10px] text-white tracking-[0.2em] uppercase">Scroll to Explore</span>
            <Icon name="ArrowDown" size={20} className="text-cyan-400" />
        </div>
      </div>

    </section>
  );
};

export default LandingPage;