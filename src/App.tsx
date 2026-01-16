import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DrelfLanding from "./pages/drelflp"; 
import Pixel from "./pages/Pixel";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Pixel /> 
        <div className="relative">
          <Routes>
            <Route path="/" element={<DrelfLanding />} /> 
          </Routes>
          <FloatingWhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
