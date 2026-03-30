import { motion } from 'motion/react';
import { Megaphone, CheckCircle2, LockOpen, Ticket, ArrowRight } from 'lucide-react';
import { AsymmetricCard } from './components/AsymmetricCard';

export default function AccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <main className="flex-grow max-w-screen-2xl mx-auto w-full px-8 pt-12 pb-24">
        <section className="mb-16">
          <div className="inline-flex items-center px-3 py-1 text-xs font-bold tracking-wider uppercase mb-6 status-tag">
            SYSTEM OPERATIONAL
          </div>
          <h1 className="font-oxygen font-light text-6xl md:text-7xl text-on-surface tracking-tighter mb-4 leading-none">
            IT-Access Management
          </h1>
          <p className="font-noto text-lg text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Centralized governance for enterprise-wide identity protocols, role-based security clearance, and automated credential lifecycle management.
          </p>
          <div className="mt-8 w-[150px] h-[4px] avaya-gradient-bg rounded-full"></div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <AsymmetricCard>
              <h2 className="font-oxygen font-bold text-xl mb-6 text-primary flex items-center gap-2">
                <Megaphone className="w-5 h-5" /> Announcements
              </h2>
              <div className="space-y-6">
                {[
                  { date: 'OCT 24', title: 'New SSO Integration for Cloud Clusters', desc: 'Multi-factor authentication is now mandatory for all AWS-instance access requests via the central portal.' },
                  { date: 'OCT 18', title: 'Q4 Security Audit Schedule', desc: 'Routine credential harvesting and audit sessions will commence next Monday for all internal systems.' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-6 items-start">
                    <div className="text-xs font-bold text-on-surface-variant font-oxygen opacity-50 pt-1 w-12 flex-shrink-0">{item.date}</div>
                    <div>
                      <h3 className="font-bold text-on-surface mb-1">{item.title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AsymmetricCard>
            <AsymmetricCard>
              <h2 className="font-oxygen font-bold text-xl mb-6 text-primary">Core Responsibilities</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Privileged Account Management (PAM)', 'Onboarding & Offboarding Lifecycle', 'Active Directory Governance', 'VPN & Network Tunnel Provisioning', 'SaaS License Compliance', 'Biometric Authentication Standards'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-on-surface-variant font-noto text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </AsymmetricCard>
            <AsymmetricCard>
              <h2 className="font-oxygen font-bold text-xl mb-6 text-primary">Team Contacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Marcus Thorne', role: 'Lead Access Architect', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATp8TVpwbUr1yvzsoLr2VDxdx5s1aXLCJRGRU4_8_tYlrfynBq6Tt42fUVmuwG4WnG7V3jfMyBnabYrwEs5dZS74Eu4nsxy90WY80D8Ne3t0R938KEzn2ijS5cS1yVWDeDGEbu0KBzWAb9WvGL5nDnKrFVy4I2uDTPdB_jGx1XQ87xcL_uQ5SNPEBvICUW04srHwohxHLwWMk8CG69Zh3Wk0B8Hh4Aw_iZOC-ZLfJQ4OhoQNMKlPg_IDMPkSW9wEpsA1r_UJanHjBr' },
                  { name: 'Elena Rodriguez', role: 'Security Compliance', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEZQQ6nKPlFko-IpDofWJF9xVEAaXJ19KWAEEXzfX_LmMG42DlJifcd_Cc_T_c9wY_PmLrkJJv5jfzEZiYAYlSNtoZOGXvCTA6_WZas3GA8XKRXCG79xsS8qjfveL7t_xH3S6ZfzPOwcsIjCZdxcyjNV6nbHz4X1zoQ8GCIdbQoGle5q-v6drDCXEcUTCp2nyeCiYkyndk3H0yinyP4bVSvLTrnPExPodA3acIHImN1-2G3yUIsYJc9WVLZP5lDWHvOOq0J_4WuDU-' }
                ].map((person) => (
                  <div key={person.name} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg">
                    <img className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0" src={person.img} alt={person.name} referrerPolicy="no-referrer" />
                    <div>
                      <p className="font-bold text-on-surface">{person.name}</p>
                      <p className="text-xs text-on-surface-variant font-oxygen uppercase tracking-widest">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AsymmetricCard>
          </div>
          <aside className="space-y-6">
            <div className="px-2">
              <h3 className="font-oxygen font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6">Quick Actions</h3>
              <div className="flex flex-col gap-6">
                <AsymmetricCard withOffset className="group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full avaya-gradient-bg flex items-center justify-center text-white">
                        <LockOpen className="w-5 h-5" />
                      </div>
                      <span className="font-oxygen font-bold text-lg">Request Access</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <p className="mt-4 text-sm text-on-surface-variant font-noto">Apply for new permissions or system roles across the core infrastructure.</p>
                </AsymmetricCard>
                <AsymmetricCard withOffset className="group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-primary-container group-hover:text-white transition-colors">
                        <Ticket className="w-5 h-5" />
                      </div>
                      <span className="font-oxygen font-bold text-lg">Open a Ticket</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  <p className="mt-4 text-sm text-on-surface-variant font-noto">Report an issue with existing credentials or locked enterprise accounts.</p>
                </AsymmetricCard>
                <div className="p-6 bg-slate-900 rounded-lg text-white mt-4">
                  <span className="text-[10px] uppercase tracking-widest text-sky-400 font-bold mb-2 block">Policy Update</span>
                  <h4 className="font-oxygen text-lg mb-4">Identity Standards v4.2</h4>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">Download the latest framework for security clearance protocols within remote workspaces.</p>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-primary py-3 rounded-sm font-oxygen font-bold text-sm text-white hover:bg-primary-container transition-colors rounded-br-[32px]">
                    Download PDF
                  </motion.button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
