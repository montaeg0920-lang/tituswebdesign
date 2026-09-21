import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import { Menu, X, Check, ChevronDown, ArrowRight, Monitor, Smartphone, Mail, ShieldCheck, Clock, Layers, Star, ExternalLink } from 'lucide-react';
import { CONFIG } from './config';

// --- SHARED UI COMPONENTS ---

const Button = ({ children, to, variant = 'primary', className = '' }: any) => {
  const base = "px-6 py-3 rounded-md font-medium transition-all duration-200 inline-flex items-center justify-center gap-2";
  const styles: any = {
    primary: "bg-[#0D9488] text-white hover:bg-[#0D9488]/90",
    secondary: "bg-white text-[#0B1F33] border border-gray-200 hover:border-gray-400",
    outline: "border-2 border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488] hover:text-white"
  };
  
  if (to?.startsWith('#')) return <a href={to} className={`${base} ${styles[variant]} ${className}`}>{children}</a>;
  if (to) return <Link to={to} className={`${base} ${styles[variant]} ${className}`}>{children}</Link>;
  return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
};

const Section = ({ children, id, className = "" }: any) => (
  <section id={id} className={`py-24 px-6 md:py-32 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const SectionHeading = ({ eyebrow, title, description, light = false }: any) => (
  <div className="mb-16">
    {eyebrow && <span className="text-[#0D9488] font-bold tracking-[0.2em] uppercase mb-4 block text-xs">{eyebrow}</span>}
    <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
    {description && <p className={`max-w-2xl text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>}
  </div>
);

const DemoBanner = () => (
  <div className="bg-amber-50 border-b border-amber-100 text-amber-800 text-[10px] uppercase tracking-widest font-bold py-2 text-center fixed top-0 w-full z-[100]">
    Concept Project — Fictional Business
  </div>
);

