import { motion } from 'motion/react';
import { Bell, HelpCircle, ArrowRight, ShieldCheck, Activity, Database, RefreshCw, ChevronRight, BarChart3, Clock } from 'lucide-react';
import { useState } from 'react';
import AccessPage from './AccessPage';
import SAPSecurityPage from './SAPSecurityPage';
import JobSchedulingPage from './JobSchedulingPage';
import BasisPage from './BasisPage';

const AvayaLogo = () => (
  <img src="/Avaya-IT-Header-Logo.png" alt="Enterprise IT" className="h-10 w-auto object-contain" />
);

const Navbar = ({ currentPage, onNavigate }: { currentPage: string, onNavigate: (page: string) => void }) => (
  <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-[#E6E6E6]">
    <nav className="flex justify-between items-center w-full px-8 py-3 max-w-screen-2xl mx-auto">
      <div className="flex items-center gap-12">
        <button onClick={() => onNavigate('home')} className="flex-shrink-0"><AvayaLogo /></button>
        <div className="hidden md:flex items-center gap-8 font-oxygen font-light tracking-tight">
          <a className={`py-1 cursor-pointer transition-colors ${currentPage === 'home' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`} onClick={() => onNavigate('home')}>Systems</a>
          <a className="text-on-surface-variant py-1 cursor-default opacity-60">Access</a>
          <a className={`py-1 cursor-pointer transition-colors ${currentPage === 'automation' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`} onClick={() => onNavigate('automation')}>Automation</a>
          <a className={`py-1 cursor-pointer transition-colors ${currentPage === 'teams' ? 'text-primary font-bold border-b-2 border-primary' : 'text-on-surface-variant hover:text-primary'}`} onClick={() => onNavigate('teams')}>Teams</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-on-surface-variant hover:bg-[#F3F3F3] rounded-full transition-all"><Bell size={20} /></button>
        <button className="p-2 text-on-surface-variant hover:bg-[#F3F3F3] rounded-full transition-all"><HelpCircle size={20} /></button>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#E6E6E6]">
          <img alt="User profile" className="w-full h-full object-cover" src="https://picsum.photos/seed/executive/100/100" referrerPolicy="no-referrer" />
        </div>
      </div>
    </nav>
  </header>
);

const Hero = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <section className="bg-[#F5F5F5] py-24 px-8 relative overflow-hidden">
    <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full md:w-1/2 space-y-8 z-10">
        <h1 className="text-6xl md:text-8xl font-oxygen font-light tracking-tighter text-on-surface leading-[0.9]">
          Core <br /><span className="font-bold text-primary">Operations</span> Hub
        </h1>
        <p className="text-lg md:text-xl font-noto text-on-surface-variant max-w-xl leading-relaxed">
          The central intelligence layer for enterprise infrastructure. Seamlessly manage global access, SAP security landscapes, and high-velocity automation workflows.
        </p>
        <div className="pt-4 flex gap-6">
          <button onClick={() => onNavigate('access')} className="bg-primary text-white px-8 py-4 font-oxygen font-bold tracking-tight hover:opacity-90 transition-all flex items-center gap-2" style={{borderRadius:'4px 4px 32px 4px'}}>
            Explore Systems <ArrowRight size={18} />
          </button>
          <button className="border-b-2 border-primary/20 hover:border-primary transition-all px-2 py-4 font-oxygen font-bold text-primary">Quick Documentation</button>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full md:w-1/2 relative">
        <div className="relative w-full aspect-video overflow-hidden shadow-2xl z-10" style={{borderRadius:'4px 4px 40px 4px'}}>
          <img alt="Technology background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute -top-4 -left-4 w-full h-full opacity-20 blur-2xl -z-10" style={{borderRadius:'4px 4px 40px 4px', background:'linear-gradient(135deg, #61D6FF 0%, #9C4DE8 50%, #DA291C 100%)'}}></div>
      </motion.div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description, pageKey, onNavigate }: any) => (
  <div className="relative group">
    <div className="absolute inset-0 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{borderRadius:'4px 4px 40px 4px', background:'linear-gradient(135deg, #61D6FF 0%, #9C4DE8 50%, #DA291C 100%)'}}></div>
    <div className="relative bg-white border border-[#E6E6E6] p-8 h-full flex flex-col transition-all duration-300 z-10 group-hover:-translate-x-1 group-hover:-translate-y-1" style={{borderRadius:'4px 4px 32px 4px'}}>
      <div className="mb-6"><Icon className="w-10 h-10 avaya-gradient-text" strokeWidth={1.5} /></div>
      <h3 className="font-oxygen font-bold text-xl text-on-surface mb-4">{title}</h3>
      <p className="font-noto text-on-surface-variant text-sm flex-grow leading-relaxed">{description}</p>
      <a className="mt-8 text-[#0194D7] font-oxygen font-bold flex items-center gap-2 group/link cursor-pointer" onClick={() => onNavigate(pageKey)}>
        Go to Team Site <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
      </a>
    </div>
  </div>
);

