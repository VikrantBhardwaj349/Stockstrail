import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import OpenDemat from "./pages/OpenDemat";
import Calculators from "./pages/Calculators";
import Contact from "./pages/Contact";
import MutualFunds from "./pages/MutualFunds";
import FixedDeposit from "./pages/FixedDeposit";
import Insurance from "./pages/Insurance";
import Loan from "./pages/Loan";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/mutual-funds" element={<MutualFunds />} />
          <Route path="/services/fixed-deposit" element={<FixedDeposit />} />
          <Route path="/services/insurance" element={<Insurance />} />
          <Route path="/services/loan" element={<Loan />} />
          <Route path="/open-demat" element={<OpenDemat />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/calculators" element={<Calculators />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
