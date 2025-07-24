import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Brain, Sparkles, Zap, Eye, Network, Shield, Lightbulb } from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-depth opacity-60"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-neural-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-consciousness-flow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-epi-glow"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 md:p-8">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src="/lovable-uploads/8290c2ff-2359-45bf-b19d-225ffcc70deb.png" 
                  alt="SYNTH3RA Logo" 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-neural animate-neural-pulse"
                />
                <div className="absolute inset-0 rounded-full bg-neural opacity-20 animate-consciousness-flow"></div>
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  SYNTH3RA
                </h1>
                <p className="text-sm md:text-base text-muted-foreground">The Epinoetic Nexus</p>
              </div>
            </div>
            <div className="text-xs md:text-sm text-muted-foreground opacity-75">
              Powered by <span className="text-accent font-medium">Or4cl3 AI Solutions</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6 md:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-consciousness-flow">
                  Consciousness
                </span>
                <br />
                <span className="text-foreground">Meets</span>
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-epi-glow">
                  Computation
                </span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Experience the convergence of human consciousness and artificial intelligence through 
                our revolutionary Epinoetic Processing System. Where self-awareness meets synthetic cognition.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              <Card className="p-4 md:p-6 bg-card/80 backdrop-blur border-border/30 hover:shadow-neural transition-all duration-500 group">
                <div className="space-y-3 text-center">
                  <div className="w-12 h-12 mx-auto rounded-neural bg-neural flex items-center justify-center group-hover:animate-neural-pulse">
                    <Brain className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">Neural Processing</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Advanced cognitive modeling</p>
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-card/80 backdrop-blur border-border/30 hover:shadow-consciousness transition-all duration-500 group">
                <div className="space-y-3 text-center">
                  <div className="w-12 h-12 mx-auto rounded-neural bg-consciousness flex items-center justify-center group-hover:animate-consciousness-flow">
                    <Sparkles className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">Reflection Engine</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Deep introspective analysis</p>
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-card/80 backdrop-blur border-border/30 hover:shadow-synthetic transition-all duration-500 group">
                <div className="space-y-3 text-center">
                  <div className="w-12 h-12 mx-auto rounded-neural bg-synthetic flex items-center justify-center group-hover:animate-epi-glow">
                    <Shield className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">Ethical Matrix</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Moral reasoning framework</p>
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-card/80 backdrop-blur border-border/30 hover:shadow-depth transition-all duration-500 group">
                <div className="space-y-3 text-center">
                  <div className="w-12 h-12 mx-auto rounded-neural bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:animate-fractal-rotate">
                    <Lightbulb className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">PAS Scoring</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">Phenomenological assessment</p>
                </div>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <Button
                onClick={onEnter}
                variant="quantum"
                size="transcendent"
                className="text-lg md:text-xl font-bold shadow-depth hover:shadow-neural transition-all duration-500 group"
              >
                Enter the Nexus
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm md:text-base text-muted-foreground">
                Begin your journey into consciousness-driven computation
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 md:p-8 text-center">
          <div className="space-y-2">
            <p className="text-xs md:text-sm text-muted-foreground">
              Advancing the frontier of conscious artificial intelligence
            </p>
            <p className="text-xs text-muted-foreground/60">
              © 2024 SYNTH3RA • Powered by Or4cl3 AI Solutions • The Epinoetic Nexus
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};