// --- NAVIGATION ---

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  if (location.pathname.includes('/demo/')) return null;

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-navy tracking-tighter uppercase">Titus <span className="text-teal">Web Studio</span></Link>
        <div className="hidden md:flex gap-8 items-center">
          {['Work', 'Services', 'Pricing', 'About', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-navy">{item}</a>
          ))}
          <Button to="#contact" variant="primary" className="text-sm">Get a Free Quote</Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 md:hidden">
          {['Work', 'Services', 'Pricing', 'About', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="text-lg font-bold">{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
};

// --- MAIN PAGES ---

const Homepage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="pt-48 pb-24 px-6 bg-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-teal font-bold tracking-[0.3em] text-sm uppercase block mb-6">TITUS WEB STUDIO</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">Professional Websites for Pressure Washing Businesses.</h1>
            <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">Clean, mobile-friendly websites designed to help customers explore your services and request a quote with ease.</p>
            <div className="flex flex-wrap gap-4">
              <Button to="#contact">Get a Free Quote</Button>
              <Button to="#work" variant="secondary">View My Work</Button>
            </div>
            <div className="mt-16 flex flex-wrap gap-8 text-sm opacity-50">
              <span className="flex items-center gap-2"><Check size={16} className="text-teal" /> Custom Design</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-teal" /> Mobile-Friendly</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-teal" /> Easy Quote Requests</span>
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-800 rounded-2xl p-3 border border-white/10 shadow-2xl">
              <div className="aspect-video bg-navy rounded-lg flex items-center justify-center border border-white/5">
                 <Monitor className="text-teal/10" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <Section id="work" className="bg-off-white">
        <SectionHeading title="Selected Work" description="Thoughtful website concepts built for local service businesses." />
        <div className="grid md:grid-cols-3 gap-10">
          {CONFIG.projects.map(p => (
            <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 group hover:shadow-2xl transition-all duration-500">
              <div className="h-64 bg-slate-100 flex items-center justify-center p-12">
                 <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{p.name} Visual Preview</div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-teal uppercase mb-3 block">{p.industry}</span>
                <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed">{p.description}</p>
                <div className="flex flex-col gap-3">
                  <Button to={`/demo/${p.id}`} variant="primary" className="text-sm">View Live Demo</Button>
                  <Button to={`/work/${p.id}`} variant="secondary" className="text-sm">Explore Project</Button>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-50 text-[10px] text-center text-gray-400 font-bold uppercase tracking-tighter">Concept Project — Fictional Business</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services">
        <SectionHeading title="Web Design Built Around Your Business." />
        <div className="grid md:grid-cols-3 gap-16">
          {[
            { t: "Custom Website Design", d: "Modern, mobile-friendly websites tailored to your services, brand, and customers." },
            { t: "Website Redesign", d: "Give an outdated website a cleaner look and a more intuitive customer experience." },
            { t: "Quote-Focused Landing Pages", d: "Focused pages that make it easy for visitors to understand your offer and get in touch." }
          ].map((s, i) => (
            <div key={i} className="group">
              <div className="w-12 h-12 bg-off-white rounded-lg flex items-center justify-center mb-8 group-hover:bg-teal group-hover:text-white transition-colors">
                {i === 0 ? <Monitor size={24} /> : i === 1 ? <Layers size={24} /> : <Smartphone size={24} />}
              </div>
              <h3 className="text-xl font-bold mb-4">{s.t}</h3>
              <p className="text-slate-600 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" className="bg-off-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Straightforward Pricing." />
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-16 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between mb-12 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-navy mb-2">{CONFIG.business.pricing.package}</h3>
                <p className="text-slate-500">Perfect for small businesses looking to grow.</p>
              </div>
              <div className="md:text-right">
                <span className="text-sm text-slate-400 font-bold uppercase block mb-1">Starting at</span>
                <span className="text-6xl font-bold text-teal">${CONFIG.business.pricing.price}</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-y-5 gap-x-12 mb-12">
              {["Up to 4 pages", "Custom responsive design", "Services overview", "Project photo gallery", "Quote request form", "Phone and email links", "Basic on-page SEO setup", "2 revision rounds"].map(item => (
                <div key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <Check size={18} className="text-teal" /> {item}
                </div>
              ))}
            </div>
            <Button to="#contact" className="w-full py-5 text-xl">Request a Project Quote</Button>
            <p className="mt-8 text-center text-xs text-slate-400">
              Timeline: {CONFIG.business.pricing.timeline} after materials received. Domain and hosting not included.
            </p>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="aspect-square bg-off-white rounded-3xl flex items-center justify-center">
             <span className="text-slate-300 font-black text-4xl uppercase tracking-[0.5em]">Titus</span>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-navy mb-2">Hi, I'm Titus.</h2>
            <p className="text-teal font-bold mb-8">Freelance Web Designer</p>
            <div className="text-slate-600 space-y-6 text-lg leading-relaxed">
              <p>I'm a freelance web designer based in South Korea, working with businesses worldwide. I help small service businesses build clean, professional websites that make their services easy to understand.</p>
              <p>My approach is simple: thoughtful design, clear communication, and a website built around what your business actually needs.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-navy text-white">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <SectionHeading light title="Let's Build Your Website." description="Tell me about your business and your goals. I'll review your request and get back to you by email." />
            <div className="space-y-8">
              <div className="flex items-center gap-4 text-slate-300"><Mail className="text-teal" /> {CONFIG.business.email}</div>
              <div className="flex items-center gap-4 text-slate-300"><Clock className="text-teal" /> 7–10 Business Day Turnaround</div>
              <div className="flex items-center gap-4 text-slate-300"><ShieldCheck className="text-teal" /> 14 Days Post-Launch Support</div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <ContactForm />
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-gray-100 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} {CONFIG.business.name}. All rights reserved.
      </footer>
    </div>
  );
};

// --- CONTACT FORM LOGIC ---

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: any) => { e.preventDefault(); setSent(true); };

  if (sent) return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-6 text-teal"><Check size={32} /></div>
      <h3 className="text-2xl font-bold mb-4">Inquiry Received</h3>
      <p className="text-slate-400 mb-8">This is a demonstration. No real email was sent, but in production, this would go straight to Titus.</p>
      <button onClick={() => setSent(false)} className="text-teal font-bold underline">Reset Form</button>
    </div>
  );

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <input required placeholder="Name *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-teal" />
        <input required type="email" placeholder="Email *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-teal" />
      </div>
      <input placeholder="Business Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-teal" />
      <textarea required rows={4} placeholder="Project Description *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-teal"></textarea>
      <button className="w-full bg-teal text-white font-bold py-4 rounded-lg hover:bg-teal/90 transition-all">Send My Project Inquiry</button>
    </form>
  );
};

// --- CASE STUDY PAGE ---

const CaseStudy = () => {
  const { id } = useParams();
  const project = CONFIG.projects.find(p => p.id === id);
  if (!project) return <div className="p-20 text-center">Project not found</div>;

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-teal font-bold flex items-center gap-2 mb-12 hover:translate-x-[-5px] transition-transform"><ArrowRight className="rotate-180" size={16} /> Back to All Work</Link>
        <span className="bg-amber-50 text-amber-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">Concept Project</span>
        <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">{project.name}</h1>
        <div className="flex gap-4 text-slate-400 font-bold text-sm mb-12"><span>{project.industry}</span><span>•</span><span>{project.location}</span></div>
        <div className="aspect-video bg-off-white border border-gray-100 rounded-3xl mb-12 flex items-center justify-center text-slate-200">
           <Monitor size={100} strokeWidth={1} />
        </div>
        <div className="prose prose-xl text-slate-600 mb-16 space-y-6">
          <h2 className="text-2xl font-bold text-navy">Project Overview</h2>
          <p>{project.description}</p>
        </div>
        <Button to={`/demo/${project.id}`} className="w-full md:w-auto px-12 py-4">View Live Demo Site</Button>
      </div>
    </div>
  );
};

