import React from 'react'
import { motion } from 'framer-motion'

const audits = [
  {
    name: 'Starter Audit',
    price: 'Free',
    desc: 'Quick pulse-check to highlight high-ROI automation ideas.',
    cta: 'Take the free audit',
    href: 'https://tally.so/r/3l5zvx' // Replace with your Tally form URL
  },
  {
    name: 'Focused Audit',
    price: '£90–£150',
    desc: 'Deep-dive into a single workflow with prioritized blueprint.',
    cta: 'Book the focused audit',
    href: '#contact'
  },
  {
    name: 'Full Program',
    price: 'Contact for pricing',
    desc: 'End-to-end partnership from strategy to build and enablement.',
    cta: 'Talk to us',
    href: '#contact'
  }
]

function Audits() {
  return (
    <section id="audits" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_50%_20%,rgba(59,130,246,0.06),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Start with an audit</h2>
          <p className="text-slate-300 mt-3">Three options for any stage of your AI journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {audits.map((a, i) => (
            <motion.a
              key={a.name}
              href={a.href}
              target={a.href.startsWith('http') ? '_blank' : undefined}
              rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition block"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">{a.name}</h3>
                <span className="text-violet-300 text-sm">{a.price}</span>
              </div>
              <p className="mt-3 text-slate-300 text-sm">{a.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-white/90 group-hover:text-white">
                <span className="font-medium">{a.cta}</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Audits
