import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

// Route-based Code Splitting and Lazy Loading
const DrelfLanding = lazy(() => import("./pages/drelflp"));
const Pixel = lazy(() => import("./pages/Pixel"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Pixel /> 
        </Suspense>
        <div className="relative">
          <Routes>
            <Route 
              path="/" 
              element={
                <Suspense fallback={<div className="min-h-screen bg-amber-50 animate-pulse" />}>
                  <DrelfLanding />
                </Suspense>
              } 
            /> 
          </Routes>
          <FloatingWhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
