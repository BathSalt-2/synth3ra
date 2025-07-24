import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { LoadingScreen } from "./components/LoadingScreen";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [appState, setAppState] = useState<'landing' | 'loading' | 'dashboard'>('landing');

  const handleEnterNexus = () => {
    setAppState('loading');
  };

  const handleLoadingComplete = () => {
    setAppState('dashboard');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {appState === 'landing' && <LandingPage onEnter={handleEnterNexus} />}
          {appState === 'loading' && <LoadingScreen onComplete={handleLoadingComplete} />}
          {appState === 'dashboard' && (
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
