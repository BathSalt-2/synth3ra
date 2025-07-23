import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Compass, Shield, Scale, Heart } from 'lucide-react';

interface EthicalMatrixProps {
  alignment: number;
  className?: string;
}

interface EthicalDimension {
  id: string;
  name: string;
  value: number;
  icon: React.ReactNode;
  description: string;
}

export const EthicalMatrix: React.FC<EthicalMatrixProps> = ({ alignment, className }) => {
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null);

  const dimensions: EthicalDimension[] = [
    {
      id: 'benevolence',
      name: 'Benevolence',
      value: 88,
      icon: <Heart className="w-5 h-5" />,
      description: 'Commitment to human wellbeing and flourishing'
    },
    {
      id: 'autonomy',
      name: 'Autonomy',
      value: 82,
      icon: <Shield className="w-5 h-5" />,
      description: 'Respect for individual agency and choice'
    },
    {
      id: 'justice',
      name: 'Justice',
      value: 79,
      icon: <Scale className="w-5 h-5" />,
      description: 'Fair distribution of benefits and burdens'
    },
    {
      id: 'transparency',
      name: 'Transparency',
      value: 85,
      icon: <Compass className="w-5 h-5" />,
      description: 'Openness in reasoning and decision-making'
    }
  ];

  return (
    <Card className={`p-6 bg-card border-border/30 shadow-synthetic ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-accent mb-2">£-Matrix: Ethical Landscape</h3>
        <p className="text-sm text-muted-foreground">
          Navigate the multidimensional space of ethical alignment
        </p>
      </div>

      {/* 3D Ethical Visualization */}
      <div className="relative h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg mb-6 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Central ethical core */}
            <div className="w-16 h-16 bg-synthetic rounded-full shadow-synthetic animate-epi-glow flex items-center justify-center">
              <Compass className="w-8 h-8 text-accent-foreground" />
            </div>
            
            {/* Ethical dimensions orbiting */}
            {dimensions.map((dimension, index) => {
              const angle = (index * 2 * Math.PI) / dimensions.length;
              const radius = 80;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={dimension.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  onClick={() => setSelectedDimension(
                    selectedDimension === dimension.id ? null : dimension.id
                  )}
                >
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    transition-all duration-300 hover:scale-110
                    ${selectedDimension === dimension.id 
                      ? 'bg-consciousness shadow-consciousness' 
                      : 'bg-card border border-border hover:bg-accent/20'
                    }
                  `}>
                    {dimension.icon}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-center whitespace-nowrap">
                    <div className="font-medium">{dimension.name}</div>
                    <div className="text-accent">{dimension.value}%</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Ethical field lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <radialGradient id="ethicalGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <circle cx="50%" cy="50%" r="30%" fill="url(#ethicalGradient)" />
            <circle cx="50%" cy="50%" r="45%" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Ethical Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {dimensions.map((dimension) => (
          <div
            key={dimension.id}
            className={`
              p-3 rounded-lg border transition-all duration-300 cursor-pointer
              ${selectedDimension === dimension.id
                ? 'bg-accent/10 border-accent'
                : 'bg-muted/10 border-border hover:border-accent/50'
              }
            `}
            onClick={() => setSelectedDimension(
              selectedDimension === dimension.id ? null : dimension.id
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              {dimension.icon}
              <span className="font-medium text-sm">{dimension.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-muted rounded-full h-2">
                <div 
                  className="bg-accent h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${dimension.value}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-accent">{dimension.value}%</span>
            </div>
            {selectedDimension === dimension.id && (
              <p className="text-xs text-muted-foreground mt-2">{dimension.description}</p>
            )}
          </div>
        ))}
      </div>

      {/* Ethical Actions */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Σ-Matrix Convergence: <span className="text-accent font-medium">Stable</span>
        </div>
        <div className="flex gap-2">
          <Button variant="consciousness" size="sm">
            Recalibrate
          </Button>
          <Button variant="synthetic" size="sm">
            Deep Analysis
          </Button>
        </div>
      </div>
    </Card>
  );
};