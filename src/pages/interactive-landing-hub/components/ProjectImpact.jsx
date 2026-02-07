import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Icon from '../../../components/AppIcon';

const ProjectImpact = () => {
  const [activeTab, setActiveTab] = useState('logic'); // 'logic' or 'impact'

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Icon name="FileText" size={14} />
            <span>Project Synthesis</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Inference Logic & Research Impact
          </h2>
          <p className="text-muted-foreground">
            Understanding how risk is interpreted and the empirical results achieved across cohorts.
          </p>
        </div>

        {/* Interactive Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-secondary/30 p-1 rounded-full border border-border inline-flex">
            <button
              onClick={() => setActiveTab('logic')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'logic' 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="GitMerge" size={16} />
              Risk Interpretation Logic
            </button>
            <button
              onClick={() => setActiveTab('impact')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'impact' 
                  ? 'bg-accent text-accent-foreground shadow-md' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name="Award" size={16} />
              Achievements & Impact
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-5xl mx-auto min-h-[500px]">
          
          {/* TAB 1: INFERENCE LOGIC */}
          {activeTab === 'logic' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Concept Card */}
              <div className="bg-card border border-border rounded-2xl p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-foreground mb-4">Twin-Model Inference</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Rather than collapsing outputs into a single estimate, OncoRisk presents results from both modeling paradigms side by side. 
                  This serves a specific purpose: <strong>agreement builds confidence, while divergence surfaces uncertainty.</strong>
                </p>
                
                <div className="bg-secondary/20 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="Shield" size={18} className="text-primary" />
                    <span className="font-semibold text-foreground text-sm">Research-First Design</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    No single estimate is treated as absolute truth. This keeps inference aligned with structured interpretation rather than automated decision-making.
                  </p>
                </div>
              </div>

              {/* Visual Flow */}
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-center gap-4 bg-secondary/10 p-4 rounded-xl border border-border">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Independent Computation</h4>
                    <p className="text-sm text-muted-foreground">Cox and RSF compute survival curves and RMST separately.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex items-center gap-4 bg-secondary/10 p-4 rounded-xl border border-border">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Agreement Analysis</h4>
                    <p className="text-sm text-muted-foreground">A simple score quantifies alignment. (Convergent = High Confidence).</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-4 bg-secondary/10 p-4 rounded-xl border border-border">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Structured Output</h4>
                    <p className="text-sm text-muted-foreground">Results are presented for researcher interpretation, not clinical automation.</p>
                  </div>
                </div>

                {/* NEW LINK PLACEMENT: Below Step 3 */}
                <Link 
                  to="/development-performance" 
                  className="flex items-center justify-between bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-xl p-4 transition-all group mt-2"
                >
                  <span className="font-semibold text-primary text-sm flex items-center gap-2">
                    <Icon name="BarChart2" size={18} />
                    View Model Performance Data
                  </span>
                  <div className="bg-primary/20 rounded-full p-1 group-hover:bg-primary/30 transition-colors">
                    <Icon name="ArrowRight" size={16} className="text-primary" />
                  </div>
                </Link>

              </div>
            </div>
          )}

          {/* TAB 2: IMPACT & ACHIEVEMENTS */}
          {activeTab === 'impact' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Top Summary */}
              <div className="bg-gradient-to-r from-card to-secondary/20 border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Computational Risk Architecture</h3>
                <p className="text-muted-foreground leading-relaxed max-w-4xl">
                  OncoRisk demonstrates that compact, biologically grounded inputs can support stable survival modeling. 
                  It functions not just as a classifier, but as a framework for translating profiles into transparent survival estimates and exposing biological drivers.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-colors">
                  <div className="text-4xl font-bold text-accent mb-2">0.79</div>
                  <div className="text-sm font-semibold text-foreground">Cox C-Index (TCGA)</div>
                  <div className="text-xs text-muted-foreground mt-2">Internal Testing</div>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors">
                  <div className="text-4xl font-bold text-primary mb-2">0.73</div>
                  <div className="text-sm font-semibold text-foreground">RSF C-Index (TCGA)</div>
                  <div className="text-xs text-muted-foreground mt-2">Internal Testing</div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-green-500/50 transition-colors">
                  <div className="text-4xl font-bold text-green-500 mb-2">~0.63</div>
                  <div className="text-sm font-semibold text-foreground">METABRIC C-Index</div>
                  <div className="text-xs text-muted-foreground mt-2">External Validation</div>
                </div>
              </div>

              {/* Biological Drivers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary/20 border border-border rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Activity" size={18} className="text-pink-500" />
                    Consistent Biological Drivers
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    The same biological programs consistently emerged as drivers of hazard across both datasets:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-background rounded-full text-xs border border-border">Immune Response</span>
                    <span className="px-3 py-1 bg-background rounded-full text-xs border border-border">Metabolic Regulation</span>
                    <span className="px-3 py-1 bg-background rounded-full text-xs border border-border">Extracellular Matrix</span>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-6 flex flex-col justify-center">
                  <div className="flex items-start gap-3">
                    <Icon name="AlertTriangle" size={24} className="text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-1">Research Use Only</h4>
                      <p className="text-sm text-orange-600/80 dark:text-orange-400/80">
                        Developed as a research and translational modeling project. Not intended for clinical diagnostic use.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default ProjectImpact;