const ServiceGrid = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <section className="py-24 px-8 max-w-screen-2xl mx-auto">
    <div className="mb-16">
      <h2 className="text-sm font-oxygen font-bold uppercase tracking-[0.3em] text-primary mb-2">Service Portals</h2>
      <div className="h-1 w-24 avaya-gradient-bg"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: ShieldCheck, title: 'IT-Access Management', description: 'Centralized identity governance and lifecycle management for global internal resources.', pageKey: 'access' },
        { icon: Activity, title: 'SAP Security', description: 'Hardening the ERP core through advanced role design and continuous GRC monitoring.', pageKey: 'sap' },
        { icon: Database, title: 'Basis', description: 'Infrastructure administration and system performance tuning for mission-critical stacks.', pageKey: 'basis' },
        { icon: RefreshCw, title: 'Enterprise Job Scheduling', description: 'Orchestrating complex batch processing and automated workflows across the global estate.', pageKey: 'scheduling' },
      ].map((s) => <ServiceCard key={s.title} {...s} onNavigate={onNavigate} />)}
    </div>
  </section>
);

const SystemIntelligence = () => (
  <section className="bg-[#F3F3F3] py-24 px-8 border-t border-[#E6E6E6]">
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-4xl font-oxygen font-light text-on-surface mb-4">System <span className="font-bold">Intelligence</span></h2>
          <p className="font-noto text-on-surface-variant max-w-lg">Latest updates and operational status from the core technology stack.</p>
        </div>
        <button className="font-noto text-primary font-bold border border-primary/20 px-6 py-2 rounded-[4px] hover:bg-white transition-all">View All Reports</button>
      </div>
      <div className="flex flex-col gap-4">
        {[
          { icon: BarChart3, iconBg: '#D2F5FF', iconColor: '#0194D7', title: 'Quarterly SAP Security Audit Complete', status: 'Status: 100% Compliant • Published 2h ago' },
          { icon: Clock, iconBg: '#E6D6FC', iconColor: '#683193', title: 'Job Scheduling Maintenance Window', status: 'Scheduled: Sunday 02:00 UTC • Impact: Minimal' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 flex items-center justify-between group cursor-pointer hover:bg-white/80 transition-all shadow-sm" style={{borderRadius:'4px 4px 32px 4px'}}>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-[4px]" style={{backgroundColor: item.iconBg}}>
                <item.icon style={{color: item.iconColor}} size={24} />
              </div>
              <div>
                <h4 className="font-oxygen font-bold text-on-surface">{item.title}</h4>
                <p className="text-xs font-noto text-on-surface-variant mt-1">{item.status}</p>
              </div>
            </div>
            <ChevronRight className="text-on-surface-variant group-hover:translate-x-2 transition-transform" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white w-full mt-auto border-t border-[#E6E6E6]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-10 w-full max-w-screen-2xl mx-auto">
      <div className="space-y-4">
        <AvayaLogo />
        <p className="font-noto text-xs uppercase tracking-widest text-on-surface-variant max-w-xs leading-loose">© 2025 Enterprise IT Core Systems. All rights reserved.</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          {['Internal Documentation', 'Security Policy'].map(l => <a key={l} className="font-noto text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all" href="#">{l}</a>)}
        </div>
        <div className="flex flex-col gap-3">
          {['Support Desk', 'System Status'].map(l => <a key={l} className="font-noto text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all" href="#">{l}</a>)}
        </div>
      </div>
    </div>
  </footer>
);

const ComingSoon = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-96 gap-4">
    <div className="h-1 w-24 avaya-gradient-bg mb-4"></div>
    <h2 className="text-3xl font-oxygen font-light text-on-surface">{title}</h2>
    <p className="font-noto text-on-surface-variant">This page is coming soon.</p>
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && <><Hero onNavigate={setCurrentPage} /><ServiceGrid onNavigate={setCurrentPage} /><SystemIntelligence /></>}
        {currentPage === 'access' && <AccessPage />}
        {currentPage === 'sap' && <SAPSecurityPage />}
        {currentPage === 'scheduling' && <JobSchedulingPage />}
        {currentPage === 'basis' && <BasisPage />}
        {currentPage === 'automation' && <ComingSoon title="Automation" />}
        {currentPage === 'teams' && <ComingSoon title="Teams" />}
      </main>
      <Footer />
    </div>
  );
}
