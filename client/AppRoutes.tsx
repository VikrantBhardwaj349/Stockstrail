import { Routes, Route } from "react-router-dom";
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
import Others from "./pages/Others";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NseHolidays from "./pages/NseHolidays";
import BseHolidays from "./pages/BseHolidays";
import LetsTalk from "./pages/LetsTalk";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/mutual-funds" element={<MutualFunds />} />
    <Route path="/services/fixed-deposit" element={<FixedDeposit />} />
    <Route path="/services/insurance" element={<Insurance />} />
    <Route path="/services/loan" element={<Loan />} />
    <Route path="/services/others" element={<Others />} />
    <Route path="/open-demat" element={<OpenDemat />} />
    <Route path="/blog" element={<Blog />} />
    {/* Prefer slug route but keep legacy ID route working */}
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/blog/id/:postId" element={<BlogPost />} />
    <Route path="/nse-holidays" element={<NseHolidays />} />
    <Route path="/bse-holidays" element={<BseHolidays />} />
    <Route path="/calculators" element={<Calculators />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/lets-talk" element={<LetsTalk />} />
    <Route path="/about" element={<About />} />
    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);
