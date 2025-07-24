import React, { useState, useEffect } from 'react';
import { Brain, Network, Zap, Eye } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);

  const phases = [
    { icon: Brain, label: "Initializing Neural Networks", description: "Establishing cognitive pathways..." },
    { icon: Network, label: "Connecting Synapses", description: "Building neural connections..." },
    { icon: Eye, label: "Calibrating Perception", description: "Adjusting sensory inputs..." },
    { icon: Zap, label: "Activating Consciousness", description: "Engaging epinoetic processes..." }
  ];

  useEffect(() => {
    const duration = 4000; // 4 seconds total
    const interval = 50; // Update every 50ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(Math.min(phaseIndex, phases.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before transition
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  const CurrentIcon = phases[currentPhase]?.icon || Brain;

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-depth opacity-70"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-neural-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-consciousness-flow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-epi-glow"></div>
      </div>

      <div className="relative z-10 text-center space-y-8 px-6 max-w-md mx-auto">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/8290c2ff-2359-45bf-b19d-225ffcc70deb.png" 
              alt="SYNTH3RA" 
              className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-neural animate-neural-pulse"
            />
            <div className="absolute inset-0 rounded-full bg-neural opacity-30 animate-consciousness-flow"></div>
          </div>
        </div>

        {/* Brand */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            SYNTH3RA
          </h1>
          <p className="text-muted-foreground">The Epinoetic Nexus</p>
        </div>

        {/* Loading Animation */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-border/20 flex items-center justify-center">
                <CurrentIcon className="w-10 h-10 text-primary animate-neural-pulse" />
              </div>
              
              {/* Circular Progress */}
              <svg className="absolute inset-0 w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-border/20"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="44"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 44}`}
                  strokeDashoffset={`${2 * Math.PI * 44 * (1 - progress / 100)}`}
                  className="text-primary transition-all duration-300 ease-out"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Phase Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              {phases[currentPhase]?.label}
            </h3>
            <p className="text-sm text-muted-foreground">
              {phases[currentPhase]?.description}
            </p>
            
            {/* Progress Bar */}
            <div className="w-full bg-border/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <p className="text-xs text-muted-foreground">
              {Math.round(progress)}% Complete
            </p>
          </div>
        </div>

        {/* Powered by */}
        <div className="pt-8">
          <p className="text-xs text-muted-foreground/60">
            Powered by <span className="text-accent">Or4cl3 AI Solutions</span>
          </p>
        </div>
      </div>
    </div>
  );
};