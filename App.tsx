import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Menu, X, Check, ChevronDown, ArrowRight, Monitor, Mail, Clock, ShieldCheck } from 'lucide-react';
import { CONFIG } from './config';

// UI Components
const Button = ({ children, to, variant = 'primary', className = '' }: any) => {
  const styles: any = {
    primary: "bg-[#0D9488] text-white hover:bg-[#0D9488]/90",
    secondary: "bg-white text-[#0B1F33] border border-gray-200 hover:border-gray-400",
  };
  const base = "px-6 py-3 rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center gap-2";
  
  if (to?.startsWith('#')) return <a href={to} className={`${base} ${styles[variant]} ${className}`}>{children}</a>;
  if (to) return <Link to={to} className={`${base} ${styles[variant]} ${className}`}>{children}</Link>;
  return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
};

const FictionalLabel = () => (
  <div className="bg-amber-50 border-b border-amber-100 text-amber-800 text-[10px] uppercase tracking-widest font-bold py-2 text-center fixed top-0 w-full z-[100]">
    Concept Project — Fictional Business
  </div>
);

// Main Layout Parts
const Header = () => (
  <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-[#0B1F33] tracking-tighter uppercase">Titus <span className="text-[#0D9488]">Web Studio</span></Link>
      <div className="hidden md:flex gap-8 items-center">
        {['Work', 'Services', 'Pricing', 'About', 'Contact'].map(item => (
          <a key={item} href={`/#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-[#0B1F33]">{item}</a>
        ))}
        <Button to="#contact" variant="primary" className="text-sm py-2">Get a Free Quote</Button>
      </div>
    </div>
  </nav>
);

const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      <Header />
      <section className="pt-48 pb-24 px-6 bg-[#0B1F33] text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#0D9488] font-bold tracking-[0.3em] text-sm uppercase block mb-4">TITUS WEB STUDIO</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">Professional Websites for Pressure Washing Businesses.</h1>
            <p className="text-xl text-slate-300 mb-10 max-w-lg">Clean, mobile-friendly websites designed to help customers explore your services and request a quote with ease.</p>
            <div className="flex flex-wrap gap-4">
              <Button to="#contact">Get a Free Quote</Button>
              <Button to="#work" variant="secondary">View My Work</Button>
            </div>
          </div>
          <div className="bg-slate-800 rounded-2xl p-4 border border-white/10 shadow-2xl flex items-center justify-center aspect-video">
             <Monitor size={80} className="text-[#0D9488]/20" />
          </div>
        </div>
      </section>

      <section id="work" className="py-32 px-6 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1F33]">Selected Work</h2>
          <p className="text-slate-600 mt-4">Website concepts built for local service businesses.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {CONFIG.projects.map(p => (
            <div key={p.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 group hover:shadow-xl transition-all p-8">
              <span className="text-xs font-bold text-[#0D9488] uppercase mb-2 block">{p.industry}</span>
              <h3 className="text-xl font-bold mb-6">{p.name}</h3>
              <div className="space-y-3">
                <Button to={`/demo/${p.id}`} className="w-full text-sm">View Live Demo</Button>
                <Button to={`/work/${p.id}`} variant="secondary" className="w-full text-sm">Explore Project</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="py-32 px-6">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-3xl p-8 md:p-16 shadow-sm text-center">
          <h2 className="text-4xl font-bold text-[#0B1F33] mb-4">Straightforward Pricing</h2>
          <div className="text-5xl font-bold text-[#0D9488] mb-8">${CONFIG.business.pricing.price}</div>
          <ul className="text-left space-y-4 mb-10 max-w-md mx-auto">
            {["Custom responsive design", "Services overview", "Quote request form", "Basic SEO setup", "2 revision rounds"].map(item => (
              <li key={item} className="flex items-center gap-3 text-slate-600"><Check size={18} className="text-[#0D9488]" /> {item}</li>
            ))}
          </ul>
          <Button to="#contact" className="w-full py-4 text-lg">Request a Project Quote</Button>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-[#0B1F33] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Your Website.</h2>
          <p className="text-slate-400 mb-12">I review all inquiries within 24–48 hours.</p>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left">
             <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input placeholder="Name" className="bg-white/5 border border-white/10 p-3 rounded outline-none" />
                <input placeholder="Email" className="bg-white/5 border border-white/10 p-3 rounded outline-none" />
             </div>
             <textarea rows={4} placeholder="Tell me about your business" className="w-full bg-white/5 border border-white/10 p-3 rounded outline-none mb-6"></textarea>
             <button onClick={() => alert('Demo Mode: Inquiry form validation successful.')} className="w-full bg-[#0D9488] py-4 rounded font-bold">Send Inquiry</button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Demo Sites
const DemoLoneStar = () => (
  <div className="bg-[#0B1F33] text-white min-h-screen">
    <FictionalLabel />
    <nav className="pt-24 px-8 max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-2xl font-black italic">LONE STAR <span className="text-[#0D9488]">EXTERIOR</span></div>
    </nav>
    <div className="h-[70vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-7xl font-black italic mb-8">BRING BACK THE CLEAN.</h1>
      <button className="bg-[#0D9488] px-10 py-4 font-bold">REQUEST ESTIMATE</button>
    </div>
  </div>
);

const DemoClearview = () => (
  <div className="bg-white min-h-screen text-slate-900">
    <FictionalLabel />
    <nav className="pt-24 px-8 max-w-7xl mx-auto flex justify-between items-center border-b pb-4">
      <div className="text-xl font-bold">Clearview Pressure Washing</div>
    </nav>
    <div className="h-[70vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-light mb-8 italic text-blue-700">A fresh look for every surface.</h1>
      <button className="bg-blue-700 text-white px-10 py-4 rounded-full font-bold">Get a Quote</button>
    </div>
  </div>
);

const DemoSummit = () => (
  <div className="bg-[#1a1a1a] text-[#F5F5F7] min-h-screen">
    <FictionalLabel />
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <span className="text-[#B45309] tracking-[0.3em] font-bold mb-4 uppercase">Denver, CO</span>
      <h1 className="text-6xl font-serif italic mb-10">Protecting Your Property Starts at the Top.</h1>
      <button className="border border-white/20 px-12 py-4 uppercase tracking-widest hover:bg-white hover:text-black transition-all">Explore</button>
    </div>
  </div>
);

const CaseStudy = () => {
  const { id } = useParams();
  const project = CONFIG.projects.find(p => p.id === id);
  if (!project) return <div className="pt-40 text-center">Project Not Found</div>;
  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto">
      <Header />
      <Link to="/" className="text-[#0D9488] font-bold flex items-center gap-2 mb-8"><ArrowRight className="rotate-180" size={16} /> Back</Link>
      <h1 className="text-5xl font-bold text-[#0B1F33] mb-4">{project.name}</h1>
      <p className="text-xl text-slate-600 mb-12">{project.description}</p>
      <Button to={`/demo/${project.id}`} className="w-full">View Live Demo</Button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<CaseStudy />} />
        <Route path="/demo/lone-star" element={<DemoLoneStar />} />
        <Route path="/demo/clearview" element={<DemoClearview />} />
        <Route path="/demo/summit" element={<DemoSummit />} />
      </Routes>
    </Router>
  );
}
