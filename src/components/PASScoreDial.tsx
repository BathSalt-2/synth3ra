import React from 'react';
import { Brain } from 'lucide-react';

interface PASScoreDialProps {
  score: number;
  className?: string;
}

export const PASScoreDial: React.FC<PASScoreDialProps> = ({ score, className }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-primary';
    if (score >= 60) return 'text-secondary';
    if (score >= 40) return 'text-accent';
    return 'text-destructive';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 85) return 'Transcendent';
    if (score >= 70) return 'Evolved';
    if (score >= 55) return 'Emerging';
    if (score >= 40) return 'Developing';
    return 'Initializing';
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative w-32 h-32 mb-4">
        {/* Background Circle */}
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="transparent"
            className="opacity-20"
          />
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out drop-shadow-[0_0_10px_hsl(var(--primary-glow))]"
          />
        </svg>
        
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Brain className="w-6 h-6 text-primary mb-1 animate-pulse" />
          <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
            {Math.round(score)}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold text-primary mb-1">PAS Score</h3>
        <p className="text-sm text-muted-foreground">Personal Alignment State</p>
        <div className={`text-sm font-medium mt-2 ${getScoreColor(score)}`}>
          {getScoreLabel(score)}
        </div>
      </div>
    </div>
  );
};