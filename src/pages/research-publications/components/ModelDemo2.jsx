import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ModelDemo = () => {
  const [demoStep, setDemoStep] = useState('input');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [inputMode, setInputMode] = useState('manual');

  const lymphNodeOptions = [
    { value: 'negative', label: 'Negative (NODE_POS = 0)' },
    { value: 'positive', label: 'Positive (NODE_POS > 0)' }
  ];

  const tcgaPatients = [
    { value: 'tcga_001', label: 'TCGA Patient #001 - Age 52, Node Negative' },
    { value: 'tcga_002', label: 'TCGA Patient #002 - Age 67, Node Positive' },
    { value: 'tcga_003', label: 'TCGA Patient #003 - Age 45, Node Negative' }
  ];

  // Helper to format median values
  const formatMedian = (val) => {
    if (val === null || val === undefined || val === 'NaN') return "Not Reached";
    return `${val} days`;
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setDemoStep('results');
    }, 2000);
  };

  const handleReset = () => {
    setDemoStep('input');
  };

  const mockResults = {
    // Field 1 Data
    coxRisk: 0.03,
    rsfRisk: 0.46,
    agreement: "N/A",
    // Field 2 Data
    coxMedian: "Not Reached",
    rsfMedian: 6486.2,
    consensusMedian: 6486.2,
    // Field 3 Data
    coxRMST: 8472.0,
    rsfRMST: 5344.1,
  };

  // Reusable Component for the Explanations
  const ExplanationBlock = ({ icon, title, children }) => (
    <div className="bg-secondary/20 border border-border rounded-lg p-4 flex items-start space-x-3 mt-4">
      <Icon name={icon} size={18} className="mt-1 text-muted-foreground flex-shrink-0" />
      <div>
        <span className="font-semibold text-foreground text-sm block mb-1">{title}</span>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 rounded-full border border-success/20 mb-4">
            <Icon name="FlaskConical" size={16} color="var(--color-success)" />
            <span className="text-xs md:text-sm font-medium text-success">Patient Risk Profile Inference</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Dual-Model Risk Profiling (Cox + RSF)
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Input clinical and molecular features to generate twin survival predictions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
            {/* Window Header */}
            <div className="bg-secondary/50 border-b border-border p-4 md:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon name="Activity" size={20} color="var(--color-accent)" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">OncoRisk Research Model</div>
                    <div className="text-xs text-muted-foreground">Cox + RSF Dual Inference System</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-success/10 rounded-full">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-success">Ready</span>
                </div>
              </div>
            </div>

            {/* STEP 1: INPUT FORM */}
            {demoStep === 'input' && (
              <div className="p-6 md:p-8 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <button
                    onClick={() => setInputMode('manual')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                      inputMode === 'manual' ?'border-accent bg-accent/10 text-accent font-semibold' :'border-border bg-secondary/30 text-muted-foreground hover:border-accent/50'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Edit3" size={18} />
                      <span className="text-sm">Manual Profile</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setInputMode('tcga')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                      inputMode === 'tcga' ?'border-accent bg-accent/10 text-accent font-semibold' :'border-border bg-secondary/30 text-muted-foreground hover:border-accent/50'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Icon name="Database" size={18} />
                      <span className="text-sm">Select TCGA Patient</span>
                    </div>
                  </button>
                </div>

                {inputMode === 'manual' ? (
                  <>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                        <Icon name="Stethoscope" size={16} color="var(--color-primary)" />
                        <span>Clinical Inputs</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input label="Age (years)" type="number" placeholder="Enter patient age" />
                        <Select label="Lymph Node Status" options={lymphNodeOptions} placeholder="Select status" />
                      </div>
                    </div>
                    <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                        <Icon name="Dna" size={16} color="var(--color-accent)" />
                        <span>Molecular Profile (Stub)</span>
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        <Input label="Gene 1" placeholder="0.0" />
                        <Input label="Gene 2" placeholder="0.0" />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <Select
                      label="Select Existing TCGA Test Patient"
                      options={tcgaPatients}
                      placeholder="Choose a patient from TCGA cohort"
                    />
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Play"
                    iconPosition="left"
                    onClick={handleAnalyze}
                    loading={isAnalyzing}
                    className="flex-1"
                  >
                    {isAnalyzing ? 'Running Cox + RSF Models...' : 'Run Dual-Model Analysis'}
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: RESULTS */}
            {demoStep === 'results' && (
              <div className="p-6 md:p-8 space-y-8">
                
                {/* FIELD 1: RISK SUMMARY */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            <Icon name="Activity" size={20} color="var(--color-primary)" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">1. Risk Summary (High-Level)</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Cox Card - Blue Border & Text */}
                        <div className="bg-card border border-primary/30 rounded-xl p-5">
                            <div className="text-3xl font-bold text-foreground mb-1">{mockResults.coxRisk}</div>
                            <div className="text-sm font-bold text-purple-500 mb-3">Cox Hazard (relative)</div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                <strong>Measures:</strong> Risk relative to an average patient in the training cohort.
                            </p>
                        </div>
                        
                        {/* RSF Card - Pink Border & Text */}
                        <div className="bg-card border border-accent/30 rounded-xl p-5">
                            <div className="text-3xl font-bold text-foreground mb-1">{mockResults.rsfRisk}</div>
                            <div className="text-sm font-bold text-purple-500 mb-3">RSF Risk (cum. hazard)</div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                <strong>Measures:</strong> Nonlinear risk accumulation over time.
                            </p>
                        </div>
                        
                        {/* Agreement Card - Green Border & Text */}
                        <div className="bg-card border border-success/30 rounded-xl p-5">
                            <div className="text-3xl font-bold text-foreground mb-1">{mockResults.agreement}</div>
                            <div className="text-sm font-bold text-purple-500 mb-3">Model Agreement</div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                <strong>Indicates:</strong> Whether two different modeling assumptions tell a similar survival story.
                            </p>
                        </div>
                    </div>

                    <ExplanationBlock icon="Info" title="Note">
                        Lower values indicate lower relative risk compared to the training population, not zero risk. This prevents catastrophic misreading.
                    </ExplanationBlock>
                </div>

                <div className="h-px bg-border w-full"></div>

                {/* FIELD 2: SURVIVAL TIME ESTIMATES */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                         <div className="flex items-center space-x-2">
                            <div className="bg-accent/10 p-2 rounded-lg">
                                <Icon name="Clock" size={20} color="var(--color-accent)" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">2. Survival Time Estimates</h3>
                                <span className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">(Model-based, not life expectancy)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-card border border-primary/20 rounded-xl">
                            <div className="text-2xl font-bold text-foreground">{mockResults.coxMedian}</div>
                            <div className="text-xs font-semibold text-accent uppercase mt-1">Cox Median Survival</div>
                        </div>
                        <div className="text-center p-4 bg-card border border-accent/20 rounded-xl">
                            <div className="text-2xl font-bold text-foreground">{mockResults.rsfMedian}</div>
                            <div className="text-xs font-semibold text-accent uppercase mt-1">RSF Median Survival (days)</div>
                        </div>
                        <div className="text-center p-4 bg-card border border-purple-500/20 rounded-xl">
                            <div className="text-2xl font-bold text-foreground">{mockResults.consensusMedian}</div>
                            <div className="text-xs font-semibold text-accent uppercase mt-1">Consensus Median (days)</div>
                        </div>
                    </div>

                    <ExplanationBlock icon="FileText" title="Interpretation">
                        The curves show estimated survival probability over time. These are statistical summaries of modeled survival curves, not predictions of how long an individual will live. Differences between curves reflect how model assumptions affect risk interpretation.
                        <br/><br/>
                        <strong>Days:</strong> Time is measured in days since diagnosis. <strong>Not Reached:</strong> Means probability never dropped below 50%.
                    </ExplanationBlock>
                </div>

                <div className="h-px bg-border w-full"></div>

             
        {/* FIELD 3: RMST */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="bg-warning/10 p-2 rounded-lg">
                            <Icon name="BarChart2" size={20} color="var(--color-warning)" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">3. Restricted Mean Survival Time (RMST)</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {/* Cox RMST - Yellow Theme */}
                         <div className="bg-card border border-warning/30 rounded-xl p-5 flex flex-col items-center text-center">
                            <div className="text-3xl font-bold text-foreground">{mockResults.coxRMST}</div>
                            <div className="text-sm font-semibold text-warning mt-1">Cox RMST (days)</div>
                        </div>
                         {/* RSF RMST - Yellow Theme */}
                         <div className="bg-card border border-warning/30 rounded-xl p-5 flex flex-col items-center text-center">
                            <div className="text-3xl font-bold text-foreground">{mockResults.rsfRMST}</div>
                            <div className="text-sm font-semibold text-warning mt-1">RSF RMST (days)</div>
                        </div>
                    </div>
                    
                    <ExplanationBlock icon="Info" title="Explanation">
                        RMST summarizes the <strong>average survival time</strong> within the observed follow-up period, even when median survival is not reached.
                    </ExplanationBlock>
                </div>

                <div className="h-px bg-border w-full"></div>

                {/* FIELD 4: VISUALIZATION HEADER */}
                <div className="space-y-4">
                     <div className="flex items-center space-x-2 mb-2">
                        <div className="bg-success/10 p-2 rounded-lg">
                            <Icon name="TrendingUp" size={20} color="var(--color-success)" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">4. Survival Curves</h3>
                    </div>
                    
                    <div className="bg-card border border-dashed border-border rounded-xl h-64 flex flex-col items-center justify-center text-muted-foreground p-6 text-center">
                        <Icon name="LineChart" size={48} className="mb-4 opacity-20" />
                        <p className="font-medium">Interactive Survival Curve Visualization</p>
                        <p className="text-sm mt-2 max-w-md opacity-70">
                            (Graph interpretation changes according to value)
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="RotateCcw"
                    iconPosition="left"
                    onClick={handleReset}
                    className="flex-1"
                  >
                    Analyze Another Profile
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelDemo;