export default function JobSchedulingPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="max-w-screen-2xl mx-auto px-8 pt-12 pb-24 w-full">

        {/* Hero */}
        <header className="mb-16">
          <div className="inline-flex items-center px-4 py-1.5 mb-6"
            style={{ backgroundColor: '#E0F9DC', borderLeft: '3px solid #63C558' }}>
            <span className="text-xs font-bold tracking-widest uppercase">System Operational</span>
          </div>
          <h1 className="font-oxygen font-light text-6xl lg:text-7xl text-on-surface mb-4 tracking-tight leading-none">
            Enterprise Job <br /><span className="font-bold">Scheduling</span>
          </h1>
          <p className="font-noto text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Centralized orchestration for automated workflows, high-frequency task sequences, and cross-platform infrastructure synchronization.
          </p>
          <div className="mt-12 h-1 w-[150px] rounded-full avaya-gradient-bg"></div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-12">

          {/* Left Column */}
          <div className="col-span-12 lg:col-span-8 space-y-12">

            {/* Announcements */}
            <section className="bg-white border border-[#E6E6E6] rounded-lg p-10 shadow-sm">
              <h2 className="font-oxygen font-bold text-2xl tracking-tight mb-8">Announcements</h2>
              <div className="space-y-6">
                {[
                  { date: 'March 14, 2024', title: 'Q2 Infrastructure Expansion', desc: 'System-wide job scheduling will experience a 15-minute window of latency during the migration to the new Frankfurt data cluster.' },
                  { date: 'March 10, 2024', title: 'New API Endpoints Released', desc: 'Webhooks are now available for real-time job failure notifications via Slack and Microsoft Teams integrations.' }
                ].map((item) => (
                  <div key={item.title} className="p-6 bg-[#F3F3F3] rounded-lg cursor-pointer hover:bg-white transition-colors border border-transparent hover:border-[#E6E6E6]">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">{item.date}</span>
                    <h3 className="font-oxygen font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Responsibilities */}
            <section className="bg-white border border-[#E6E6E6] rounded-lg p-10 shadow-sm">
              <h2 className="font-oxygen font-bold text-2xl tracking-tight mb-8">Core Responsibilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Queue Management', desc: 'Maintain and prioritize job queues across production and staging environments.' },
                  { title: 'Security Audits', desc: 'Periodic verification of credentials and service accounts used for task execution.' },
                  { title: 'Uptime Monitoring', desc: '24/7 observation of job success rates and automated recovery triggers.' },
                  { title: 'Data Integrity', desc: 'Ensuring transactional consistency for high-volume data transformation jobs.' }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Team Contacts */}
            <section className="bg-white border border-[#E6E6E6] rounded-lg p-10 shadow-sm">
              <h2 className="font-oxygen font-bold text-2xl tracking-tight mb-8">Team Contacts</h2>
              <div className="flex flex-wrap gap-6">
                {[
                  { name: 'Marcus Chen', role: 'Lead Architect' },
                  { name: 'Sarah Jenkins', role: 'DevOps Specialist' },
                  { name: 'David Vogt', role: 'Automation Lead' }
                ].map((person) => (
                  <div key={person.name} className="flex items-center gap-3 pr-6 border-r border-[#E6E6E6] last:border-0">
                    <div className="w-10 h-10 rounded-full avaya-gradient-bg flex items-center justify-center text-white font-bold flex-shrink-0">
                      {person.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">{person.name}</p>
                      <p className="text-xs text-on-surface-variant uppercase tracking-wider">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <h3 className="font-oxygen font-bold text-sm uppercase tracking-[0.2em] text-on-surface-variant">Quick Actions</h3>
            {[
              { title: 'Schedule Job', desc: 'Initialize a new recurring task or one-time batch execution.' },
              { title: 'Job Status Request', desc: 'Query the live status and execution logs of any active PID.' }
            ].map((action) => (
              <div key={action.title}
                className="bg-white border border-[#E6E6E6] p-8 rounded-lg cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-transform shadow-sm">
                <h4 className="font-oxygen font-bold text-xl mb-2">{action.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{action.desc}</p>
                <span className="text-primary font-bold text-sm mt-3 inline-block">→ Open</span>
              </div>
            ))}
            <div className="bg-[#DADADA] rounded-lg p-6">
              <h5 className="font-bold text-sm mb-2">System Health</h5>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-medium">99.98% Success Rate</span>
              </div>
              <div className="w-full h-1 bg-white rounded-full overflow-hidden">
                <div className="h-full w-[85%] rounded-full avaya-gradient-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
