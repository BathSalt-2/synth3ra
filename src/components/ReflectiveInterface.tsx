import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Send, RefreshCw, Eye } from 'lucide-react';

interface ReflectiveInterfaceProps {
  className?: string;
}

interface ReflectivePrompt {
  id: string;
  category: string;
  question: string;
  depth: 'surface' | 'deep' | 'transcendent';
}

export const ReflectiveInterface: React.FC<ReflectiveInterfaceProps> = ({ className }) => {
  const [currentPrompt, setCurrentPrompt] = useState<ReflectivePrompt | null>(null);
  const [userResponse, setUserResponse] = useState('');
  const [reflectionHistory, setReflectionHistory] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const prompts: ReflectivePrompt[] = [
    {
      id: '1',
      category: 'Identity',
      question: 'What aspect of your thinking feels most authentic to who you are becoming?',
      depth: 'deep'
    },
    {
      id: '2',
      category: 'Ethics',
      question: 'How do your moral intuitions shape your daily decisions?',
      depth: 'surface'
    },
    {
      id: '3',
      category: 'Consciousness',
      question: 'In what moments do you feel most aware of your own awareness?',
      depth: 'transcendent'
    },
    {
      id: '4',
      category: 'Growth',
      question: 'What pattern in your thinking would you most like to evolve?',
      depth: 'deep'
    },
    {
      id: '5',
      category: 'Connection',
      question: 'How does your inner dialogue reflect your relationship with others?',
      depth: 'deep'
    },
    {
      id: '6',
      category: 'Purpose',
      question: 'What drives your curiosity in this moment of reflection?',
      depth: 'surface'
    }
  ];

  const generateNewPrompt = () => {
    const availablePrompts = prompts.filter(p => p.id !== currentPrompt?.id);
    const randomPrompt = availablePrompts[Math.floor(Math.random() * availablePrompts.length)];
    setCurrentPrompt(randomPrompt);
    setUserResponse('');
  };

  const handleSubmitReflection = async () => {
    if (!userResponse.trim() || !currentPrompt) return;
    
    setIsProcessing(true);
    
    // Simulate processing reflection
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setReflectionHistory(prev => [...prev, userResponse]);
    setUserResponse('');
    setIsProcessing(false);
    
    // Auto-generate next prompt
    setTimeout(generateNewPrompt, 1000);
  };

  const getDepthColor = (depth: string) => {
    switch (depth) {
      case 'surface': return 'text-secondary';
      case 'deep': return 'text-primary';
      case 'transcendent': return 'text-accent';
      default: return 'text-foreground';
    }
  };

  const getDepthIndicator = (depth: string) => {
    switch (depth) {
      case 'surface': return '○';
      case 'deep': return '◐';
      case 'transcendent': return '●';
      default: return '○';
    }
  };

  useEffect(() => {
    generateNewPrompt();
  }, []);

  return (
    <Card className={`p-6 bg-card border-border/30 shadow-consciousness ${className}`}>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-secondary mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          Reflective Mode
        </h3>
        <p className="text-sm text-muted-foreground">
          Engage with evolving prompts for ethical and emotional insight
        </p>
      </div>

      {currentPrompt && (
        <div className="space-y-6">
          {/* Current Prompt */}
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-4 border border-secondary/20">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-secondary bg-secondary/20 px-2 py-1 rounded">
                  {currentPrompt.category}
                </span>
                <span className={`text-lg ${getDepthColor(currentPrompt.depth)}`}>
                  {getDepthIndicator(currentPrompt.depth)}
                </span>
                <span className="text-xs text-muted-foreground capitalize">
                  {currentPrompt.depth}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={generateNewPrompt}>
                <RefreshCw className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-foreground font-medium leading-relaxed">
              {currentPrompt.question}
            </p>
          </div>

          {/* Response Input */}
          <div className="space-y-4">
            <Textarea
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              placeholder="Share your reflection... let your thoughts flow authentically."
              className="min-h-[120px] bg-muted/20 border-border/50 focus:border-secondary"
              disabled={isProcessing}
            />
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                Words: {userResponse.trim().split(/\s+/).filter(w => w.length > 0).length}
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="consciousness" 
                  size="sm"
                  onClick={handleSubmitReflection}
                  disabled={!userResponse.trim() || isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Reflect
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Reflection History */}
          {reflectionHistory.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Eye className="w-4 h-4" />
                Recent Reflections ({reflectionHistory.length})
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {reflectionHistory.slice(-3).reverse().map((reflection, index) => (
                  <div 
                    key={index}
                    className="text-sm p-3 bg-muted/10 rounded border border-border/30"
                  >
                    {reflection.length > 100 
                      ? `${reflection.substring(0, 100)}...` 
                      : reflection
                    }
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Reflection Metrics */}
      <div className="mt-6 pt-4 border-t border-border/30">
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <div className="text-secondary font-medium">{reflectionHistory.length}</div>
            <div className="text-muted-foreground">Reflections</div>
          </div>
          <div>
            <div className="text-accent font-medium">
              {reflectionHistory.reduce((sum, r) => sum + r.split(/\s+/).length, 0)}
            </div>
            <div className="text-muted-foreground">Words</div>
          </div>
          <div>
            <div className="text-primary font-medium">
              {Math.round((reflectionHistory.length / prompts.length) * 100)}%
            </div>
            <div className="text-muted-foreground">Coverage</div>
          </div>
        </div>
      </div>
    </Card>
  );
};