// --- DEMO 1: LONE STAR ---
const DemoLoneStar = () => (
  <div className="bg-white min-h-screen">
    <DemoBanner />
    <nav className="pt-20 px-8 flex justify-between items-center max-w-7xl mx-auto h-24">
      <div className="text-2xl font-black text-navy italic">LONE STAR <span className="text-teal">EXTERIOR</span></div>
      <button className="bg-teal text-white px-6 py-2 font-bold rounded-sm">FREE ESTIMATE</button>
    </nav>
    <header className="py-32 px-8 text-center bg-navy text-white">
      <h1 className="text-6xl md:text-8xl font-black mb-8 italic uppercase leading-none">Bring Back <br/> The Clean.</h1>
      <p className="text-xl text-slate-400 mb-12">Top-rated pressure washing services in Austin, Texas.</p>
      <button className="bg-teal text-white px-10 py-5 font-bold text-xl uppercase italic">Request My Quote</button>
    </header>
    <div className="py-20 text-center text-slate-300 text-[10px] font-bold uppercase tracking-[0.4em]">
      Sample Testimonials — Fictional Content for Design Demonstration
    </div>
    <div className="max-w-4xl mx-auto px-8 py-20 italic text-2xl text-center text-slate-600">
       "Booking an estimate was simple, and the whole process felt straightforward."
    </div>
  </div>
);

// --- DEMO 2: CLEARVIEW ---
const DemoClearview = () => (
  <div className="bg-white min-h-screen">
    <DemoBanner />
    <nav className="pt-20 px-8 flex justify-between items-center max-w-7xl mx-auto h-24 border-b border-gray-50">
      <div className="text-xl font-bold text-blue-700">Clearview Pressure Washing</div>
      <button className="bg-blue-700 text-white px-6 py-2 rounded-full font-bold">Get Quote</button>
    </nav>
    <header className="py-40 px-8 text-center max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-light mb-8 text-slate-900 tracking-tight">A fresh look for every surface.</h1>
      <p className="text-lg text-slate-500 mb-10 leading-relaxed">We specialize in residential pressure washing, helping Dallas homeowners keep their curb appeal at its best.</p>
      <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold">See Our Services</button>
    </header>
    <div className="py-20 text-center text-slate-300 text-[10px] font-bold uppercase tracking-[0.4em]">
      Sample Testimonials — Fictional Content for Design Demonstration
    </div>
  </div>
);

// --- DEMO 3: SUMMIT ---
const DemoSummit = () => (
  <div className="bg-[#1a1a1a] text-[#F5F5F7] min-h-screen font-serif">
    <DemoBanner />
    <nav className="pt-20 px-8 flex justify-between items-center max-w-7xl mx-auto h-24">
      <div className="text-xl tracking-[0.5em] font-light">SUMMIT</div>
      <div className="text-[10px] border border-white/20 px-4 py-1 uppercase tracking-widest">Navigation</div>
    </nav>
    <header className="h-[80vh] flex flex-col justify-center items-center text-center px-8">
      <span className="text-[#B45309] uppercase tracking-[0.4em] text-xs font-bold mb-6">Denver, Colorado</span>
      <h1 className="text-5xl md:text-7xl font-medium mb-12 max-w-4xl italic">Protecting Your Property Starts at the Top.</h1>
      <div className="w-20 h-[1px] bg-[#B45309] mb-12"></div>
      <button className="border border-white/20 px-12 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">View Services</button>
    </header>
    <div className="py-20 text-center text-white/10 text-[10px] font-bold uppercase tracking-[0.4em]">
      Sample Testimonials — Fictional Content for Design Demonstration
    </div>
  </div>
);

// --- APP ROUTING ---

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/work/:id" element={<CaseStudy />} />
        <Route path="/demo/lone-star" element={<DemoLoneStar />} />
        <Route path="/demo/clearview" element={<DemoClearview />} />
        <Route path="/demo/summit" element={<DemoSummit />} />
      </Routes>
    </Router>
  );
}