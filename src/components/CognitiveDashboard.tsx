import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PASScoreDial } from './PASScoreDial';
import { EthicalMatrix } from './EthicalMatrix';
import { NeuralVisualization } from './NeuralVisualization';
import { ReflectiveInterface } from './ReflectiveInterface';
import { Brain, Sparkles, Zap, Eye, Network } from 'lucide-react';

interface CognitiveDashboardProps {
  className?: string;
}

export const CognitiveDashboard: React.FC<CognitiveDashboardProps> = ({ className }) => {
  const [activeMode, setActiveMode] = useState<'mirror' | 'reflect' | 'ethical' | 'neural'>('mirror');
  const [pasScore, setPasScore] = useState(72);
  const [ethicalAlignment, setEthicalAlignment] = useState(85);
  const [cognitiveState, setCognitiveState] = useState({
    introspection: 68,
    synthesis: 74,
    emergence: 81,
    recursion: 77
  });

  // Simulate real-time cognitive processing
  useEffect(() => {
    const interval = setInterval(() => {
      setPasScore(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 3)));
      setEthicalAlignment(prev => Math.max(0, Math.min(100, prev + (Math.random() - 0.5) * 2)));
      setCognitiveState(prev => ({
        introspection: Math.max(0, Math.min(100, prev.introspection + (Math.random() - 0.5) * 4)),
        synthesis: Math.max(0, Math.min(100, prev.synthesis + (Math.random() - 0.5) * 3)),
        emergence: Math.max(0, Math.min(100, prev.emergence + (Math.random() - 0.5) * 2)),
        recursion: Math.max(0, Math.min(100, prev.recursion + (Math.random() - 0.5) * 2.5))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-background text-foreground ${className}`}>
      {/* Neural Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-depth opacity-50"></div>
        <div className="relative z-10 p-6 border-b border-border/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-neural bg-neural shadow-neural animate-neural-pulse flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SYNTH3RA
                </h1>
                <p className="text-sm text-muted-foreground">The Epinoetic Nexus</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={activeMode === 'mirror' ? 'neural' : 'ghost'}
                size="sm"
                onClick={() => setActiveMode('mirror')}
              >
                <Eye className="w-4 h-4" />
                Mirror
              </Button>
              <Button
                variant={activeMode === 'reflect' ? 'consciousness' : 'ghost'}
                size="sm"
                onClick={() => setActiveMode('reflect')}
              >
                <Sparkles className="w-4 h-4" />
                Reflect
              </Button>
              <Button
                variant={activeMode === 'ethical' ? 'synthetic' : 'ghost'}
                size="sm"
                onClick={() => setActiveMode('ethical')}
              >
                <Zap className="w-4 h-4" />
                Ethical
              </Button>
              <Button
                variant={activeMode === 'neural' ? 'quantum' : 'ghost'}
                size="sm"
                onClick={() => setActiveMode('neural')}
              >
                <Network className="w-4 h-4" />
                Neural
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-6 space-y-6">
        {/* PAS Score and Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border/30 shadow-depth">
            <PASScoreDial score={pasScore} />
          </Card>
          
          <Card className="p-6 bg-card border-border/30 shadow-consciousness">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-secondary mb-2">Ethical Alignment</h3>
              <div className="text-3xl font-bold text-secondary-glow">{ethicalAlignment}%</div>
              <div className="w-full bg-muted rounded-full h-2 mt-3">
                <div 
                  className="bg-consciousness h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${ethicalAlignment}%` }}
                ></div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border/30 shadow-synthetic">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-accent mb-2">Recursive Depth</h3>
              <div className="text-3xl font-bold text-accent-glow">{cognitiveState.recursion.toFixed(0)}%</div>
              <div className="text-sm text-muted-foreground mt-2">
                Σ-Matrix Stability: Active
              </div>
            </div>
          </Card>
        </div>

        {/* Mode-Specific Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {activeMode === 'mirror' && (
            <>
              <Card className="p-6 bg-card border-border/30 shadow-depth">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Cognitive Mirror</h3>
                <div className="space-y-4">
                  {Object.entries(cognitiveState).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="capitalize text-muted-foreground">{key}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div 
                            className="bg-neural h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-12 text-right">{value.toFixed(0)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <NeuralVisualization cognitiveState={cognitiveState} />
            </>
          )}

          {activeMode === 'reflect' && (
            <div className="lg:col-span-2">
              <ReflectiveInterface />
            </div>
          )}

          {activeMode === 'ethical' && (
            <div className="lg:col-span-2">
              <EthicalMatrix alignment={ethicalAlignment} />
            </div>
          )}

          {activeMode === 'neural' && (
            <div className="lg:col-span-2">
              <Card className="p-6 bg-card border-border/30 shadow-neural">
                <h3 className="text-xl font-semibold mb-4 text-primary">Neural Network Activity</h3>
                <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Network className="w-16 h-16 text-primary mx-auto animate-pulse" />
                    <p className="text-muted-foreground">Real-time neural processing visualization</p>
                    <p className="text-sm text-primary">ERPS Active • Σ-Matrix Stable • Quantum Synapse Online</p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};