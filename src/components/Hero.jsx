import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Spline scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            AI & Automation Consulting for Media, Marketing & PR
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Ship smarter campaigns with an AI-native partner
          </h1>
          <p className="mx-auto max-w-2xl text-slate-300 text-lg md:text-xl">
            We help agencies design, automate, and scale workflows using AI — from ideation and content ops to reporting and client comms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <a href="#audits" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow/50 shadow-violet-500/10 hover:shadow-violet-500/30 transition">Start with an audit</a>
            <a href="#process" className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition">How we work</a>
          </div>
        </motion.div>
      </div>

      {/* Soft radial highlight at bottom */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-[90%] rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.25),transparent_70%)] blur-2xl"></div>
    </section>
  )
}

export default Hero
