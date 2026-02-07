import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalDeepDive = () => {
  return (
    <section className="py-24 bg-[#080c14] text-white border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* SECTION 1: EXTERNAL VALIDATION */}
        <div className="mb-20">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 shrink-0">
                <Icon name="Globe" size={28} />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">External Validation and Generalization</h2>
                <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
                  Model development and evaluation used two large, independent breast cancer cohorts that differ in origin, measurement technology, and clinical context. 
                  This separation was intentional: one cohort was used exclusively for development, while the other was reserved strictly for <strong className="text-white">external validation.</strong>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
              {/* TCGA */}
              <div className="space-y-6">
                <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 h-full">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
                    TCGA-BRCA: Training & Internal Eval
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Primary development cohort with 1,059 patients. A frozen train–test split was enforced throughout:
                  </p>
                  <ul className="grid grid-cols-2 gap-4 text-center">
                    <li className="bg-black/20 p-4 rounded-2xl border border-white/5">
                        <div className="text-2xl font-bold text-white">847</div>
                        <div className="text-[10px] uppercase text-slate-500 font-bold mt-1">Training set</div>
                    </li>
                    <li className="bg-black/20 p-4 rounded-2xl border border-white/5">
                        <div className="text-2xl font-bold text-white">212</div>
                        <div className="text-[10px] uppercase text-slate-500 font-bold mt-1">Internal test</div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* METABRIC */}
              <div className="space-y-6">
                <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-bl-full"></div>
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-3 text-green-400">
                    <Icon name="ShieldCheck" size={20} />
                    METABRIC: External Validation
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Independently collected cohort (1,903 patients). No METABRIC samples were used during training or tuning. Enforces cross-cohort compatibility and reduces overfitting.
                  </p>
                  <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-xl">
                    <p className="text-sm text-green-400/90 italic font-medium">
                      "Generalization is treated as a first-class constraint rather than a post hoc check."
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="w-full h-px bg-white/5 mb-20"></div>

        {/* SECTION 2: INFERENCE LOGIC & BIOLOGY */}
        <div>
            <div className="flex items-center gap-4 mb-12">
              <Icon name="Activity" size={28} className="text-pink-500" />
              <div>
                <h2 className="text-3xl font-bold">Inference Logic & Biological Programs</h2>
                <div className="text-[10px] font-bold bg-white/10 px-2 py-1 rounded text-slate-400 uppercase tracking-widest inline-block mt-2">Research Depth</div>
              </div>
            </div>

            {/* Inference Logic */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-6 text-slate-200">How Risk Is Interpreted</h3>
              <div className="grid md:grid-cols-2 gap-12 border-l-2 border-white/5 pl-8">
                <div className="space-y-4">
                  <p className="text-slate-300 text-lg leading-relaxed">
                    Rather than collapsing outputs into a single estimate, OncoRisk presents results from both modeling paradigms side by side.
                  </p>
                  <p className="text-base text-slate-400">
                    When both models produce a similar survival story, confidence increases. When they diverge, <strong className="text-white">uncertainty is explicitly surfaced</strong> rather than smoothed away.
                  </p>
                </div>
                <div className="bg-blue-500/5 p-8 rounded-3xl border border-blue-500/10 text-base leading-relaxed italic text-blue-300">
                  "No single estimate is treated as absolute truth. This design keeps inference aligned with research use, emphasizing structured interpretation over automated decision-making."
                </div>
              </div>
            </div>

            {/* Biological Programs Header */}
            <div className="mb-12 p-10 bg-gradient-to-r from-pink-900/20 to-transparent rounded-[2rem] border border-pink-500/10">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3 text-white">
                🧬 Biological Programs and Survival Structure
              </h3>
              <p className="text-slate-300 max-w-4xl text-lg">
                OncoRisk relies on a curated 31-gene panel. Across Cox, RSF, and GBDT models, these genes cluster into three recurring biological programs that drive hazard.
              </p>
            </div>

            {/* The 3 Pillars of Biology */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="p-8 bg-slate-900/80 rounded-3xl border border-white/5 relative group hover:border-blue-500/30 transition-all">
                <div className="text-blue-400 mb-4 font-bold text-xs tracking-widest uppercase">Program 1</div>
                <h4 className="text-xl font-bold mb-3 text-white">Immune Regulation</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The tumor–immune interface: genes tied to how tumors avoid or reshape immune attack (e.g., CD24, TNFRSF14, CCL19).
                </p>
              </div>
              <div className="p-8 bg-slate-900/80 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all">
                <div className="text-orange-400 mb-4 font-bold text-xs tracking-widest uppercase">Program 2</div>
                <h4 className="text-xl font-bold mb-3 text-white">Metabolic Plasticity</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Stress tolerance: genes that support energy rewiring and survival under cellular stress (e.g., SLC16A2, SERPINA1, QPRT).
                </p>
              </div>
              <div className="p-8 bg-slate-900/80 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all">
                <div className="text-purple-400 mb-4 font-bold text-xs tracking-widest uppercase">Program 3</div>
                <h4 className="text-xl font-bold mb-3 text-white">ECM Remodeling</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Invasion structure: genes involved in reshaping tissue structure to support spread and immune escape (e.g., SEMA3B, TFPI2).
                </p>
              </div>
            </div>

            {/* Project Achievement Summary */}
            <div className="bg-white/5 rounded-[2.5rem] p-10 md:p-16 text-center border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">What the Project Achieved</h3>
              <p className="text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 text-lg">
                OncoRisk translates clinicogenomic profiles into transparent survival estimates, exposes biological programs, and provides a structured framework for exploring survival behavior under uncertainty.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="p-4 rounded-2xl bg-black/20"><div className="text-4xl font-bold text-cyan-400">0.79</div><div className="text-xs text-slate-500 font-bold uppercase mt-2 tracking-wider">Cox C-index</div></div>
                <div className="p-4 rounded-2xl bg-black/20"><div className="text-4xl font-bold text-pink-500">0.73</div><div className="text-xs text-slate-500 font-bold uppercase mt-2 tracking-wider">RSF C-index</div></div>
                <div className="p-4 rounded-2xl bg-black/20"><div className="text-4xl font-bold text-white">31</div><div className="text-xs text-slate-500 font-bold uppercase mt-2 tracking-wider">Gene Signature</div></div>
                <div className="p-4 rounded-2xl bg-black/20"><div className="text-4xl font-bold text-slate-400">0.63</div><div className="text-xs text-slate-500 font-bold uppercase mt-2 tracking-wider">Ext. Validated</div></div>
              </div>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 text-sm text-slate-400 font-medium">
                <Icon name="Shield" size={16} className="text-orange-500" />
                Not intended for clinical use • Research & Translational Project
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalDeepDive;