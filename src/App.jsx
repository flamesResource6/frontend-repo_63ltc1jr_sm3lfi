import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Audits from './components/Audits'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Auraline</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#audits" className="hover:text-white">Audits</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Audits />
        <Process />
        <CTA />
      </main>

      <footer className="bg-slate-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 text-sm text-slate-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Auraline Consulting</span>
          <a className="hover:text-white" href="#">Privacy</a>
        </div>
      </footer>
    </div>
  )
}

export default App
