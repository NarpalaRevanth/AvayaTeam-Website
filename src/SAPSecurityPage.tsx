export default function SAPSecurityPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <main className="max-w-screen-2xl mx-auto px-8 pt-12 pb-24 w-full">

        {/* Hero */}
        <section className="mb-16">
          <div className="inline-flex items-center px-3 py-1 text-xs font-bold tracking-wider uppercase mb-6"
            style={{ backgroundColor: '#E0F9DC', borderLeft: '3px solid #63C558' }}>
            STATUS: SECURE
          </div>
          <h1 className="font-oxygen font-light text-6xl md:text-7xl text-on-surface tracking-tighter mb-4 leading-none">
            SAP Security
          </h1>
          <p className="font-noto text-lg text-on-surface-variant max-w-2xl font-light leading-relaxed">
            Global security protocols, centralized role management, and continuous compliance oversight for the enterprise SAP ecosystem.
          </p>
          <div className="mt-8 w-[150px] h-[4px] rounded-full avaya-gradient-bg"></div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Announcements */}
            <article className="bg-white border border-[#E6E6E6] rounded-lg p-8 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-oxygen font-bold text-xl text-on-surface">Announcements</h2>
                <button className="text-primary font-bold text-sm uppercase tracking-widest hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                {[
                  { date: 'OCT 24, 2023', title: 'Quarterly Security Patch Cycle (Q4) Scheduled', desc: 'System downtime is expected between 22:00 and 04:00 EST for critical kernel updates.' },
                  { date: 'OCT 18, 2023', title: 'New Multi-Factor Authentication Requirements', desc: 'All SAP GUI users must transition to the new SSO platform by the end of the month.' }
                ].map((item) => (
                  <div key={item.title} className="group cursor-pointer">
                    <p className="text-xs text-on-surface-variant font-bold mb-1 uppercase">{item.date}</p>
                    <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm mt-2 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Core Responsibilities */}
            <article className="bg-white border border-[#E6E6E6] rounded-lg p-8 shadow-sm">
              <h2 className="font-oxygen font-bold text-xl text-on-surface mb-8">Core Responsibilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Role Maintenance', desc: 'Design, creation, and maintenance of PFCG roles and authorization objects.' },
                  { title: 'Audit Compliance', desc: 'Continuous monitoring of SOD (Segregation of Duties) and internal control audits.' },
                  { title: 'Identity Governance', desc: 'Managing user lifecycles across ECC, S/4HANA, and Cloud platforms.' },
                  { title: 'Incident Response', desc: '24/7 monitoring and response to security breaches or unauthorized access attempts.' }
                ].map((item) => (
                  <div key={item.title} className="p-5 bg-[#F3F3F3] rounded-lg">
                    <h4 className="font-bold text-on-surface mb-2">✦ {item.title}</h4>
                    <p className="text-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Team Contacts */}
            <article className="bg-white border border-[#E6E6E6] rounded-lg p-8 shadow-sm">
              <h2 className="font-oxygen font-bold text-xl text-on-surface mb-8">Team Contacts</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[#E6E6E6]">
                      {['NAME', 'ROLE', 'REGION', 'CONTACT'].map(h => (
                        <th key={h} className="pb-4 font-bold text-sm text-on-surface-variant">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E6E6E6]">
                    {[
                      { name: 'Elena Rodriguez', role: 'Security Architect', region: 'EMEA', email: 'e.rodriguez@sap.corp' },
                      { name: 'Marcus Chen', role: 'GRC Specialist', region: 'APAC', email: 'm.chen@sap.corp' },
                      { name: 'Sarah Jenkins', role: 'Audit Lead', region: 'AMER', email: 's.jenkins@sap.corp' }
                    ].map((p) => (
                      <tr key={p.name}>
                        <td className="py-4 font-medium">{p.name}</td>
                        <td className="py-4 text-sm text-on-surface-variant">{p.role}</td>
                        <td className="py-4 text-sm text-on-surface-variant">{p.region}</td>
                        <td className="py-4 text-sm text-primary">{p.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          {/* Right Column */}
          <aside className="space-y-6">
            <h3 className="font-oxygen font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant">⚡ Quick Actions</h3>
            {[
              { title: 'SAP Role Request', desc: 'Submit a new authorization request or modify existing permissions across ERP environments.' },
              { title: 'Security Audit', desc: 'Run automated compliance checks and generate SOD reports for your assigned functional area.' }
            ].map((action) => (
              <div key={action.title}
                className="bg-white border border-[#E6E6E6] p-6 rounded-lg cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-transform shadow-sm">
                <h4 className="text-xl font-bold text-on-surface mb-2">{action.title}</h4>
                <p className="text-on-surface-variant text-sm leading-normal">{action.desc}</p>
                <span className="text-primary font-bold text-sm mt-3 inline-block">→ Open</span>
              </div>
            ))}
            <div className="p-6 bg-[#F3F3F3] rounded-lg border-l-4 border-primary">
              <h5 className="font-bold text-sm text-on-surface-variant uppercase tracking-wider mb-2">Need Help?</h5>
              <p className="text-sm text-on-surface">For urgent access locks or production issues, contact the Security Hotline at <strong>ext. 9911</strong>.</p>
              <a className="inline-block mt-4 text-primary font-bold text-sm hover:underline" href="#">Launch Support Chat →</a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
