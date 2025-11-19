import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Workflow, MessageSquare, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Creative acceleration',
    desc: 'Concept, copy, and asset generation supercharged while keeping brand voice consistent.'
  },
  {
    icon: Workflow,
    title: 'Automated ops',
    desc: 'From intake to approvals to publishing, stitch tools together and remove manual work.'
  },
  {
    icon: MessageSquare,
    title: 'Client comms',
    desc: 'AI-assisted reporting, summaries, and Q&A that keep clients aligned without added lift.'
  },
  {
    icon: BarChart3,
    title: 'Insights & ROI',
    desc: 'Dashboards that track outcomes, not just outputs — clearer ROI on time and spend.'
  }
]

function Features() {
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_20%,rgba(168,85,247,0.08),transparent_60%),radial-gradient(700px_circle_at_90%_30%,rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What we unlock</h2>
          <p className="text-slate-300 mt-3">Focused outcomes for media, marketing, and PR teams</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              <f.icon className="h-6 w-6 text-violet-300" />
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
