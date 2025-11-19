import React from 'react'
import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_80%,rgba(99,102,241,0.06),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur"
        >
          <h3 className="text-white text-2xl md:text-3xl font-semibold">Ready to explore what AI can unlock?</h3>
          <p className="text-slate-300 mt-3">Share your goals and we’ll suggest a lightweight path to results in weeks, not months.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#audits" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium">Choose an audit</a>
            <a href="mailto:hello@example.com" className="rounded-xl border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition">Email us</a>
          </div>
        </motion.div>
        <p className="mt-6 text-xs text-slate-400">By contacting us you agree to receive a reply and related information. No spam.</p>
      </div>
    </section>
  )
}

export default CTA
