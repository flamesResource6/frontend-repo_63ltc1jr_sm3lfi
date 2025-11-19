import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardCheck, LayoutDashboard, Hammer, Activity } from 'lucide-react'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Audit',
    desc: 'Assess workflows, systems, and opportunities across your stack.'
  },
  {
    icon: LayoutDashboard,
    title: 'Plan',
    desc: 'Design the blueprint, pick the tools, and prioritize for ROI.'
  },
  {
    icon: Hammer,
    title: 'Build',
    desc: 'Implement automations, prompts, and integrations end-to-end.'
  },
  {
    icon: Activity,
    title: 'Monitor',
    desc: 'Track performance, retrain, and iterate with real data.'
  }
]

function Process() {
  return (
    <section id="process" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_80%_10%,rgba(14,165,233,0.07),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">How we work</h2>
          <p className="text-slate-300 mt-3">Four simple steps from idea to impact</p>
        </div>

        <ol className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center text-violet-300">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{i + 1}. {s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
