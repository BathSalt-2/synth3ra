import React, { useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Network } from 'lucide-react';

interface CognitiveState {
  introspection: number;
  synthesis: number;
  emergence: number;
  recursion: number;
}

interface NeuralVisualizationProps {
  cognitiveState: CognitiveState;
  className?: string;
}

export const NeuralVisualization: React.FC<NeuralVisualizationProps> = ({ 
  cognitiveState, 
  className 
}) => {
  const nodes = useMemo(() => {
    const nodeData = [
      { id: 'introspection', x: 20, y: 30, value: cognitiveState.introspection, color: 'primary' },
      { id: 'synthesis', x: 80, y: 25, value: cognitiveState.synthesis, color: 'secondary' },
      { id: 'emergence', x: 70, y: 70, value: cognitiveState.emergence, color: 'accent' },
      { id: 'recursion', x: 30, y: 75, value: cognitiveState.recursion, color: 'primary' },
    ];

    return nodeData.map(node => ({
      ...node,
      size: Math.max(8, (node.value / 100) * 20),
      opacity: Math.max(0.3, node.value / 100)
    }));
  }, [cognitiveState]);

  const connections = useMemo(() => [
    { from: 0, to: 1, strength: (nodes[0].value + nodes[1].value) / 200 },
    { from: 1, to: 2, strength: (nodes[1].value + nodes[2].value) / 200 },
    { from: 2, to: 3, strength: (nodes[2].value + nodes[3].value) / 200 },
    { from: 3, to: 0, strength: (nodes[3].value + nodes[0].value) / 200 },
    { from: 0, to: 2, strength: (nodes[0].value + nodes[2].value) / 200 },
    { from: 1, to: 3, strength: (nodes[1].value + nodes[3].value) / 200 },
  ], [nodes]);

  return (
    <Card className={`p-6 bg-card border-border/30 shadow-neural ${className}`}>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-primary mb-2">Neural Network State</h3>
        <p className="text-sm text-muted-foreground">
          ERPS visualization of cognitive processes
        </p>
      </div>

      <div className="relative h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg overflow-hidden">
        <svg className="w-full h-full">
          {/* Connection lines */}
          {connections.map((connection, index) => {
            const fromNode = nodes[connection.from];
            const toNode = nodes[connection.to];
            return (
              <line
                key={index}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="hsl(var(--primary))"
                strokeWidth={Math.max(1, connection.strength * 4)}
                strokeOpacity={connection.strength * 0.6}
                className="animate-pulse"
              />
            );
          })}

          {/* Neural nodes */}
          {nodes.map((node, index) => (
            <g key={node.id}>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.size}
                fill={`hsl(var(--${node.color}))`}
                fillOpacity={node.opacity}
                className="animate-neural-pulse"
              />
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.size * 1.5}
                fill="none"
                stroke={`hsl(var(--${node.color}))`}
                strokeWidth="1"
                strokeOpacity="0.3"
                className="animate-pulse"
              />
            </g>
          ))}
        </svg>

        {/* Node labels */}
        {nodes.map((node) => (
          <div
            key={`label-${node.id}`}
            className="absolute transform -translate-x-1/2 text-xs font-medium"
            style={{
              left: `${node.x}%`,
              top: `calc(${node.y}% + 30px)`,
            }}
          >
            <div className="bg-background/80 backdrop-blur-sm px-2 py-1 rounded border border-border/50">
              <div className="capitalize text-foreground">{node.id}</div>
              <div className="text-muted-foreground">{node.value.toFixed(0)}%</div>
            </div>
          </div>
        ))}

        {/* Central processing indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-neural rounded-full shadow-neural animate-neural-pulse flex items-center justify-center">
            <Network className="w-3 h-3 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Neural metrics */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Processing Load:</span>
          <span className="text-primary font-medium">
            {((nodes.reduce((sum, node) => sum + node.value, 0) / nodes.length)).toFixed(0)}%
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Network Stability:</span>
          <span className="text-secondary font-medium">Optimal</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Recursive Depth:</span>
          <span className="text-accent font-medium">Layer {Math.ceil(cognitiveState.recursion / 25)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Emergence Factor:</span>
          <span className="text-primary font-medium">{(cognitiveState.emergence / 10).toFixed(1)}x</span>
        </div>
      </div>
    </Card>
  );
};