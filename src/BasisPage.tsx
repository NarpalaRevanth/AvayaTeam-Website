import { Search, Megaphone, Network, Database, Gauge, ShieldCheck, CloudCheck, Users, Headset, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function BasisPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="flex-1 px-10 py-12 max-w-screen-2xl mx-auto w-full">

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-16 pb-8"
        >
          <div className="flex flex-col gap-4">
            <div className="inline-flex self-start items-center px-4 py-1 border-l-[3px]"
              style={{ backgroundColor: '#E0F9DC', borderColor: '#63C558' }}>
              <span className="text-xs font-bold tracking-widest text-black uppercase">System Active</span>
            </div>
            <h1 className="text-7xl font-oxygen font-light text-on-surface tracking-tighter leading-none">Basis</h1>
            <p className="text-xl font-noto text-on-surface-variant max-w-2xl font-light leading-relaxed">
              Core infrastructure and systems stability management team. We ensure the foundational layers of the network remain resilient and high-performing.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-[150px] h-[4px] avaya-gradient-bg"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-12 items-start">

          {/* Left Column */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-[#E6E6E6] rounded-[4px] p-10 space-y-16">

            {/* Announcements */}
            <section>
              <h2 className="text-2xl font-oxygen font-bold mb-8 text-on-surface flex items-center gap-3">
                <Megaphone className="size-6 text-primary" />
                Announcements
              </h2>
              <div className="space-y-6">
                {[
                  { date: 'OCT 24, 2023', title: 'Q4 Infrastructure Upgrade Scheduled', text: 'The main cluster will undergo maintenance on Sunday at 02:00 UTC. Expected downtime is minimal.' },
                  { date: 'OCT 18, 2023', title: 'Security Patch 4.2 Deployment', text: 'Critical security update has been deployed across all Basis nodes. No manual action required.' }
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.01 }}
                    className="p-6 bg-[#F3F3F3] rounded-[4px_4px_32px_4px] cursor-pointer"
                  >
                    <span className="text-xs font-bold text-primary mb-2 block">{item.date}</span>
                    <h3 className="text-lg font-oxygen font-bold text-on-surface mb-2">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm font-noto leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Core Responsibilities */}
            <section>
              <h2 className="text-2xl font-oxygen font-bold mb-8 text-on-surface flex items-center gap-3">
                <Network className="size-6 text-primary" />
                Core Responsibilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Database, title: 'Data Redundancy', desc: 'Managing triple-tier backup systems.' },
                  { icon: Gauge, title: 'Latency Optimization', desc: 'Global edge distribution tuning.' },
                  { icon: ShieldCheck, title: 'SSL Management', desc: 'Automated certificate rotation.' },
                  { icon: CloudCheck, title: 'Uptime Monitoring', desc: '99.99% service level agreement.' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 border-l-2 border-[#E6E6E6]">
                    <item.icon className="size-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-oxygen font-bold text-on-surface">{item.title}</p>
                      <p className="text-sm font-noto text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Team Contacts */}
            <section>
              <h2 className="text-2xl font-oxygen font-bold mb-8 text-on-surface flex items-center gap-3">
                <Users className="size-6 text-primary" />
                Team Contacts
              </h2>
              <div className="flex flex-wrap gap-8">
                {[
                  { name: 'Marcus Chen', role: 'Lead Architect', img: 'https://picsum.photos/seed/marcus/100/100' },
                  { name: 'Sarah Jenkins', role: 'Operations Manager', img: 'https://picsum.photos/seed/sarah/100/100' }
                ].map((person) => (
                  <div key={person.name} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-[4px_4px_32px_4px] bg-[#E6E6E6] overflow-hidden flex-shrink-0">
                      <img
                        alt={person.name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        src={person.img}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="font-oxygen font-bold text-on-surface">{person.name}</p>
                      <p className="text-xs font-noto text-on-surface-variant uppercase tracking-wider">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <aside className="col-span-12 lg:col-span-4 space-y-8">
            <h2 className="text-sm font-oxygen font-bold tracking-[0.2em] text-on-surface-variant uppercase mb-4">Quick Actions</h2>

            {[
              { icon: Headset, title: 'Basis Support', desc: 'Direct line for infrastructure emergency response and ticketing.', action: 'OPEN TICKET', accent: '#0194D7' },
              { icon: TrendingUp, title: 'Performance Monitoring', desc: 'Real-time health dashboards and predictive analysis metrics.', action: 'VIEW DASHBOARD', accent: '#683193' }
            ].map((card) => (
              <div key={card.title}
                className="group relative bg-white p-8 border border-[#E6E6E6] cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1"
                style={{ borderRadius: '4px 4px 32px 4px', boxShadow: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `4px 4px 0px 0px ${card.accent}`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div className="flex flex-col gap-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-[4px] flex-shrink-0"
                    style={{ backgroundColor: `${card.accent}15`, color: card.accent }}>
                    <card.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-oxygen font-bold text-on-surface">{card.title}</h3>
                    <p className="font-noto text-on-surface-variant text-sm mt-2 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="flex items-center font-oxygen font-bold text-sm gap-2" style={{ color: card.accent }}>
                    {card.action}
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            ))}

            {/* Network Health Stats Card */}
            <div className="p-8 bg-[#DADADA] rounded-[4px_4px_32px_4px]">
              <p className="text-xs font-oxygen font-bold text-on-surface-variant tracking-widest uppercase mb-6">Network Health</p>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-oxygen font-light text-on-surface leading-none">99.98</span>
                <span className="text-xl font-oxygen font-bold text-primary mb-1">%</span>
              </div>
              <p className="text-sm font-noto text-on-surface-variant">Global uptime in the last 30 days</p>
              <div className="mt-6 h-1 w-full bg-white rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '99.98%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full avaya-gradient-bg"
                ></motion.div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
